import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Form from '../Legos/Form.jsx';
import validators from '../../validators/textinput.js';
import css from '../../styles/landing-css.js';
import Dialog from 'material-ui/Dialog';
import axios from 'axios';
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

    const createUser = () => {
      let user = {
        first: signupReducer.first,
        last: signupReducer.last,
        email: signupReducer.email,
        password: signupReducer.password,
      };
      axios
      .post(`${process.env.REACT_APP_API}/auth/signup`, {payload: user})
      .then(response => {
        switch(response.data.success){
          case true:
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            return resetSignupState();
          case false:
            return changeSignupErrorState(response.data.payload.detail);
          default:
            return resetSignupState();
        }
      })
      .catch(error => {
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
          submit={() => createUser()}
          reset={()=>resetSignupState()}
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
