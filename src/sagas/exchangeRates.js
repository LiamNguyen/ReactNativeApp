import { takeEvery, call, put, select } from 'redux-saga/effects';

import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';
import ExchangeRatesRepository from '../repositories/ExchangeRatesRepository';
import Helper from '../lib/Helper';

const {
  GET_EXCHANGE_RATES,
  SWAP_CURRENCIES,
  CHANGE_BASE_CURRENCY
} = CurrenciesConversionConstants;

export function* watchGetExchangeRates() {
  yield takeEvery(`${GET_EXCHANGE_RATES}_REQUEST`, function*() {
    yield call(getExchangeRates);
  });
}

export function* watchSwapCurrencies() {
  yield takeEvery(`${SWAP_CURRENCIES}_REQUEST`, function*() {
    const { base, quote } = yield select(state => state.CurrenciesConversion);
    yield put({
      type: `${SWAP_CURRENCIES}_SUCCESS`,
      payload: { base: quote, quote: base }
    });
    yield call(getExchangeRates);
  });
}

export function* watchChangeBase() {
  yield takeEvery(CHANGE_BASE_CURRENCY, function*() {
    yield call(getExchangeRates);
  });
}

function* getExchangeRates() {
  try {
    const { base } = yield select(state => state.CurrenciesConversion);
    const response = yield call(ExchangeRatesRepository.getExchangeRates, {
      base
    });
    const { rates } = response;
    // Insert rates for base EUR
    let customRates = rates;

    if (base === 'EUR') {
      customRates['EUR'] = 1;
    }
    const ratesArray = Helper.convertRatesObjectToArray(customRates);

    yield put({
      type: `${GET_EXCHANGE_RATES}_SUCCESS`,
      payload: { rates: ratesArray }
    });
  } catch (errors) {
    yield put({
      type: `${GET_EXCHANGE_RATES}_FAILURE`,
      payload: { errors }
    });
  }
}
