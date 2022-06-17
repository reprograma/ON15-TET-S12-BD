# <div align = "center"> ON15-TET-S12-BD </div>

<div align = "center">
    
Turma Online Todas em Tech - Back-end | Semana 12: **Introdução ao Banco de Dados e Integração**.

    
</div>


<br>
<div align = "center">
<img src='./assets/herstory_logo.jpeg' width = 500 alt = 'logo herstory'>
</div>
<br>

<div align = "center">

# her(story)

</div>

###  ROTAS: 

####  Método GET: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                      |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:     |
|  `GET`   | localhost:PORT/artist/all                   |                            Lista de todas as artistas         |
|  `GET`   | localhost:PORT/artist/by_id/:id             |                          Busca uma artista por ID             |
|  `GET`   | localhost:PORT/artist/by_name/?             |Busca artistas por nome de registro, artístico ou qualquer nome|
|  `GET`   | localhost:PORT/artist/occupation            |                                  Busca artistas por ocupação  |


<br>
</div>

####  Método PATCH: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `PATCH`  |  localhost:PORT/artist/update_item/:id      |Buscando por ID, atualiza qualquer item do cadastro da artista|


<br>
</div>

####  Método PUT: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|   `PUT`  |  localhost:PORT/artist/update_all/:id       |Buscando por ID, atualiza o cadastro da artista por completo  |

<br>
</div>


####  Método DELETE: 

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
| `DELETE` |  localhost:PORT/artist/delete_by_id/:id     |Buscando por ID, deleta o cadastro da artista                 |

<br>
</div>



####  Método POST:

<div align = "center">

|  Método  |                  Rota                       |                                Descrição                     |
| :------: | :-------------------------------------:     | :-------------------------------------------------------:    |
|  `POST`  |     localhost:PORT/artist/new_artist        |                        Cadastrar nova artista                |

<br>
</div>
