// next.config.js
require('dotenv').config()
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript()
// module.exports = {
//     webpack(config) {
//         config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

//         return config
//     }
// }
