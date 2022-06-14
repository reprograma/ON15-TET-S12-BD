const app = require("./src/app")
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Vem ver a porta ${PORT} rodando`))