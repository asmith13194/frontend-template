import React, { Component } from 'react';
import css from '../../styles/landing-css.js';
import Nav from '../Nav/Bar.jsx';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';
import GetStartedButton from './GetStartedButton.jsx';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className='wrapper' style={css.container}>

        <Nav />

        <div className='box content'>

          <h2 style={css.title}>Welcome!</h2>

          <GetStartedButton />

          <LoginForm />

          <SignupForm />

        </div>

      </div>
    );
  }
}

export default Landing;
