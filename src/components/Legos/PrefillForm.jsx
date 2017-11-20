import React, { Component } from 'react';
import PrefillInput from './PrefillInput.jsx';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { connect } from 'react-redux';
import css from '../../styles/legos-css.js';

class PrefillForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    ValidatorForm.addValidationRule('isEmailMatch', (value) => {
      if (value !== this.props.accountSettingsReducer.email) {
        return false;
      }
      return true;
    });
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== this.props.accountSettingsReducer.password) {
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

        {inputs.map((input, i) => <PrefillInput key={i} input={input}/>)}

        <RaisedButton
          key='0'
          label='Cancel'
          primary={true}
          style={css.buttons}
          onClick={() => reset()}
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
  return { accountSettingsReducer: state.accountSettingsReducer, };
}


export default connect(mapStateToProps, null, null)(PrefillForm);
