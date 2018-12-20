export const Constants = Object.freeze({
    COINMARKET_API: 'https://api.coinmarketcap.com/v2/ticker/1/',
    NEWS_API: `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&language=es&apiKey=${process.env.NEWS_APIKEY}`
});
