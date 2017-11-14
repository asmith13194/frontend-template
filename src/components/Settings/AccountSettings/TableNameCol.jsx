import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import {
  TableRowColumn,
} from 'material-ui/Table';

class AccountSettingsNameRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { view, text } = this.props;
    {
      return view
      ?
      null
      :
      <TableRowColumn style={css.overflowCol}>{text}</TableRowColumn>;
    }
  }
}

export default AccountSettingsNameRow;
