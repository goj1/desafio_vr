import {createSlice} from '@reduxjs/toolkit';
import AlertDesafio from '../../../../shared/ui/components/AlertDesafio';
import {REQUIRED_LOGIN_FIELDS} from '../../../../shared/utils/Messages';

export const LoginUseCase = createSlice({
  name: 'login',
  initialState: {
    user: {
      username: 'kminchelle',
      email: '',
      password: '0lelplR',
      firstName: '',
      lastName: '',
      gender: '',
      image: '',
      token: '',
      isAuth: false,
    },
    formValid: false,
    isLoading: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
    formIsValid: (state) => {
      if (state.user.username === '' || state.user.password === '') {
        AlertDesafio('Login', REQUIRED_LOGIN_FIELDS);
        state.formValid = false;
      } else {
        state.formValid = true;
      }
    },
    setLoading: (state) => {
      state.isLoading = !state.isLoading;
    },
    logout: state => {
      state.user = {
        username: 'kminchelle',
        email: '',
        password: '0lelplR',
        firstName: '',
        lastName: '',
        gender: '',
        image: '',
        token: '',
        isAuth: false,
      };
    }
  },
});

export const {
  setUser,
  getToken,
  formIsValid,
  setLoading,
  logout
} = LoginUseCase.actions;

export default LoginUseCase.reducer;
