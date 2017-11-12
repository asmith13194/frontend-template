import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
// import css from '../../styles/settings-css.js';
import PrefillForm from '../../Legos/PrefillForm.jsx';
import validators from '../../../validators/textinput.js';
import {
  resetAccountSettingsState,
  changeAccountSettingsFirst,
  changeAccountSettingsLast,
  changeAccountSettingsNameDialogViewState, } from '../../../actions/actions.js';


class AccountSettingsNameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount(){
    this.props.resetAccountSettingsState();
  }

  render() {
    return (
      this.props.accountSettingsReducer.nameView

      ?

      <PrefillForm
        submitLabel={'review change'}
        submit={this.props.changeAccountSettingsNameDialogViewState}
        reset={this.props.resetAccountSettingsState}
        inputs={[{
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
        }]}
      />

      :

      JSON.parse(localStorage.getItem('user')).info.first + ' ' + JSON.parse(localStorage.getItem('user')).info.last
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetAccountSettingsState,
    changeAccountSettingsFirst,
    changeAccountSettingsLast,
    changeAccountSettingsNameDialogViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(AccountSettingsNameForm);
