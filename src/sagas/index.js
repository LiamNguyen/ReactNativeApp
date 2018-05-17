import { fork, all } from 'redux-saga/effects';

import {
  watchGetExchangeRates,
  watchSwapCurrencies,
  watchChangeBase
} from './exchangeRates';

export default function* root() {
  yield all([
    fork(watchGetExchangeRates),
    fork(watchSwapCurrencies),
    fork(watchChangeBase)
  ]);
}
