import {put, call, select} from 'redux-saga/effects';
import api from '../../../../shared/redux/saga/ApiWrapper';
import {loginUri} from '../../../../shared/redux/saga/Uris';
import {setUser, formIsValid, setLoading, logout} from '../useCases/LoginUseCase';
import AlertDesafio from '../../../../shared/ui/components/AlertDesafio';
import {
  ERROR_GENERIC,
  ERROR_LOGIN_CREDENTIALS,
  ERROR_LOGOUT,
  ERROR_SET_USER,
} from '../../../../shared/utils/Messages';

const getFormValid = state => state.login;

async function apiLogin(data) {
  try {
    return await api.post(loginUri, data)
      .then(function(response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      .catch(function(err) {
        console.log(err);
        throw err.response.data.message;
      });
  } catch (err) {
    throw err;
  }
}

export function* sagaLogin(action) {
  try {
    yield put(setLoading());
    yield put(formIsValid());
    const { formValid } = yield select(getFormValid);

    if (formValid) {
      let data = yield call(apiLogin, action.payload);

      if (data && data.token) {
        yield put(setUser({ ...data, isAuth: true }));
      }
    }
  } catch (err) {
    if (err && err.includes('Invalid')) AlertDesafio('Login', ERROR_LOGIN_CREDENTIALS);
    else AlertDesafio('Login', ERROR_GENERIC);
  } finally {
    yield put(setLoading());
  }
}

export function* sagaLogout() {
  try {
    yield put(setLoading());
    yield put(logout());
  }catch (err) {
    AlertDesafio('Home', ERROR_LOGOUT);
  } finally {
    yield put(setLoading());
  }
}

export function* sagaSetUser(action) {
  try {
    yield put(setUser(action.payload));
  } catch (err) {
    AlertDesafio('Login', ERROR_SET_USER);
  }
}

