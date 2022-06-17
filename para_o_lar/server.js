const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`Portinha lindaaaa, rodando na porta ${PORT}`))