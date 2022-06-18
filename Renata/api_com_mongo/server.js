const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Tudo bem, estou rodando na ${PORT}`))