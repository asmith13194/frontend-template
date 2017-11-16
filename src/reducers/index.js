import { combineReducers } from 'redux';

const loginReducer = (state = {
  view: false,
  error: null,
  email: null,
  password: null, }, action) => {
 switch(action.type) {
  case 'CHANGE_LOGIN_VIEW_STATE':
    return Object.assign({}, state, {
      view: !state.view
    });
  case 'CHANGE_LOGIN_FORM_EMAIL':
    return Object.assign({}, state, {
      email: action.payload.email
    });
  case 'CHANGE_LOGIN_FORM_PASSWORD':
    return Object.assign({}, state, {
      password: action.payload.password
    });
  case 'CHANGE_LOGIN_ERROR_STATE':
    return Object.assign({}, state, {
      error: action.payload.error
    });
  case 'RESET_LOGIN_REDUCER':
    return Object.assign({}, state, {
      view: false,
      email: null,
      error: null,
      password: null,
    });
  default:
    return state;
 }
};

const signupReducer = (state = {
  view: false,
  last: null,
  error: null,
  first: null,
  email: null,
  password: null,
  emailConfirm: null,
  passwordConfirm: null, }, action) => {
  switch(action.type) {
    case 'CHANGE_SIGNUP_VIEW_STATE':
      return Object.assign({}, state, {
        view: !state.view
      });
    case 'CHANGE_SIGNUP_FORM_LAST':
      return Object.assign({}, state, {
        last: action.payload.last
      });
    case 'CHANGE_SIGNUP_FORM_FIRST':
      return Object.assign({}, state, {
        first: action.payload.first
      });
    case 'CHANGE_SIGNUP_FORM_EMAIL':
      return Object.assign({}, state, {
        email: action.payload.email
      });
    case 'CHANGE_SIGNUP_ERROR_STATE':
      return Object.assign({}, state, {
        error: action.payload.error
    });
    case 'CHANGE_SIGNUP_FORM_PASSWORD':
      return Object.assign({}, state, {
        password: action.payload.password
      });
    case 'CHANGE_SIGNUP_FORM_EMAIL_CONFIRM':
      return Object.assign({}, state, {
        emailConfirm: action.payload.emailConfirm
    });
    case 'CHANGE_SIGNUP_FORM_PASSWORD_CONFIRM':
      return Object.assign({}, state, {
        passwordConfirm: action.payload.passwordConfirm
      });
    case 'RESET_SIGNUP_REDUCER':
      return Object.assign({}, state, {
        view: false,
        last: null,
        error: null,
        first: null,
        email: null,
        password: null,
        emailConfirm: null,
        passwordConfirm: null,
      });
    default:
      return state;
  }
};

const accountSettingsReducer = (state = {
  nameView: false,
  emailView: false,
  errorView: false,
  passwordView: false,
  deactivateView: false,
  nameDialogView: false,
  emailDialogView: false,
  wrongPasswordView: false,
  passwordDialogView: false,
  deactivateDialogView: false,
  last: null,
  first: null,
  email: null,
  error: null,
  password: null,
  emailConfirm: null,
  passwordAuth: null,
  passwordConfirm: null, }, action) => {
  switch(action.type) {
    case 'CHANGE_ACCOUNT_SETTINGS_NAME_VIEW_STATE':
      return Object.assign({}, state, {
        nameView: !state.nameView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_EMAIL_VIEW_STATE':
      return Object.assign({}, state, {
        emailView: !state.emailView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_VIEW_STATE':
      return Object.assign({}, state, {
        passwordView: !state.passwordView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_DEACTIVATE_VIEW_STATE':
      return Object.assign({}, state, {
        deactivateView: !state.deactivateView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_ERROR_VIEW_STATE':
      return Object.assign({}, state, {
        errorView: !state.errorView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_WRONG_PASSWORD_VIEW_STATE':
      return Object.assign({}, state, {
        wrongPasswordView: !state.wrongPasswordView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_NAME_DIALOG_VIEW_STATE':
      return Object.assign({}, state, {
        nameDialogView: !state.nameDialogView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_EMAIL_DIALOG_VIEW_STATE':
      return Object.assign({}, state, {
        emailDialogView: !state.emailDialogView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_DIALOG_VIEW_STATE':
      return Object.assign({}, state, {
        passwordDialogView: !state.passwordDialogView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_DEACTIVATE_DIALOG_VIEW_STATE':
      return Object.assign({}, state, {
        deactivateDialogView: !state.deactivateDialogView
      });
    case 'CHANGE_ACCOUNT_SETTINGS_FIRST':
      return Object.assign({}, state, {
        first: action.payload.first
      });
    case 'CHANGE_ACCOUNT_SETTINGS_LAST':
      return Object.assign({}, state, {
        last: action.payload.last
      });
    case 'CHANGE_ACCOUNT_SETTINGS_EMAIL':
      return Object.assign({}, state, {
        email: action.payload.email
      });
    case 'CHANGE_ACCOUNT_SETTINGS_EMAIL_CONFIRM':
      return Object.assign({}, state, {
        emailConfirm: action.payload.emailConfirm
      });
    case 'CHANGE_ACCOUNT_SETTINGS_PASSWORD':
      return Object.assign({}, state, {
        password: action.payload.password
      });
    case 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_CONFIRM':
      return Object.assign({}, state, {
        passwordConfirm: action.payload.passwordConfirm
      });
    case 'CHANGE_ACCOUNT_SETTINGS_PASSWORD_AUTH':
      return Object.assign({}, state, {
        passwordAuth: action.payload.passwordAuth
      });
    case 'CHANGE_ACCOUNT_SETTINGS_ERROR':
      return Object.assign({}, state, {
        error: action.payload.error
      });
    case 'RESET_ACCOUNT_SETTINGS_STATE':
      return Object.assign({}, state, {
        nameView: false,
        emailView: false,
        errorView: false,
        passwordView: false,
        deactivateView: false,
        nameDialogView: false,
        emailDialogView: false,
        wrongPasswordView: false,
        passwordDialogView: false,
        deactivateDialogView: false,
        last: null,
        first: null,
        email: null,
        error: null,
        password: null,
        emailConfirm: null,
        passwordAuth: null,
        passwordConfirm: null,
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  loginReducer,
  signupReducer,
  accountSettingsReducer,
});

export default rootReducer;
