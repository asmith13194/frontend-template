import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../styles/settings-css.js';
import PrefillForm from '../../Legos/PrefillForm.jsx';
import validators from '../../../validators/textinput.js';
import {
  resetAccountSettingsState,
  changeAccountSettingsLast,
  changeAccountSettingsFirst,
  changeAccountSettingsEmail,
  changeAccountSettingsPassword,
  changeAccountSettingsEmailConfirm,
  changeAccountSettingsPasswordConfirm,
  changeAccountSettingsNameDialogViewState,
  changeAccountSettingsEmailDialogViewState,
  changeAccountSettingsPasswordDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props;

    const commands = {
      name: {
        text: 'Name',
        submit: this.props.changeAccountSettingsNameDialogViewState,
        view: this.props.accountSettingsReducer.nameView,
        inputs : [{
          name: 'first',
          type: 'first',
          prefill: JSON.parse(localStorage.getItem('user')).info.first,
          text: 'First',
          view: this.props.accountSettingsReducer.firstView,
          reducerVal: this.props.accountSettingsReducer.first,
          changeValAction: this.props.changeAccountSettingsFirst,
          validation: validators.first
        },{
          name: 'last',
          type: 'last',
          prefill: JSON.parse(localStorage.getItem('user')).info.last,
          text: 'Last',
          view: this.props.accountSettingsReducer.lastView,
          reducerVal: this.props.accountSettingsReducer.last,
          changeValAction: this.props.changeAccountSettingsLast,
          validation: validators.last
        }]
      },
      email: {
        text: 'Email',
        submit: this.props.changeAccountSettingsEmailDialogViewState,
        view: this.props.accountSettingsReducer.emailView,
        inputs : [{
          name: 'email',
          prefill: JSON.parse(localStorage.getItem('user')).info.email,
          text: 'Email',
          reducerVal: this.props.accountSettingsReducer.email,
          changeValAction: this.props.changeAccountSettingsEmail,
          validation: validators.email
        },{
          name: 'confirm email',
          prefill: '',
          text: 'Confirm Email',
          reducerVal: this.props.accountSettingsReducer.emailConfirm,
          changeValAction: this.props.changeAccountSettingsEmailConfirm,
          validation: validators.emailConfirm
        }]
      },
      password: {
        text: 'Password',
        submit: this.props.changeAccountSettingsPasswordDialogViewState,
        view: this.props.accountSettingsReducer.passwordView,
        inputs : [{
          name: 'password',
          type: 'password',
          text: 'New Password',
          prefill: '',
          reducerVal: this.props.accountSettingsReducer.password,
          changeValAction: this.props.changeAccountSettingsPassword,
          validation: validators.password
        },{
          name: 'confirm password',
          type: 'password',
          text: 'Confirm New Password',
          prefill: '',
          reducerVal: this.props.accountSettingsReducer.passwordConfirm,
          changeValAction: this.props.changeAccountSettingsPasswordConfirm,
          validation: validators.passwordConfirm
        }]
      },
      deactivate: {
        typeText: 'Manage Account',
        text: '',
        view: this.props.accountSettingsReducer.deactivateView
      }
    };

    return (
      commands[type].view

      ?

      <PrefillForm
        submitLabel={'review change'}
        submit={commands[type].submit}
        reset={this.props.resetAccountSettingsState}
        inputs={commands[type].inputs}
      />

      :

      commands[type].text
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsLast,
    changeAccountSettingsFirst,
    changeAccountSettingsEmail,
    changeAccountSettingsPassword,
    changeAccountSettingsEmailConfirm,
    changeAccountSettingsPasswordConfirm,
    changeAccountSettingsNameDialogViewState,
    changeAccountSettingsEmailDialogViewState,
    changeAccountSettingsPasswordDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsNameForm);
