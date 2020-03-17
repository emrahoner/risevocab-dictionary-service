const { gql } = require('apollo-server')

const schema = gql`
    type Query {
        healthCheck: String
    }
`

module.exports = schema