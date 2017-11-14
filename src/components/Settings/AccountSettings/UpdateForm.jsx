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
  changeAccountSettingsPasswordDialogViewState,
  changeAccountSettingsDeactivateDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props;

    const commands = {
      name: {
        text: 'Name',
        submitLabel: 'Review Change',
        view: this.props.accountSettingsReducer.nameView,
        submit: this.props.changeAccountSettingsNameDialogViewState,
        inputs : [{
          name: 'first',
          type: 'first',
          text: 'First',
          validation: validators.first,
          view: this.props.accountSettingsReducer.firstView,
          reducerVal: this.props.accountSettingsReducer.first,
          changeValAction: this.props.changeAccountSettingsFirst,
          prefill: JSON.parse(localStorage.getItem('user')).info.first,
        },{
          name: 'last',
          type: 'last',
          text: 'Last',
          validation: validators.last,
          view: this.props.accountSettingsReducer.lastView,
          reducerVal: this.props.accountSettingsReducer.last,
          changeValAction: this.props.changeAccountSettingsLast,
          prefill: JSON.parse(localStorage.getItem('user')).info.last,
        }]
      },
      email: {
        text: 'Email',
        submitLabel: 'Review Change',
        view: this.props.accountSettingsReducer.emailView,
        submit: this.props.changeAccountSettingsEmailDialogViewState,
        inputs : [{
          name: 'email',
          text: 'Email',
          validation: validators.email,
          reducerVal: this.props.accountSettingsReducer.email,
          changeValAction: this.props.changeAccountSettingsEmail,
          prefill: JSON.parse(localStorage.getItem('user')).info.email,
        },{
          prefill: '',
          name: 'confirm email',
          text: 'Confirm Email',
          validation: validators.emailConfirm,
          reducerVal: this.props.accountSettingsReducer.emailConfirm,
          changeValAction: this.props.changeAccountSettingsEmailConfirm,
        }]
      },
      password: {
        text: 'Password',
        submitLabel: 'Review Change',
        view: this.props.accountSettingsReducer.passwordView,
        submit: this.props.changeAccountSettingsPasswordDialogViewState,
        inputs : [{
          prefill: '',
          name: 'password',
          type: 'password',
          text: 'New Password',
          validation: validators.password,
          reducerVal: this.props.accountSettingsReducer.password,
          changeValAction: this.props.changeAccountSettingsPassword,
        },{
          prefill: '',
          type: 'password',
          name: 'confirm password',
          text: 'Confirm New Password',
          validation: validators.passwordConfirm,
          reducerVal: this.props.accountSettingsReducer.passwordConfirm,
          changeValAction: this.props.changeAccountSettingsPasswordConfirm,
        }]
      },
      deactivate: {
        inputs : [],
        text: 'Manage Account',
        submitLabel: 'Deactivate Account',
        view: this.props.accountSettingsReducer.deactivateView,
        submit: this.props.changeAccountSettingsDeactivateDialogViewState,
      }
    };

    return (
      commands[type].view

      ?

      <PrefillForm
        submitLabel={commands[type].submitLabel}
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
    changeAccountSettingsPasswordDialogViewState,
    changeAccountSettingsDeactivateDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsUpdateForm);
