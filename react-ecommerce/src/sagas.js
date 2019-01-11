import 'regenerator-runtime/runtime';
import { fork } from 'redux-saga/effects';
import ShowProductSaga from './components/ShowProduct/sagas';

function* rootSaga() {
  yield fork(ShowProductSaga);
}
export default rootSaga;