import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import css from '../../styles/settings-css.js';

class AsideSettings extends Component {
  constructor(props) {
    super(props);
    this.state = { user: JSON.parse(localStorage.getItem('user')).user};
  }

  render() {
    return (
      <div className='box sidebar'>


          <MenuItem
            containerElement={ <Link to="/settings/account" /> }
            primaryText="General" />

          <MenuItem
            containerElement={ <Link to="/settings/privacy" /> }
            primaryText="Privacy" />

          <MenuItem
            containerElement={ <Link to="/settings/system" /> }
            primaryText="System" />


      </div>
    );
  }
}

export default AsideSettings;
