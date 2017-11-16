import React, { Component } from 'react';
import css from '../../styles/settings-css.js';
import Nav from '../Nav/Bar.jsx';
import Sidebar from './SettingsSidebar.jsx';

class PrivacySettings extends Component {
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

          <h4 style={css.title}>Privacy Settings</h4>

        </div>

      </div>
    );
  }
}


export default PrivacySettings;
