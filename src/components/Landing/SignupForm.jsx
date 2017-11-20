import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from '../Legos/Form.jsx';
import Dialog from 'material-ui/Dialog';
import css from '../../styles/landing-css.js';
import validators from '../../validators/textinput.js';
import {
  resetSignupState,
  changeSignupFirst,
  changeSignupLast,
  changeSignupEmail,
  changeSignupPassword,
  changeSignupErrorState,
  changeSignupEmailConfirm,
  changeSignupPasswordConfirm, } from '../../actions/actions.js';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount(){
    this.props.resetSignupState();
  }

  render() {
    const {
      signupReducer,
      resetSignupState,
      changeSignupLast,
      changeSignupFirst,
      changeSignupEmail,
      changeSignupPassword,
      changeSignupErrorState,
      changeSignupEmailConfirm,
      changeSignupPasswordConfirm, } = this.props;


    const myInit = {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        payload: {
          first: signupReducer.first,
          last: signupReducer.last,
          email: signupReducer.email,
          password: signupReducer.password,
        }
      })
    };

    const createUser = async() => {
      await fetch(`${process.env.REACT_APP_API}/auth/signup`, myInit)
      .then(respons => respons.json())
      .then(response => {
        switch(response.success){
          case true:
            localStorage.setItem('user', JSON.stringify(response.payload));
            return resetSignupState();
          case false:
            console.error(response.payload);
            return changeSignupErrorState(response.payload.detail);
          default:
            return resetSignupState();
        }
      })
      .catch(error => {
        console.error(error);
        return changeSignupErrorState(error.detail);
      });
    };

    if(localStorage.getItem('user') !== null){
      return(
        <Redirect to={'./home'} />
      );
    }

    return (
      <Dialog
        title='Signup'
        modal={true}
        contentStyle={css.dialog}
        autoScrollBodyContent={true}
        open={signupReducer.view}
      >

        {
          signupReducer.error === null

          ?

          null

          :

          <h4>error: {signupReducer.error}</h4>
        }

        <Form
          submitLabel={'Signup'}
          submit={createUser}
          reset={resetSignupState}
          inputs={[{
            name: 'first',
            text: 'First',
            validation: validators.textInput,
            reducerVal: signupReducer.first,
            changeValAction: changeSignupFirst,
          },{
            name: 'last',
            text: 'Last',
            validation: validators.textInput,
            reducerVal: signupReducer.last,
            changeValAction: changeSignupLast,
          },{
            name: 'email',
            text: 'Email',
            validation: validators.signup.email,
            reducerVal: signupReducer.email,
            changeValAction: changeSignupEmail,
          },{
            name: 'emailConfirm',
            text: 'Confirm Email',
            validation: validators.signup.emailConfirm,
            reducerVal: signupReducer.emailConfirm,
            changeValAction: changeSignupEmailConfirm,
          },{
            type: 'password',
            name: 'password',
            text: 'Password',
            validation: validators.signup.password,
            reducerVal: signupReducer.password,
            changeValAction: changeSignupPassword,
          },{
            type: 'password',
            name: 'passwordConfirm',
            text: 'Confirm Password',
            validation: validators.signup.passwordConfirm,
            reducerVal: signupReducer.passwordConfirm,
            changeValAction: changeSignupPasswordConfirm,
          }]}
        />

      </Dialog>
    );
  }
}

function mapStateToProps(state) {
  return { signupReducer: state.signupReducer, };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resetSignupState,
    changeSignupLast,
    changeSignupFirst,
    changeSignupEmail,
    changeSignupPassword,
    changeSignupErrorState,
    changeSignupEmailConfirm,
    changeSignupPasswordConfirm, }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps, null)(Signup);
