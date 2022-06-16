# Todas em Tech - Back-end | Semana 12: Projeto Guiado | Profa: Beatriz Ramerindo

# Entrega do exercício

Para o exercício desta semana era preciso criar um API rest com três GETs (all, byName e byId) e um POST (create) conectado ao banco de dados.

A API sendo uma API de música e os verbos relativos ao cadastro e busca de artistas.

Para tal criei um SCHEMA incluindo 6 requests (id, artista, membros, número de álbuns, gênero musical, se todos os álbuns estão cadastrados e o ano de início) com os tipos String, [String], Number, Boolean e Date. O SCHEMA ficou no seguinte formato:

const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: {
        type: String,
    },
    members: [String],
    albumsNumber: Number,
    genre: [String],
    allAlbums: Boolean,
    realeaseYear: Date,

}, { timestamps: true })

A API permite que a pessoa usuária faça buscas por todos os artistas, pelo ID, pelo nome do artista e cadastre novos artistas. A API também conta com tratamento de erros básico.

A API está conectada ao MongoDB.

A API consta com as seguintes rotas:
* router.post("/artist/create", controller.createArtist) - Cadastra artistas.

* router.get("/artist", controller.findAllArtist) - Busca todos os artistas.

* router.get("/artist/:id", controller.findById) - Busca artista por id.

* router.get("/artist/name", controller.findByName) - Busca por nome.


Utilizei: 
* JavaScrip
* NODE JS
* Modelo MVC
* Verbos HTTP
* API restful
* Express
* Cors
* MONGODB
* Mongoose
