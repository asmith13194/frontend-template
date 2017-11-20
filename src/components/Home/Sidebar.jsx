import React, { Component } from 'react';
import css from '../../styles/home-css.js';
import { Link } from 'react-router-dom';
import MenuItem from 'material-ui/MenuItem';

class HomePageSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='box sidebar'>

        <h4 style={css.title}>{JSON.parse(localStorage.getItem('user')).info.first} {JSON.parse(localStorage.getItem('user')).info.last}</h4>

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

export default HomePageSidebar;
