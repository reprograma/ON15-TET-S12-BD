const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Tá rodando aonde filha? Na porta ${PORT}!`))