import { fork, all } from 'redux-saga/effects';

import { watchGetExchangeRates, watchSwapCurrencies } from './exchangeRates';

export default function* root() {
  yield all([fork(watchGetExchangeRates), fork(watchSwapCurrencies)]);
}
