import React, { Component } from 'react';
import TextInput from './TextInput.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ValidatorForm } from 'react-form-validator-core';
import css from '../../styles/legos-css.js';

class LegoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    ValidatorForm.addValidationRule('isEmailMatch', (value) => {
      if (value !== this.props.signupReducer.email) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== this.props.signupReducer.password) {
            return false;
        }
        return true;
    });
    ValidatorForm.addValidationRule('isPasswordLength', (value) => {
        if (value.length < 8) {
            return false;
        }
        return true;
    });
    ValidatorForm.addValidationRule('isPasswordPassword', (value) => {
        if (value === 'password') {
            return false;
        }
        return true;
    });
  }

  render() {
    const { submit, reset, inputs, submitLabel } = this.props;

    return (
      <ValidatorForm
        ref='form'
        style={css.form}
        onSubmit={() => submit()}
      >

        {inputs.map((input, i) => <TextInput key={i} input={input}/>)}

        <RaisedButton
          key='0'
          label='Cancel'
          primary={true}
          style={css.buttons}
          onClick={() => {reset(); this.props.history.goBack();}}
        />

        <RaisedButton
          type='submit'
          label={submitLabel}
          style={css.buttons}
        />

      </ValidatorForm>
    );
  }
}


function mapStateToProps(state) {
  return { signupReducer: state.signupReducer, };
}


export default withRouter(connect(mapStateToProps, null, null)(LegoForm));
