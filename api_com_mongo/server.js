const app = require('./src/app')

const PORT = process.env.PORT || 8090

app.listen(PORT, () => console.log( `ta rodando babado banco com momgo na ${PORT})`))