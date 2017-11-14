import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditButton from './EditButton.jsx';
import UpdateForm from './UpdateForm.jsx';
import ReviewDialog from './ReviewDialog';
import css from '../../../styles/settings-css.js';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { type, } = this.props;

    const commands = {
      name: {
        view: this.props.accountSettingsReducer.nameView,
        text: JSON.parse(localStorage.getItem('user')).info.first + ' ' + JSON.parse(localStorage.getItem('user')).info.last,
      },
      email: {
        view: this.props.accountSettingsReducer.emailView,
        text: JSON.parse(localStorage.getItem('user')).info.email,
      },
      password: {
        text: null,
        view: this.props.accountSettingsReducer.passwordView
      },
      deactivate: {
        text: null,
        view: this.props.accountSettingsReducer.deactivateView
      }
    };

    return(
      <TableRow style={commands[type].view ? {background:'#f7f7f7'} : null}>

        <TableRowColumn style={css.overflowCol}>

          <UpdateForm type={type}/>

          <ReviewDialog type={type}/>

        </TableRowColumn>

        <TableRowColumn style={css.overflowCol}>

          { commands[type].view ? null : commands[type].text }

        </TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={type}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

export default connect(mapStateToProps, null, null)(AccountSettingsTableRow);
