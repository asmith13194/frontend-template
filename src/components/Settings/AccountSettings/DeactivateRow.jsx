import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import TableNameCol from './TableNameCol.jsx';
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

    return(
      <TableRow style={view?{background:'#f7f7f7'}:null}>

        <TableRowColumn style={css.overflowCol}>

          <DeactivateButton view={view} />

          <DeactivateDialog />

        </TableRowColumn>

        <TableRowColumn></TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={'deactivate'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsDeactivateRow;
