import React, { Component } from 'react';
import css from '../../../styles/settings-css.js';
import Table from './Table.jsx';
import Nav from '../../Nav/Bar.jsx';
import Sidebar from '../SettingsSidebar.jsx';

class AccountSettingsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='wrapper'>

        <Nav />

        <Sidebar />

        <div className='box content'>

          <h4 style={css.title}>General Account Settings</h4>

          <Table />

        </div>

      </div>
    );
  }
}

export default AccountSettingsPage;
