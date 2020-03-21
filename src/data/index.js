const mongoose = require('mongoose');
const config = require('../config')

const connectionOptions = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(config.database.connectionstring, connectionOptions)

mongoose.connection.once('open', () => {
    console.log('database connection is established')
})

mongoose.connection.on('error', (err) => {
    console.log('database error: ', err)
})
