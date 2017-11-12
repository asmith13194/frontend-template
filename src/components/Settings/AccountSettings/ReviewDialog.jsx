import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../../styles/settings-css.js';
import axios from 'axios';
import validators from '../../../validators/textinput.js';
import Dialog from 'material-ui/Dialog';
import Form from '../../Legos/Form.jsx';
import {
  resetAccountSettingsState,
  changeAccountSettingsError,
  changeAccountSettingsPasswordAuth,
  changeAccountSettingsErrorViewState,
  changeAccountSettingsNameDialogViewState,
  changeAccountSettingsEmailDialogViewState,
  changeAccountSettingsWrongPasswordViewState,
  changeAccountSettingsPasswordDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount(){
    this.props.resetAccountSettingsState();
  }

  render() {
    const { type } = this.props;

    const commands = {
      name: {
        view: this.props.accountSettingsReducer.nameDialogView,
        changeView: this.props.changeAccountSettingsNameDialogViewState,
        val: this.props.accountSettingsReducer.first + ' ' + this.props.accountSettingsReducer.last,
        payload:{first: this.props.accountSettingsReducer.first, last: this.props.accountSettingsReducer.last}
      },
      email: {
        view: this.props.accountSettingsReducer.emailDialogView,
        changeView: this.props.changeAccountSettingsEmailDialogViewState,
        val: this.props.accountSettingsReducer.email,
        payload:{email: this.props.accountSettingsReducer.email}
      },
      password: {
        view: this.props.accountSettingsReducer.passwordDialogView,
        changeView: this.props.changeAccountSettingsPasswordDialogViewState,
        val: '********',
        payload:{password: this.props.accountSettingsReducer.password}
      },
    };

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
      axios.post(type === 'password' ? 'http://localhost:8000/auth/update/password' : 'http://localhost:8000/auth/update', {password: this.props.accountSettingsReducer.passwordAuth, payload: commands[type].payload, token: JSON.parse(localStorage.getItem('user')).token})
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
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            this.props.resetAccountSettingsState();
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
        title={'Preview your new ' + type}
        modal={true}
        open={commands[type].view}
      >
        <p>Change { type } to {commands[type].val}</p>

        <p>If you're happy with the new { type }, please enter your password:</p>

        {this.props.accountSettingsReducer.wrongPasswordView ? <p>wrong password</p> : null}
        {this.props.accountSettingsReducer.errorView ? <p>{this.props.accountSettingsReducer.error}</p> : null}


        <Form
          submitLabel={'Save Changes'}
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
    changeAccountSettingsNameDialogViewState,
    changeAccountSettingsEmailDialogViewState,
    changeAccountSettingsWrongPasswordViewState,
    changeAccountSettingsPasswordDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsNameForm);
