let env = '';
let apiHost = '';

export default {
  init() {
    env = 'production';
    apiHost = 'https://api.exchangeratesapi.io';
  },

  get apiHost() {
    return apiHost;
  },

  get isProduction() {
    return env === 'production';
  },

  get isDevelopment() {
    return env === 'development';
  }
};
