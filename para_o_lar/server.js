const app = require('./src/app')

const PORT =process.env.PORT

app.listen(PORT, () => console.log(`Está rodando na porta ${PORT}`))