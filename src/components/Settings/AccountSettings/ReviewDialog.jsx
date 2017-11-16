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
  changeAccountSettingsWrongPasswordViewState, } from '../../../actions/actions.js';


class AccountSettingsReviewDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount(){
    this.props.resetAccountSettingsState();
  }

  render() {
    const {
      type,
      accountSettingsReducer,
      resetAccountSettingsState,
      changeAccountSettingsError,
      changeAccountSettingsPasswordAuth,
      changeAccountSettingsErrorViewState,
      changeAccountSettingsWrongPasswordViewState, } = this.props;

    const commands = {
      name: {
        url: `${process.env.REACT_APP_API}/auth/update`,
        view: accountSettingsReducer.nameDialogView,
        text: 'If youre happy with the new name, please enter your password:',
        val: `Change name to ${accountSettingsReducer.first}  ${accountSettingsReducer.last}`,
        payload:{first: accountSettingsReducer.first, last: accountSettingsReducer.last}
      },
      email: {
        url: `${process.env.REACT_APP_API}/auth/update`,
        view: accountSettingsReducer.emailDialogView,
        val: `Change email to ${accountSettingsReducer.email}`,
        text: 'If youre happy with the new email, please enter your password:',
        payload:{email: accountSettingsReducer.email}
      },
      password: {
        url: `${process.env.REACT_APP_API}/auth/update/password`,
        view: accountSettingsReducer.passwordDialogView,
        val: 'Change password',
        text: 'If youre happy with the new password, please enter your current password:',
        payload:{password: accountSettingsReducer.password}
      },
      deactivate: {
        url: `${process.env.REACT_APP_API}/auth/deactivate`,
        view: accountSettingsReducer.deactivateDialogView,
        text: 'If youre ready to deactivate your account, please enter your password:',
        val: null,
        payload: null
      },
    };

    const submitChange = () => {
      switch(accountSettingsReducer.wrongPasswordView){
        case true:
          changeAccountSettingsWrongPasswordViewState();
          break;
        default:
          break;
      }
      switch(accountSettingsReducer.errorView){
        case true:
          changeAccountSettingsErrorViewState();
          break;
        default:
          break;
      }
      axios.post(commands[type].url, {password: accountSettingsReducer.passwordAuth, payload: commands[type].payload, jwt: JSON.parse(localStorage.getItem('user')).jwt})
      .then(response => {
        switch(response.data.success){
          case true:
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            resetAccountSettingsState();
            return;
          case false:
            changeAccountSettingsError(response.data.payload);
            changeAccountSettingsErrorViewState();
            return;
          case 'deactivated':
            resetAccountSettingsState();
            localStorage.removeItem('user');
            window.location.reload(true);
            return;
          default:
            return resetAccountSettingsState();
        }
      })
      .catch(error => {
        changeAccountSettingsError(error.detail);
        changeAccountSettingsErrorViewState();
        return;
      });
    };

    return (
      <Dialog
        title={'Preview your new ' + type}
        modal={true}
        open={commands[type].view}
      >
        <p>{commands[type].val}</p>

        <p>{commands[type].text}</p>

        {accountSettingsReducer.wrongPasswordView ? <p>wrong password</p> : null}
        {accountSettingsReducer.errorView ? <p>{accountSettingsReducer.error}</p> : null}


        <Form
          submitLabel={'Save'}
          submit={submitChange}
          reset={resetAccountSettingsState}
          inputs={[{
            name: 'password',
            text: 'Password',
            type: 'password',
            reducerVal: accountSettingsReducer.passwordAuth,
            changeValAction: changeAccountSettingsPasswordAuth,
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

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsReviewDialog);
