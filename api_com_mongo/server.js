const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`ta tudo bem, bora rodar na ${PORT} `))