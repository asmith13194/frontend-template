import React, { Component } from 'react';
import css from '../../styles/homepage-css.js';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class AsideHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { user: JSON.parse(localStorage.getItem('user')).info};
  }

  render() {
    return (
      <div className='aside'>

        <h4 style={css.title}>{this.state.user.first} {this.state.user.last}</h4>

        <MenuItem
          containerElement={ <Link to="/home" /> }
          primaryText="Home" />

        <MenuItem
          containerElement={ <Link to="/settings/account" /> }
          primaryText="Settings" />

        <MenuItem
          containerElement={ <Link to="/" /> }
          primaryText="Logout"
          onClick={()=>localStorage.removeItem('user')} />

      </div>
    );
  }
}

export default AsideHomePage;
