import { fork, all } from 'redux-saga/effects';

import {
  watchGetExchangeRates,
  watchSwapCurrencies,
  watchChangeBase
} from './exchangeRates';
import { watchSearchBaseOrQuote } from './searchBaseOrQuote';

export default function* root() {
  yield all([
    fork(watchGetExchangeRates),
    fork(watchSwapCurrencies),
    fork(watchChangeBase),
    fork(watchSearchBaseOrQuote)
  ]);
}
