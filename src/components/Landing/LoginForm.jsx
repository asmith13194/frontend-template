import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Form from '../Legos/Form.jsx';
import Dialog from 'material-ui/Dialog';
import { Redirect } from 'react-router-dom';
import css from '../../styles/landing-css.js';
import RaisedButton from 'material-ui/RaisedButton';
import validators from '../../validators/textinput.js';
import {
  resetLoginState,
  changeLoginEmail,
  changeLoginPassword,
  changeLoginViewState,
  changeLoginErrorState,
  changeSignupViewState, } from '../../actions/actions.js';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount(){
    this.props.resetLoginState();
  }

  render() {
    const {
      loginReducer,
      resetLoginState,
      changeLoginEmail,
      changeLoginPassword,
      changeLoginViewState,
      changeSignupViewState,
      changeLoginErrorState, } = this.props;

    const signup = () => {
      this.props.history.push('/signup');
      resetLoginState();
      changeLoginViewState();
      changeSignupViewState();
    };

    const myInit = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({email: loginReducer.email, password: loginReducer.password})
    };

    const loginUser = async() => {
      await fetch(`${process.env.REACT_APP_API}/auth/login`, myInit)
      .then(response => response.json())
      .then(response => {
        switch(response.success){
          case true:
            localStorage.setItem('user', JSON.stringify(response.payload));
            return resetLoginState();
          case false:
            console.error(response.payload);
            changeLoginErrorState(response.payload);
            return changeLoginPassword('');
          default:
            return resetLoginState();
        }
      })
      .catch(error => {
        console.error(error);
        changeLoginErrorState('please try again');
        return changeLoginPassword('');
      });
    };

    if(localStorage.getItem('user') !== null){
      return(
        <Redirect to={'./home'} />
      );
    }

    return (
      <Dialog
        modal={true}
        title='Login'
        contentStyle={css.dialog}
        open={loginReducer.view}
      >
        { loginReducer.error === null ? null : <h4>error: {loginReducer.error}</h4> }

        <Form
          submitLabel={'Login'}
          submit={loginUser}
          reset={resetLoginState}
          inputs={[
            {
              name: 'email',
              text: 'Email',
              validation: validators.textInput,
              reducerVal: loginReducer.email,
              changeValAction: changeLoginEmail,
            },
            {
              type: 'password',
              name: 'password',
              text: 'Password',
              validation: validators.textInput,
              reducerVal: loginReducer.password,
              changeValAction: changeLoginPassword,
            }
          ]}
        />

        <p>or</p>

        <RaisedButton
          label={'Signup'}
          onClick={signup}
        />

      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return { loginReducer: state.loginReducer };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetLoginState,
    changeLoginEmail,
    changeLoginPassword,
    changeLoginViewState,
    changeSignupViewState,
    changeLoginErrorState, }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null)(LoginForm));
