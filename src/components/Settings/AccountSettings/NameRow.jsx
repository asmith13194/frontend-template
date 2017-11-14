import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import EditButton from './EditButton.jsx';
import TableNameCol from './TableNameCol.jsx';
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

    return(
      <TableRow style={view?{background:'#f7f7f7'}:null}>

        <TableRowColumn style={css.overflowCol}>

          {
            view
            ?
            <NameForm />
            :
            'Name'
          }

          <ReviewDialog type={'name'}/>

        </TableRowColumn>

        <TableRowColumn style={css.overflowCol}>

          {
            view
            ?
            null
            :
            JSON.parse(localStorage.getItem('user')).info.first + ' ' + JSON.parse(localStorage.getItem('user')).info.last
          }

        </TableRowColumn>

        <TableRowColumn style={css.editCol}>

          <EditButton type={'name'}/>

        </TableRowColumn>

      </TableRow>
    );
  }
}

export default AccountSettingsNameRow;
