import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import css from '../../../styles/settings-css.js';
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
    const { view } = this.props;

    const click = () => {
      this.props.changeAccountSettingsDeactivateDialogViewState();
    };

    {
      return view
      ?
      <RaisedButton
      key={'0'}
      onClick={() => click()}
      style={css.deactivate}
      label={'Deactivate Account'}
      />
      :
      'Manage Account';
    }
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
