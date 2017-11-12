module.exports = {

  changeLoginViewState: () => {
    return {
      type: 'CHANGE_LOGIN_VIEW_STATE'
    };
  },

  changeLoginEmail: (email) => {
    return {
      type: 'CHANGE_LOGIN_FORM_EMAIL',
      payload: { email }
    };
  },

  changeLoginPassword: (password) => {
    return {
      type: 'CHANGE_LOGIN_FORM_PASSWORD',
      payload: { password }
    };
  },

  changeLoginInvalidState: () => {
    return {
      type: 'CHANGE_LOGIN_INVALID_STATE'
    };
  },

  changeLoginErrorState: (error) => {
    return {
      type: 'CHANGE_LOGIN_ERROR_STATE',
      payload: { error }
    };
  },

  resetLoginState: () => {
    return {
      type: 'RESET_LOGIN_REDUCER'
    };
  },

  changeSignupViewState: () => {
    return {
      type: 'CHANGE_SIGNUP_VIEW_STATE'
    };
  },

  changeSignupFirst: (first) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_FIRST',
      payload: { first }
    };
  },

  changeSignupLast: (last) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_LAST',
      payload: { last }
    };
  },

  changeSignupEmail: (email) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_EMAIL',
      payload: { email }
    };
  },

  changeSignupEmailConfirm: (emailConfirm) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_EMAIL_CONFIRM',
      payload: { emailConfirm }
    };
  },

  changeSignupPassword: (password) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_PASSWORD',
      payload: { password }
    };
  },

  changeSignupPasswordConfirm: (passwordConfirm) => {
    return {
      type: 'CHANGE_SIGNUP_FORM_PASSWORD_CONFIRM',
      payload: { passwordConfirm }
    };
  },

  signupFormSubmit: (signupCreds) => {
    return {
      type: 'SIGNUP_FORM_SUBMIT',
      payload: { signupCreds }
    };
  },

  changeSignupDuplicateState: () => {
    return {
      type: 'CHANGE_SIGNUP_DUPLICATE_STATE'
    };
  },

  changeSignupErrorState: (error) => {
    return {
      type: 'CHANGE_SIGNUP_ERROR_STATE',
      payload: { error }
    };
  },

  resetSignupState: () => {
    return {
      type: 'RESET_SIGNUP_REDUCER'
    };
  },

  changeAccountSettingsFirstViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_FIRST_VIEW_STATE'
    };
  },

  changeAccountSettingsLastViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_LAST_VIEW_STATE'
    };
  },

  changeAccountSettingsNameViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_NAME_VIEW_STATE'
    };
  },

  changeAccountSettingsEmailViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_EMAIL_VIEW_STATE'
    };
  },

  changeAccountSettingsPasswordViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_VIEW_STATE'
    };
  },

  changeAccountSettingsDeactivateViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_DEACTIVATE_VIEW_STATE'
    };
  },

  changeAccountSettingsErrorViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_ERROR_VIEW_STATE'
    };
  },

  changeAccountSettingsWrongPasswordViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_WRONG_PASSWORD_VIEW_STATE'
    };
  },

  changeAccountSettingsNameDialogViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_NAME_DIALOG_VIEW_STATE'
    };
  },

  changeAccountSettingsEmailDialogViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_EMAIL_DIALOG_VIEW_STATE'
    };
  },

  changeAccountSettingsPasswordDialogViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_DIALOG_VIEW_STATE'
    };
  },

  changeAccountSettingsDeactivateDialogViewState: () => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_DEACTIVATE_DIALOG_VIEW_STATE'
    };
  },

  changeAccountSettingsFirst: (first) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_FIRST',
      payload: { first }
    };
  },

  changeAccountSettingsLast: (last) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_LAST',
      payload: { last }
    };
  },

  changeAccountSettingsEmail: (email) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_EMAIL',
      payload: { email }
    };
  },

  changeAccountSettingsEmailConfirm: (emailConfirm) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_EMAIL_CONFIRM',
      payload: { emailConfirm }
    };
  },

  changeAccountSettingsPassword: (password) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_PASSWORD',
      payload: { password }
    };
  },

  changeAccountSettingsPasswordConfirm: (passwordConfirm) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_CONFIRM',
      payload: { passwordConfirm }
    };
  },

  changeAccountSettingsPasswordAuth: (passwordAuth) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_AUTH',
      payload: { passwordAuth }
    };
  },

  changeAccountSettingsError: (error) => {
    return {
      type: 'CHANGE_ACCOUNT_SETTINGS_ERROR',
      payload: { error }
    };
  },

  resetAccountSettingsState: () => {
    return {
      type: 'RESET_ACCOUNT_SETTINGS_STATE'
    };
  },

};
