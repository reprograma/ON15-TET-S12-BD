const moogose = require('mongoose')

const MONGODB_URI = 'mongodb+srv://rosario:borboletas22@cluster0.mbtzy.mongodb.net/?retryWrites=true&w=majority'

const connect = async () => {
    try {
        await moogose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('banco conectado!')
    } catch(error) {
        console.error(error)
    }
}

module.exports = { connect }