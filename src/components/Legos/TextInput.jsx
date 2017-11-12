import React, { Component } from 'react';
import { TextValidator } from 'react-material-ui-form-validator';
// import css from '../../styles/landing-css.js';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, text, reducerVal, changeValAction, validation, type } = this.props.input;
      return (
      <div>

        <TextValidator
          name={name}
          type={type}
          hintText={text}
          floatingLabelText={text}
          value={reducerVal === null ? '' : reducerVal}
          onChange={(a,b) => changeValAction(b)}
          validators={validation.validators}
          errorMessages={validation.errorMessages}
        />

        <br/>

      </div>
    );
  }
}


export default TextInput;
