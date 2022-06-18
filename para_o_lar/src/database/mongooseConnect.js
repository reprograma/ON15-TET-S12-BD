const moogose = require('mongose')
const MONGODB_URI = process.env.MONGODB_URI

const connect = async () => {
    try{
        await moogose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
}