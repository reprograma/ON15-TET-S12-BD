// importar express
require ('dotenv-safe').config()
const express = require ('express')
const cors = require ('cors')
// = : ele é uma atribuição, o que vier a esquerda do = é o valor que eu pego da direita, nesse caso express é uma 
// variável que tem o valor do require que importou tudo que tem dentro da pasta express. 
//() : método se usa parenteses para invocar o metodo .

//importar o banco 
const bancoDB = require ('./Database/mongoDbConect')
const artistasRouter = require('./routers/artistasRoutes')
// criar a const app
const app = express()
app.use(cors())
app.use(express.json())

// exportar o app

// conectar o banco 

app.use('/artistas', artistasRouter)
bancoDB.connect()

module.exports = app
