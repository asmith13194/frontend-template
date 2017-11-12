import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import NameRow from './NameRow.jsx';
import EmailRow from './EmailRow.jsx';
import PasswordRow from './PasswordRow.jsx';
import DeactivateRow from './DeactivateRow.jsx';
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
    return (
      <Table style={css.table}>

        <TableBody displayRowCheckbox={false}>

          <NameRow view={this.props.accountSettingsReducer.nameView}/>

          <EmailRow view={this.props.accountSettingsReducer.emailView}/>

          <PasswordRow view={this.props.accountSettingsReducer.passwordView}/>

          <DeactivateRow view={this.props.accountSettingsReducer.deactivateView}/>

        </TableBody>

      </Table>
    );
  }
}

function mapStateToProps(state) {
  return { accountSettingsReducer: state.accountSettingsReducer };
}

export default connect(mapStateToProps, null, null)(AccountSettingsTable);
