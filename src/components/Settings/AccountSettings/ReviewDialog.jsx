import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../../styles/settings-css.js';
import validators from '../../../validators/textinput.js';
import Dialog from 'material-ui/Dialog';
import Form from '../../Legos/Form.jsx';
import {
  resetAccountSettingsState,
  changeAccountSettingsError,
  changeAccountSettingsPasswordAuth, } from '../../../actions/actions.js';


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
      changeAccountSettingsPasswordAuth, } = this.props;

    const commands = {
      name: {
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/auth/update`,
        view: accountSettingsReducer.nameDialogView,
        text: 'If youre happy with the new name, please enter your password:',
        val: `Change name to ${accountSettingsReducer.first}  ${accountSettingsReducer.last}`,
        payload:{first: accountSettingsReducer.first, last: accountSettingsReducer.last}
      },
      email: {
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/auth/update`,
        view: accountSettingsReducer.emailDialogView,
        val: `Change email to ${accountSettingsReducer.email}`,
        text: 'If youre happy with the new email, please enter your password:',
        payload:{email: accountSettingsReducer.email}
      },
      password: {
        method: 'PUT',
        url: `${process.env.REACT_APP_API}/auth/update/password`,
        view: accountSettingsReducer.passwordDialogView,
        val: 'Change password',
        text: 'If youre happy with the new password, please enter your current password:',
        payload:{password: accountSettingsReducer.password}
      },
      deactivate: {
        method: 'DELETE',
        url: `${process.env.REACT_APP_API}/auth/deactivate`,
        view: accountSettingsReducer.deactivateDialogView,
        text: 'If youre ready to deactivate your account, please enter your password:',
        val: null,
        payload: null
      },
    };

    const myInit = {
      method: commands[type].method,
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        password: accountSettingsReducer.passwordAuth,
        payload: commands[type].payload,
        jwt: JSON.parse(localStorage.getItem('user')).jwt
      })
    };

    const submitChange = async() => {
      await fetch(commands[type].url, myInit)
      .then(response => response.json())
      .then(response => {
        switch(response.success){
          case true:
            localStorage.removeItem('user');
            localStorage.setItem('user', JSON.stringify(response.payload));
            return resetAccountSettingsState();
          case false:
            console.error(response.payload);
            return changeAccountSettingsError(response.payload);
          case 'deactivated':
            resetAccountSettingsState();
            localStorage.removeItem('user');
            return window.location.reload(true);
          default:
            return resetAccountSettingsState();
        }
      })
      .catch(error => {
        console.error(error);
        return changeAccountSettingsError(error.detail);
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

        {accountSettingsReducer.error === null ? <p>{accountSettingsReducer.error}</p> : null}

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
    changeAccountSettingsPasswordAuth, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsReviewDialog);
