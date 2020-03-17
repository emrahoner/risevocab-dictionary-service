const lodash = require('lodash')
const healtCheck = require('./health-check')

module.exports = lodash.merge(
    healtCheck
)