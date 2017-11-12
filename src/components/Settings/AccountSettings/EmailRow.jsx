import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import EmailForm from './EmailForm.jsx';
import ReviewDialog from './ReviewDialog.jsx';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsEmailRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view } = this.props;
    return (
      <TableRow style={view ? {background: '#f2f2f2'} : null}>

        <TableRowColumn>Email</TableRowColumn>

        <TableRowColumn style={css.form}>

            <EmailForm />

            <ReviewDialog type={'email'}/>

        </TableRowColumn>

        <TableRowColumn>

          <EditButton type={'email'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsEmailRow;
