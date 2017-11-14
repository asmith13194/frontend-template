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
        reducerView: this.props.accountSettingsReducer.nameView,
        changeView: this.props.changeAccountSettingsNameViewState,
      },
      email: {
        reducerView: this.props.accountSettingsReducer.emailView,
        changeView: this.props.changeAccountSettingsEmailViewState,
      },
      password: {
        reducerView: this.props.accountSettingsReducer.passwordView,
        changeView: this.props.changeAccountSettingsPasswordViewState,
      },
      deactivate: {
        reducerView: this.props.accountSettingsReducer.deactivateView,
        changeView: this.props.changeAccountSettingsDeactivateViewState,
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
