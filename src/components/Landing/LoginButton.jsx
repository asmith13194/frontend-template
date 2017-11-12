import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
// import css from '.../styles/landing-css.js';
import {
  changeLoginViewState,
  changeSignupViewState, } from '../../actions/actions.js';

class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <RaisedButton
        onClick={()=>this.props.changeLoginViewState()}
        label={this.props.label}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLoginViewState, changeSignupViewState}, dispatch);
}

export default connect(null, mapDispatchToProps, null)(LoginButton);
