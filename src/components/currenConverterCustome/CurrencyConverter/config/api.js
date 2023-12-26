export const heading = "currency converter"
export const API_DOMAIN = "http://192.168.5.5:800/api/currency/convertor"
export const API_KEY = ""
export const endpointPath = (from, to) =>
    `${API_DOMAIN}${from}_${to}&compact=ultra&apiKey=${API_KEY}`;