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
          style={{width:'100%'}}
          floatingLabelText={text}
          validators={validation.validators}
          onChange={(a,b) => changeValAction(b)}
          errorMessages={validation.errorMessages}
          value={reducerVal === null ? '' : reducerVal}
        />

        <br/>

      </div>
    );
  }
}


export default TextInput;
