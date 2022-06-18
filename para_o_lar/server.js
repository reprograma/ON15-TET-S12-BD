const artistasJson = require("./artistasJson.json")

const express = require("express")
const cors = require("cors")
const { request } = require("express")

const app = express()
app.use(express.json())
app.use(cors())

const PORT = 8123


app.get("/artistas", (req, res)=>{

res.status(200).json(artistasJson)
})

app.get("/artistas/buscar/:id", (req, res)=>{

const idRequest = req.params.id
const artistaEncontrado = artistasJson.find(artista => artista.id == idRequest)
res.status(200).json(artistaEncontrado)
})

app.post("/artistas/cadastrar", (req, res)=>{

const bodyRequest = req.body
const novoArtista = {

    "id": (artistasJson.length)+1,
    "Nome": bodyRequest.Nome,
    "Estilo musical": bodyRequest.estiloMusical
}
artistasJson.push(novoArtista)

res.status(201).json(novoArtista)

})

app.delete("/artistas/deletar/:id",(req, res) => {
    const idRequest = req.params.id
    const artistaEncontrado = artistasJson.find(artista=>artista.id == idRequest)

 
    const indice = artistasJson.indexOf(artistaEncontrado)

   
    artistasJson.splice(indice, 1)

    res.status(200).json([{
        "mensagem": "Artista deletado com sucesso",
        "artistaDeletado": artistaEncontrado,

    }])

})

app.put("/artistas/substituir/:id", (req, res) => {
    const idRequest = req.params.id
    const bodyRequest = req.body
    const artistaEncontrado = artistasJson.find(artista => artista.id == idRequest)
    const indice = artistasJson.indexOf(artistaEncontrado)


    bodyRequest.id = idRequest

    artistasJson.splice(indice, 1, bodyRequest)

    res.status(200).json([{
        "mensagem": "Dados do artista atualizado com sucesso",
        "dadosAtualizados": bodyRequest,
        artistasJson
    }])
})

app.patch("/artistas/updateEstilo/:id", (req, res)=>{
    const idRequest = req.params.id
    const novoEstilo = req.body.estiloMusical

    const artistaEncontrado = artistasJson.find(artista => artista.id == idRequest)

    artistaEncontrado.estiloMusical = novoEstilo

    res.status(200).json([{
        "mensagem": "Estilo atualizado com sucesso",
        "EstiloAtualizado": artistaEncontrado,
        artistasJson
    }])

})



app.listen(PORT, ()=>{

console.log(`O servidor está rodando na porta ${PORT}`)

})

