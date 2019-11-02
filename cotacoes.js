/**
ARS: {code: "ARS", codein: "BRL", name: "Peso Argentino", high: "0,0675", low: "0,0664", …}
AUD: {code: "AUD", codein: "BRL", name: "Dólar Australiano", high: "2,7769", low: "2,7429", …}
BTC: {code: "BTC", codein: "BRL", name: "Bitcoin", high: "37.200,0", low: "36.650,0", …}
CAD: {code: "CAD", codein: "BRL", name: "Dólar Canadense", high: "3,0577", low: "3,0148", …}
CHF: {code: "CHF", codein: "BRL", name: "Franco Suíço", high: "4,0767", low: "4,0203", …}
CNY: {code: "CNY", codein: "BRL", name: "Yuan Chinês", high: "0,5712", low: "0,5640", …}
ETH: {code: "ETH", codein: "BRL", name: "Ethereum", high: "746,69", low: "746,69", …}
EUR: {code: "EUR", codein: "BRL", name: "Euro", high: "4,4869", low: "4,4283", …}
GBP: {code: "GBP", codein: "BRL", name: "Libra Esterlina", high: "5,2134", low: "5,1399", …}
ILS: {code: "ILS", codein: "BRL", name: "Novo Shekel Israelense", high: "1,1412", low: "1,1264", …}
JPY: {code: "JPY", codein: "BRL", name: "Iene Japonês", high: "0,03724", low: "0,03673", …}
LTC: {code: "LTC", codein: "BRL", name: "Litecoin", high: "235,00", low: "229,15", …}
USD: {code: "USD", codein: "BRL", name: "Dólar Comercial", high: "4,0218", low: "3,9701", …}
USDT: {code: "USD", codein: "BRLT", name: "Dólar Turismo", high: "3.99", low: "3.81", …}
XRP: {code: "XRP", codein: "BRL", name: "Ripple", high: "1,18", low: "1,16", …}
 */
fetch('https://economia.awesomeapi.com.br/all/').then(function (response) {
    return response.json();
}).then(function (obj) {
    dolarComercial = parseFloat(obj.USDT.high)
    euroComercial = parseFloat(obj.EUR.high.replace(/[^0-9.-]+/g,"")/10000).toFixed(2);
    console.log(obj)
}).catch(function (error) {
    console.log('Request failed', error)
});



