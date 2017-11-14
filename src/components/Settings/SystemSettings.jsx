import React, { Component } from 'react';
import css from '../../styles/settings-css.js';
import Nav from '../Nav/Bar.jsx';
import SettingsAside from './SettingsAside.jsx';

class SystemSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='wrapper'>

        <Nav />

        <SettingsAside />

        <div className='content-full'>

          <h4 style={css.title}>System Settings</h4>

        </div>

      </div>
    );
  }
}


export default SystemSettings;
