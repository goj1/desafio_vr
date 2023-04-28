import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import LoginUseCase from '../../../features/login/domain/useCases/LoginUseCase';
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../saga/RootSagaRepository';
const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    login: LoginUseCase
  },
  middleware
});

sagaMiddleware.run(rootSagas);

export default store;
