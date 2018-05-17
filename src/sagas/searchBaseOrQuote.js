import { throttle, put, select } from 'redux-saga/effects';
import _ from 'lodash';

import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';

const {
  SEARCH_BASE_OR_QUOTE,
  UPDATE_FILTERED_RATES
} = CurrenciesConversionConstants;

export function* watchSearchBaseOrQuote() {
  yield throttle(1000, SEARCH_BASE_OR_QUOTE, function*({ payload: { query } }) {
    const { rates } = yield select(state => state.CurrenciesConversion);
    const filteredRates = rates.filter(
      rate =>
        !query ||
        _.isEmpty(query) ||
        _.includes(rate.currency.toLowerCase(), query.trim().toLowerCase())
    );

    yield put({
      type: UPDATE_FILTERED_RATES,
      payload: { filteredRates }
    });
  });
}
