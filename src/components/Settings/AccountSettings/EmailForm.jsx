import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../styles/settings-css.js';
import PrefillForm from '../../Legos/PrefillForm.jsx';
import validators from '../../../validators/textinput.js';
import {
  resetAccountSettingsState,
  changeAccountSettingsEmail,
  changeAccountSettingsEmailConfirm,
  changeAccountSettingsEmailDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsEmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.accountSettingsReducer.emailView

      ?

      <PrefillForm
        submitLabel={'review change'}
        submit={() => this.props.changeAccountSettingsEmailDialogViewState()}
        reset={this.props.resetAccountSettingsState}
        inputs={[{
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
        }]}
      />

      :

      'Email'
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsEmail,
    changeAccountSettingsEmailConfirm,
    changeAccountSettingsEmailDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsEmailForm);
