import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import css from '../../styles/nav-css.js';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import {
  changeLoginViewState,
  changeSignupViewState, } from '../../actions/actions.js';

class NavMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <IconMenu
        style={css.navmenu}
        iconButtonElement={<IconButton><ContentFilter /></IconButton>}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {
          localStorage.getItem('user') === null
          ?
          <MenuItem
            primaryText="Get Started"
            onClick={()=>this.props.changeLoginViewState()} />
          :
          <div>

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
        }
      </IconMenu>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoginViewState, changeSignupViewState }, dispatch);
}

export default connect(null, mapDispatchToProps, null)(NavMenu);
