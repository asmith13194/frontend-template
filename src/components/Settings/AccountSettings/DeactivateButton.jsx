import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../styles/settings-css.js';
import RaisedButton from 'material-ui/RaisedButton';
import {
  resetAccountSettingsState,
  changeAccountSettingsDeactivateDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsDeactivateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const click = () => {
      this.props.resetAccountSettingsState();
      this.props.changeAccountSettingsDeactivateDialogViewState();
    };

    return (
      this.props.accountSettingsReducer.deactivateView
      ?
      <RaisedButton
      key={'0'}
      label={'Deactivate Account'}
      onClick={() => click()}
      />
      :
      null
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsDeactivateDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsDeactivateButton);
