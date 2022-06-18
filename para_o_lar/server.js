const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Oiii, como vai? Passei para ver se vai rodar na porta ${PORT}`))