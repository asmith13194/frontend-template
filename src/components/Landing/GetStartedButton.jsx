import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
// import css from '../../styles/landing-css.js';
import {
  changeLoginViewState,
  changeSignupViewState, } from '../../actions/actions.js';

class GetStartedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RaisedButton
        label={'Get Started'}
        onClick={()=>this.props.changeLoginViewState()}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLoginViewState, changeSignupViewState}, dispatch);
}

export default connect(null, mapDispatchToProps, null)(GetStartedButton);
