import React, { Component } from 'react';
// import css from '../../../styles/settings-css.js';
import TableRow from './TableRow.jsx';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
} from 'material-ui/Table';

class AccountSettingsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const types = [ 'name', 'email', 'password', 'deactivate' ];

    return (
      <Table >

        <TableBody displayRowCheckbox={false}>

          {types.map((type, i) =>( <TableRow key={i} type={type}/>))}

        </TableBody>

      </Table>
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

export default connect(mapStateToProps, null, null)(AccountSettingsTable);
