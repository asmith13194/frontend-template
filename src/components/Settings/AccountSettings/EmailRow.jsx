import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import TableNameCol from './TableNameCol.jsx';
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

    return(
      <TableRow style={view?{background:'#f7f7f7'}:null}>

        <TableRowColumn style={css.overflowCol}>

          <EmailForm />

          <ReviewDialog type={'email'}/>

        </TableRowColumn>

        <TableRowColumn style={css.overflowCol}>

          {
            view
            ?
            null
            :
            JSON.parse(localStorage.getItem('user')).info.email
          }

        </TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={'email'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsEmailRow;
