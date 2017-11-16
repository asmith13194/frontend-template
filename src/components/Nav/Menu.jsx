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
    const { changeLoginViewState } = this.props;

    return (
      <IconMenu style={css.navmenu}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
        iconButtonElement={<IconButton style={css.navmenu}><ContentFilter /></IconButton>}
      >
        {
          localStorage.getItem('user') === null

          ?

          <MenuItem
            primaryText='Get Started'
            onClick={changeLoginViewState} />

          :

          <div>

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
        }
      </IconMenu>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeLoginViewState, changeSignupViewState }, dispatch);
}

export default connect(null, mapDispatchToProps, null)(NavMenu);
