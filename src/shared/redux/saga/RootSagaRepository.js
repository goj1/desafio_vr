import {takeLatest, all} from 'redux-saga/effects';
import {
  sagaLogin, sagaLogout,
  sagaSetUser,
} from '../../../features/login/domain/repositories/LoginSagaRepository';
import {
  loginTypeAction,
  logoutTypeAction,
  setUserTypeAction,
} from '../../../features/login/domain/repositories/LoginTypeActions';

export default function* rootSagas() {
  return yield all([
    yield takeLatest(loginTypeAction, sagaLogin),
    yield takeLatest(setUserTypeAction, sagaSetUser),
    yield takeLatest(logoutTypeAction, sagaLogout),
  ]);
}
