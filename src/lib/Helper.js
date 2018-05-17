export default {
  convertRatesObjectToArray(rates) {
    let array = [];
    for(let key in rates) {
      if (rates.hasOwnProperty(key)) {
        array.push({ currency: key, rate: rates[key] })
      }
    }
    return array;
  }
}
