import React, { Component } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
// import css from '../../styles/settings-css.js';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.input.changeValAction(this.props.input.prefill);
  }

  render() {
    const { name, text, reducerVal, changeValAction, validation, type, prefill } = this.props.input;

    return (
      <div>

        <TextValidator
          name={name}
          type={type}
          hintText={text}
          floatingLabelText={text}
          validators={validation.validators}
          onChange={(a,b) => changeValAction(b)}
          errorMessages={validation.errorMessages}
          value={reducerVal === null ? prefill : reducerVal}
        />

        <br/>

      </div>
    );
  }
}


export default TextInput;
