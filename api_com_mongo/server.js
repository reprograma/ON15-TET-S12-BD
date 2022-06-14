const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Tudo bem não funcionar, mas se funcionar rode na porta ${PORT}`))