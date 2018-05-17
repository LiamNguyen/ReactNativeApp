import createReducer from '../lib/utils/CreateReducer';
import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';

const {
  GET_EXCHANGE_RATES,
  SWAP_CURRENCIES,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY
} = CurrenciesConversionConstants;

export const getInitialState = () => ({
  loading: false,
  errors: {},
  base: 'EUR',
  quote: 'USD',
  rates: {}
});

export default createReducer(getInitialState, {
  [`${GET_EXCHANGE_RATES}_REQUEST`]: () => ({
    loading: true,
    errors: {}
  }),
  [`${GET_EXCHANGE_RATES}_SUCCESS`]: (state, { payload: { rates } }) => ({
    loading: false,
    rates
  }),
  [`${GET_EXCHANGE_RATES}_FAILURE`]: (state, { payload: { errors } }) => ({
    loading: false,
    errors
  }),
  [`${SWAP_CURRENCIES}_REQUEST`]: () => ({
    loading: true
  }),
  [`${SWAP_CURRENCIES}_SUCCESS`]: (state, { payload: { base, quote } }) => ({
    base,
    quote
  }),
  [CHANGE_BASE_CURRENCY]: (state, { payload: { base } }) => ({
    loading: true,
    base
  }),
  [CHANGE_QUOTE_CURRENCY]: (state, { payload: { quote } }) => ({
    quote
  })
});
