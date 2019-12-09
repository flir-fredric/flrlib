// export * from './components'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/prod.js')
} else {
  module.exports = require('./dist/dev.js')
}
