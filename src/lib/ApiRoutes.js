import config from '../config';

export default {
  get base() {
    return config.apiHost;
  },
  getExchangeRates() {
    return `${this.base}/api/latest`;
  }
};
