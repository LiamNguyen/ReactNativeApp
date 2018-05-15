import CurrenciesConversionConstants from '../constants/CurrenciesConversionConstants';

const { GET_EXCHANGE_RATES, SWAP_CURRENCIES } = CurrenciesConversionConstants;

export const getExchangeRates = () => ({
  type: `${GET_EXCHANGE_RATES}_REQUEST`
});

export const swapCurrencies = () => ({
  type: `${SWAP_CURRENCIES}_REQUEST`
});

export default {
  getExchangeRates,
  swapCurrencies
};
