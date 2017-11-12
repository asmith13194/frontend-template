module.exports = {

  first: {
    validators: ['required'],
    errorMessages: ['this field is required'],
  },

  last: {
    validators: ['required'],
    errorMessages: ['this field is required'],
  },

  email: {
    validators: ['required', 'isEmail'],
    errorMessages: ['this field is required', 'email is not valid']
  },

  emailConfirm: {
    validators: ['required', 'isEmailMatch'],
    errorMessages: ['this field is required', 'emails must match']
  },

  password: {
    validators: ['required', 'isPasswordPassword', 'isPasswordLength'],
    errorMessages: ['this field is required', 'password cannont be password', 'password must be at least 8 characters']
  },

  passwordConfirm: {
    validators: ['required', 'isPasswordMatch'],
    errorMessages: ['this field is required', 'passwords must match']
  },

  textInput: {
    validators: ['required'],
    errorMessages: ['this field is required'],
  },

  signup: {

    email: {
      validators: ['required', 'isEmail'],
      errorMessages: ['this field is required', 'email is not valid']
    },

    emailConfirm: {
      validators: ['required', 'isEmailMatch'],
      errorMessages: ['this field is required', 'emails must match']
    },

    password: {
      validators: ['required', 'isPasswordPassword', 'isPasswordLength'],
      errorMessages: ['this field is required', 'password cannont be password', 'password must be at least 8 characters']
    },

    passwordConfirm: {
      validators: ['required', 'isPasswordMatch'],
      errorMessages: ['this field is required', 'passwords must match']
    }

  }

};
