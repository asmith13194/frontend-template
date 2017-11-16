import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';
// import css from '../../styles/settings-css.js';

class SettingsSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='box sidebar'>

          <MenuItem
            primaryText='General'
            containerElement={ <Link to='/settings/account' /> }
          />

          <MenuItem
            primaryText='Privacy'
            containerElement={ <Link to='/settings/privacy' /> }
          />

          <MenuItem
            primaryText='System'
            containerElement={ <Link to='/settings/system' /> }
          />

      </div>
    );
  }
}

export default SettingsSidebar;
