import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import css from '../../styles/landing-css.js';
import {
  changeLoginViewState, } from '../../actions/actions.js';

class GetStartedButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { changeLoginViewState } = this.props;

    return (
      <div style={css.started}>

        <RaisedButton
          label={'Get Started'}
          onClick={() => {this.props.history.push('/login'); changeLoginViewState();}}
        />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLoginViewState}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps, null)(GetStartedButton));
