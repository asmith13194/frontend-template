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
    const createUser = () => {
      let user = {
        first: this.props.signupReducer.first,
        last: this.props.signupReducer.last,
        email: this.props.signupReducer.email,
        password: this.props.signupReducer.password,
      };
      axios.post('http://localhost:8000/auth/signup', user)
      .then(response => {
        switch(response.data.type){
          case 'error':
            return this.props.changeSignupErrorState(response.data.payload.detail);
          case 'success':
            localStorage.setItem('user', JSON.stringify(response.data.payload));
            this.props.resetSignupState();
            return;
          default:
            return this.props.resetSignupState();
        }
      })
      .catch(error => {
        return this.props.changeSignupErrorState(error.detail);
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
        open={this.props.signupReducer.view}
      >

        {
          this.props.signupReducer.error === null

          ?

          null

          :

          <h4>error: {this.props.signupReducer.error}</h4>
        }

        <Form
          submitLabel={'Signup'}
          submit={() => createUser()}
          reset={()=>this.props.resetSignupState()}
          inputs={[{
            name: 'first',
            text: 'First',
            validation: validators.textInput,
            reducerVal: this.props.signupReducer.first,
            changeValAction: this.props.changeSignupFirst,
          },{
            name: 'last',
            text: 'Last',
            validation: validators.textInput,
            reducerVal: this.props.signupReducer.last,
            changeValAction: this.props.changeSignupLast,
          },{
            name: 'email',
            text: 'Email',
            validation: validators.signup.email,
            reducerVal: this.props.signupReducer.email,
            changeValAction: this.props.changeSignupEmail,
          },{
            name: 'emailConfirm',
            text: 'Confirm Email',
            validation: validators.signup.emailConfirm,
            reducerVal: this.props.signupReducer.emailConfirm,
            changeValAction: this.props.changeSignupEmailConfirm,
          },{
            type: 'password',
            name: 'password',
            text: 'Password',
            validation: validators.signup.password,
            reducerVal: this.props.signupReducer.password,
            changeValAction: this.props.changeSignupPassword,
          },{
            type: 'password',
            name: 'passwordConfirm',
            text: 'Confirm Password',
            validation: validators.signup.passwordConfirm,
            reducerVal: this.props.signupReducer.passwordConfirm,
            changeValAction: this.props.changeSignupPasswordConfirm,
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
