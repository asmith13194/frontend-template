import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
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
    return (
      <TableRow style={view ? {background: '#f2f2f2'} : null}>

        <TableRowColumn>Password</TableRowColumn>

        <TableRowColumn style={css.form}>

            <PasswordForm />

            <ReviewDialog type={'password'}/>

        </TableRowColumn>

        <TableRowColumn>

          <EditButton type={'password'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsPasswordRow;
