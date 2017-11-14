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
      <div className='box sidebar'>

        <h4 style={css.title}>{this.state.user.first} {this.state.user.last}</h4>

        <MenuItem
          primaryText='Home'
          containerElement={ <Link to='/home' /> }
        />

        <MenuItem
          primaryText='Settings'
          containerElement={ <Link to='/settings/account' /> }
        />

        <MenuItem
          primaryText='Logout'
          containerElement={ <Link to='/' /> }
          onClick={()=>localStorage.removeItem('user')}
        />

      </div>
    );
  }
}

export default AsideHomePage;
