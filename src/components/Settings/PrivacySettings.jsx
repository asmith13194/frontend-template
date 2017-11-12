import React, { Component } from 'react';
import css from '../../styles/settings-css.js';
import Nav from '../Nav/Bar.jsx';
import SettingsAside from './SettingsAside.jsx';

class PrivacySettings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='wrapper'>

        <Nav />

        <SettingsAside />

        <div className='content-two-thirds'>

          <h4 style={css.title}>Privacy Settings</h4>


        </div>

      </div>
    );
  }
}


export default PrivacySettings;
