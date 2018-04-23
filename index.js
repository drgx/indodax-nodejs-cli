const axios = require('axios');
const currencyFormatter = require('currency-formatter');

const args = process.argv;
axios.get(`https://vip.bitcoin.co.id/api/${args[2]}_idr/ticker`)
  .then(function (response) {
    const lastValue = response.data.ticker.last;
    const displayText = currencyFormatter.format(lastValue, { symbol: '', precision: 0,});
    console.log(displayText);
  })
  .catch(function (error) {
    console.log(error);
  });
