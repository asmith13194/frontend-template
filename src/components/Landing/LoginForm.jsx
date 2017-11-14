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
  changeLoginErrorState,
  changeLoginViewState,
  changeLoginInvalidState,
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
    const signup = () => {
      this.props.resetLoginState();
      this.props.changeLoginViewState();
      this.props.changeSignupViewState();
    };

    const loginUser = () => {
      switch(this.props.loginReducer.invalid){
        case true:
          this.props.changeLoginInvalidState();
          break;
        default:
          break;
      }
      let user = this.props.loginReducer;
      axios.post('http://localhost:8000/auth/login', user)
      .then(response => {
         switch(response.data.type){
          case 'invalid-user':
            this.props.changeLoginInvalidState();
            this.props.changeLoginPassword('');
            return;
          case 'error':
            this.props.changeLoginErrorState(response.data.payload);
            this.props.changeLoginPassword('');
            return;
          case 'success':
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            this.props.resetLoginState();
            return;
          default:
            return this.props.resetLoginState();
        }
      })
      .catch(error => {
        this.props.changeLoginErrorState(error.detail);
        this.props.changeLoginPassword('');
        return;
      });
    };

    if(localStorage.getItem('user') !== null){
      return(
        <Redirect to={'./home'}/>
      );
    }

    return (
      <Dialog
        title="Login"
        modal={true}
        open={this.props.loginReducer.view}
        contentStyle={css.dialog}
      >

        {
          this.props.loginReducer.invalid
          ?
          <h4>error: invalid email or password</h4>
          :
          null
        }

        {
          this.props.loginReducer.error === null
          ?
          null
          :
          <h4>error: {this.props.loginReducer.error}</h4>
        }

        <Form
          submitLabel={'Login'}
          submit={() => loginUser()}
          reset={() => this.props.resetLoginState()}
          inputs={[
            {
              name: 'email',
              text: 'Email',
              reducerVal: this.props.loginReducer.email,
              changeValAction: this.props.changeLoginEmail,
              validation: validators.textInput
            },
            {
              name: 'password',
              text: 'Password',
              type: 'password',
              reducerVal: this.props.loginReducer.password,
              changeValAction: this.props.changeLoginPassword,
              validation: validators.textInput
            }
          ]}
        />

        <p>or</p>

        <RaisedButton
          label={'Signup'}
          onClick={() => signup()}
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
    changeLoginErrorState,
    changeLoginInvalidState,
    changeSignupViewState, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(LoginForm);
