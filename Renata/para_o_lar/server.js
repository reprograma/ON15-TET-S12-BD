const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`That´s ok, I´m running at PORT ${PORT}`))