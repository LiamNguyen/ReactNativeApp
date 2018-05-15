import createReducer from '../lib/utils/CreateReducer';
import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';

const { GET_EXCHANGE_RATES, SWAP_CURRENCIES } = CurrenciesConversionConstants;

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
  })
});
