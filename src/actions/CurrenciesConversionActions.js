import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';

const {
  GET_EXCHANGE_RATES,
  SWAP_CURRENCIES,
  CHANGE_BASE_CURRENCY,
  CHANGE_QUOTE_CURRENCY
} = CurrenciesConversionConstants;

export const getExchangeRates = () => ({
  type: `${GET_EXCHANGE_RATES}_REQUEST`
});

export const swapCurrencies = () => ({
  type: `${SWAP_CURRENCIES}_REQUEST`
});

export const changeBaseCurrency = base => ({
  type: `${CHANGE_BASE_CURRENCY}`,
  payload: { base }
});

export const changeQuoteCurrency = quote => ({
  type: CHANGE_QUOTE_CURRENCY,
  payload: { quote }
});

export default {
  getExchangeRates,
  swapCurrencies,
  changeBaseCurrency,
  changeQuoteCurrency
};
