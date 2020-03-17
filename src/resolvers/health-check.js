const healthCheck = (parent, args, context, info) => {
    return 'OK'
}

module.exports = {
    Query: {
        healthCheck
    }
}