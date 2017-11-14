import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../styles/settings-css.js';
import axios from 'axios';
import validators from '../../../validators/textinput.js';
import Dialog from 'material-ui/Dialog';
import Form from '../../Legos/Form.jsx';
import {
  resetAccountSettingsState,
  changeAccountSettingsError,
  changeAccountSettingsPasswordAuth,
  changeAccountSettingsErrorViewState,
  changeAccountSettingsWrongPasswordViewState, } from '../../../actions/actions.js';


class AccountSettingsNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentWillUnmount(){
  //   this.props.resetAccountSettingsState();
  // }

  render() {
    const submitChange = () => {
      switch(this.props.accountSettingsReducer.wrongPasswordView){
        case true:
          this.props.changeAccountSettingsWrongPasswordViewState();
          break;
        default:
          break;
      }
      switch(this.props.accountSettingsReducer.errorView){
        case true:
          this.props.changeAccountSettingsErrorViewState();
          break;
        default:
          break;
      }
      axios.post('http://localhost:8000/auth/deactivate', {password: this.props.accountSettingsReducer.passwordAuth, token: JSON.parse(localStorage.getItem('user')).token})
      .then(response => {
        switch(response.data.type){
          case 'invalid-user':
            this.props.resetAccountSettingsState();
            localStorage.removeItem('user');
            window.location.reload(true);
            return;
          case 'invalid-password':
            this.props.changeAccountSettingsPasswordAuth('');
            this.props.changeAccountSettingsWrongPasswordViewState();
            return;
          case 'error':
            this.props.changeAccountSettingsError(response.data.payload.detail);
            this.props.changeAccountSettingsErrorViewState();
            return;
          case 'success':
            this.props.resetAccountSettingsState();
            localStorage.removeItem('user');
            window.location.reload(true);
            return;
          default:
            return this.props.resetAccountSettingsState();
        }
      })
      .catch(error => {
        this.props.changeAccountSettingsError(error.detail);
        this.props.changeAccountSettingsErrorViewState();
        return;
      });
    };

    return (
      <Dialog
        title={'Deactivate Account'}
        modal={true}
        open={this.props.accountSettingsReducer.deactivateDialogView}
      >

        <p>If you're ready to deactivate your account, please enter your password:</p>

        {this.props.accountSettingsReducer.wrongPasswordView ? <p>wrong password</p> : null}
        {this.props.accountSettingsReducer.errorView ? <p>{this.props.accountSettingsReducer.error}</p> : null}


        <Form
          submitLabel={'Deactivate'}
          submit={submitChange}
          reset={this.props.resetAccountSettingsState}
          inputs={[{
            name: 'password',
            text: 'Password',
            type: 'password',
            reducerVal: this.props.accountSettingsReducer.passwordAuth,
            changeValAction: this.props.changeAccountSettingsPasswordAuth,
            validation: validators.textInput
          }]}
        />

      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsError,
    changeAccountSettingsPasswordAuth,
    changeAccountSettingsErrorViewState,
    changeAccountSettingsWrongPasswordViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsNameForm);
