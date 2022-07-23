const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try {
        /**
         * explicar  o setup de conexão
         */
        await mongoose.connect(MONGODB_URI,  {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })

        console.log('Abalou!!!!, banco  dando close de conectado')
    } catch (error) {
        console.error(error) // mostra o erro no terminal
        process.exit(1) // encerra a nossa api
    }
}

module.exports = { connect }