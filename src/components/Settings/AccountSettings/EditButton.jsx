import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import css from '../../../styles/settings-css.js';
import FlatButton from 'material-ui/FlatButton';
import {
  resetAccountSettingsState,
  changeAccountSettingsFirstViewState,
  changeAccountSettingsNameViewState,
  changeAccountSettingsLastViewState,
  changeAccountSettingsEmailViewState,
  changeAccountSettingsPasswordViewState,
  changeAccountSettingsDeactivateViewState, } from '../../../actions/actions.js';


class AccountSettingsEditButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type } = this.props;

    const commands = {
      name: {
        changeView: this.props.changeAccountSettingsNameViewState,
        reducerView: this.props.accountSettingsReducer.nameView
      },
      email: {
        changeView: this.props.changeAccountSettingsEmailViewState,
        reducerView: this.props.accountSettingsReducer.emailView
      },
      password: {
        changeView: this.props.changeAccountSettingsPasswordViewState,
        reducerView: this.props.accountSettingsReducer.passwordView
      },
      deactivate: {
        changeView: this.props.changeAccountSettingsDeactivateViewState,
        reducerView: this.props.accountSettingsReducer.deactivateView
      },
    };

    const click = () => {
      this.props.resetAccountSettingsState();
      commands[type].changeView();
    };

    return (
      commands[type].reducerView
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
    changeAccountSettingsLastViewState,
    changeAccountSettingsFirstViewState,
    changeAccountSettingsEmailViewState,
    changeAccountSettingsPasswordViewState,
    changeAccountSettingsDeactivateViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsEditButton);
