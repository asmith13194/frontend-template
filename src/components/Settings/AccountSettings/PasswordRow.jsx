import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import TableNameCol from './TableNameCol.jsx';
import PasswordForm from './PasswordForm.jsx';
import ReviewDialog from './ReviewDialog.jsx';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsPasswordRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view } = this.props;

    return(
      <TableRow style={view?{background:'#f7f7f7'}:null}>

        <TableRowColumn style={css.overflowCol}>

          <PasswordForm />

          <ReviewDialog type={'password'}/>

        </TableRowColumn>

        <TableRowColumn></TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={'password'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsPasswordRow;
