import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import css from '../../styles/landing-css.js';
import Form from '../Legos/Form.jsx';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
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
      resetLoginState();
      changeLoginViewState();
      changeSignupViewState();
    };

    const loginUser = () => {
      axios.post(`${process.env.REACT_APP_API}/auth/login`, {email: loginReducer.email, password: loginReducer.password})
      .then(response => {
         switch(response.data.success){
          case true:
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            resetLoginState();
            return;
          case false:
            changeLoginErrorState(response.data.payload);
            changeLoginPassword('');
            return;
          default:
            return resetLoginState();
        }
      })
      .catch(error => {
        changeLoginErrorState(error.detail);
        changeLoginPassword('');
        return;
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

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginForm);
