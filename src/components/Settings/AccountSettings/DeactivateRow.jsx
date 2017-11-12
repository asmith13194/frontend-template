import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import DeactivateButton from './DeactivateButton.jsx';
import DeactivateDialog from './DeactivateDialog.jsx';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsDeactivateRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view } = this.props;
    return (
      <TableRow style={view ? {background: '#f2f2f2', borderBottom: 'black'} : {borderBottom: 'black'}}>

        <TableRowColumn>Manage Account</TableRowColumn>

        <TableRowColumn style={css.form}>

          <DeactivateButton />

          <DeactivateDialog />

        </TableRowColumn>

        <TableRowColumn>

          <EditButton type={'deactivate'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsDeactivateRow;
