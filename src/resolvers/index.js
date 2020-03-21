const lodash = require('lodash')
const healtCheck = require('./health-check')
const word = require('./word')

module.exports = lodash.merge(
    healtCheck,
    word
)