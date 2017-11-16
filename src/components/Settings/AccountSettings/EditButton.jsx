import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import css from '../../../styles/settings-css.js';
import FlatButton from 'material-ui/FlatButton';
import {
  resetAccountSettingsState,
  changeAccountSettingsNameViewState,
  changeAccountSettingsEmailViewState,
  changeAccountSettingsPasswordViewState,
  changeAccountSettingsDeactivateViewState, } from '../../../actions/actions.js';


class AccountSettingsEditButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      type,
      accountSettingsReducer,
      resetAccountSettingsState,
      changeAccountSettingsNameViewState,
      changeAccountSettingsEmailViewState,
      changeAccountSettingsPasswordViewState,
      changeAccountSettingsDeactivateViewState, } = this.props;

    const commands = {
      name: {
        editFormView: accountSettingsReducer.nameView,
        toggleEditFormView: changeAccountSettingsNameViewState,
      },
      email: {
        editFormView: accountSettingsReducer.emailView,
        toggleEditFormView: changeAccountSettingsEmailViewState,
      },
      password: {
        editFormView: accountSettingsReducer.passwordView,
        toggleEditFormView: changeAccountSettingsPasswordViewState,
      },
      deactivate: {
        editFormView: accountSettingsReducer.deactivateView,
        toggleEditFormView: changeAccountSettingsDeactivateViewState,
      },
    };

    const click = () => {
      resetAccountSettingsState();
      commands[type].toggleEditFormView();
    };

    return (
      commands[type].editFormView

      ?

      null

      :

      <FlatButton
        key={'0'}
        label={'Edit'}
        style={css.edit}
        onClick={() => click()}
      />
    );
  }
}


function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsNameViewState,
    changeAccountSettingsEmailViewState,
    changeAccountSettingsPasswordViewState,
    changeAccountSettingsDeactivateViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsEditButton);
