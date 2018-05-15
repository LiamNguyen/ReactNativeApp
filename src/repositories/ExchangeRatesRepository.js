import routes from '../lib/ApiRoutes';
import { checkResponse, get } from '../lib/FetchHelper';

export default {
  getExchangeRates(options) {
    return get(routes.getExchangeRates(), options).then(checkResponse);
  }
};
