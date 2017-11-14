import React, { Component } from 'react';
import css from '../../styles/nav-css.js';
import NavMenu from './Menu.jsx';
import logo from '../../images/favicon.png';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='box header' style={css.container}>

        <img style={css.navlogo} src={ logo } alt='logo' />

        <NavMenu />

      </div>
    );
  }
}

export default Nav;
