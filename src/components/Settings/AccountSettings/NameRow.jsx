import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import NameForm from './NameForm.jsx';
import ReviewDialog from './ReviewDialog';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsNameRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view } = this.props;
    return (
      <TableRow style={view ? {background: '#f2f2f2'} : null}>

        <TableRowColumn>Name</TableRowColumn>

        <TableRowColumn style={css.form}>

            <NameForm />

            <ReviewDialog type={'name'}/>

        </TableRowColumn>

        <TableRowColumn>

          <EditButton type={'name'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsNameRow;
