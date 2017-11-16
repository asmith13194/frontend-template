import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import RaisedButton from 'material-ui/RaisedButton';
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
          onClick={changeLoginViewState}
        />

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLoginViewState}, dispatch);
}

export default connect(null, mapDispatchToProps, null)(GetStartedButton);
