import {
  formValidTypeAction,
  loginTypeAction,
  logoutTypeAction,
  setUserTypeAction,
} from './LoginTypeActions';

export const loginAction = (payload) => ({
  type: loginTypeAction,
  payload,
});

export const logoutAction = () => ({
  type: logoutTypeAction,
});

export const setUserAction = (payload) => ({
  type: setUserTypeAction,
  payload,
});
