import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../../styles/settings-css.js';
import PrefillForm from '../../Legos/PrefillForm.jsx';
import validators from '../../../validators/textinput.js';
import {
  resetAccountSettingsState,
  changeAccountSettingsPassword,
  changeAccountSettingsPasswordConfirm,
  changeAccountSettingsPasswordDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      this.props.accountSettingsReducer.passwordView

      ?

      <div>

        <PrefillForm
          submitLabel={'review change'}
          submit={() => this.props.changeAccountSettingsPasswordDialogViewState()}
          reset={this.props.resetAccountSettingsState}
          inputs={[{
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
          }]}
        />

      </div>

      :

      'Password'
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsPassword,
    changeAccountSettingsPasswordConfirm,
    changeAccountSettingsPasswordDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsPasswordForm);
