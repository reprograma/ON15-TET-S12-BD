# <div align = "center"> ON15-TET-S12-BD </div>

<div align = "center">
    
Turma Online Todas em Tech - Back-end | Semana 12: **Introdução ao Banco de Dados e Integração**.

    
</div>


<br>
<div align = "center">
<img src='./assets/herstory_logo.jpeg' width = 500 alt = 'logo herstory'>
</div>
<br>

# her(story)

</div>

<div align = "justify">

A web API **her(story) - Powerful brazilian female artists you should know**, é uma celebração cultural onde é possível acessar informações de artistas brasileiras de diferentes seguimentos e épocas que marcaram a história.

O Brasil tem uma longa e rica história, escrita com a ajuda de grandes mulheres, algumas delas só tiveram o devido reconhecimento da importância de suas obras após a sua morte. Essas brasileiras são ícones nas suas áreas de atuação e merecem ser relembradas, aproveite para conhecer um pouco de cada uma delas. 


</div>

## DESENVOLVIMENTO 
<div align = "justify">

O primeiro passo para a realização do projeto foi a criação do banco de dados,, no MongoDB Atlas, contendo as informações de `cadastro` de cada artista. Foram indexados 15 cadastros de artistas de todas as regiões do brasil, de várias épocas históticas, onde todas as informações são verdadeiras, extraídas de biografias disponíveis na web. Cada cadastro conta com um **id** numérico único, assim como informações específicas relacionadas a cada artista como sua **data de nascimento**, **nome artistico** e **área de atuação**. 
  
<br>

<div align = "center"> Exemplo de artista cadastrada:  
</div>

```json

{
        "_id": "62acddfb0b556416da33189d",
        "birthName": "Maria Madalena Correia do Nascimento",
        "artisticName": "Lia de Itamaracá",
        "age": 78,
        "birthday": "1944-01-12T00:00:00.000Z",
        "from": "Pernambuco",
        "occupation": [
            "songwriter",
            "singer",
            "dancer",
            "actress"
        ],
        "bio": "Considerada a mais célebre cirandeira do Brasil, foi titulada como Patrimônio Vivo do estado de Pernambuco e recebeu a medalha do Mérito Cultural do Governo Federal. Em 2019, Lia recebeu o título de Doutora Honoris Causa, pela Universidade Federal de Pernambuco pelos serviços prestados à cultura de Pernambuco e do Brasil. Tendo sua importância reconhecida internacionalmente, Lia foi denominada “Diva da música negra” pelo The New York Times.",
        "famousWorks": [
            "Ciranda Sem Fim(2019)",
            "Ciranda de Ritmos(2008)",
            "Eu Sou Lia(2000)",
            "A Rainha da Ciranda(1977)"
        ],
        "awards": true,
        "alive": true,
        "image": [
            "http://simaigualdaderacial.com.br/premio2020/wp-content/uploads/2020/09/Lia-de-Itamaraca.jpg"
        ],
        "createdAt": "2022-06-17T20:03:07.751Z",
        "updatedAt": "2022-06-17T20:48:36.679Z",
        "__v": 0
    }

```


<div align = "justify">

Após o término da fase de cadastramento das artistas, foram desenvolvidas as lógicas necessárias para o funcionamento dos métodos, contidas dentro de funções. A cada função, um tratamento de erro foi criado por método **try-catch**, e os devidos status aplicados. Dentre os casos positivos, temos o status ***200*** indicando sucesso e ***201***, indicando que um item foi criado. Dentre os erros, podemos destacar o   ***404***, onde um item não pode ser encontrado, ***406***, onde o request não é aceito, ***409***, indicando conflito e ***500***, indicando erro interno do servidor.  
Com as lógicas contruídas, a próxima etapa foi a criação das seguintes rotas:

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




<div align = "justify">


##  INFORMAÇÕES TÉCNICAS 
###  DEPENDÊNCIAS:

<div align = "justify">

Para que fosse possível a execução desse projeto, foi necessária a utilização de algumas dependências, descritas a seguir:
</div>

<br>

###  ⚙️ Módulos:

<div align = "justify">

- [Express](https://www.npmjs.com/package/express) - Framework para aplicativo da web do Node.js;
<br>

- [Nodemon](https://www.npmjs.com/package/nodemon) - Ajuda no desenvolvimento de sistemas com o Node. js reiniciando automaticamente o servidor;
<br>

- [Cors](https://www.npmjs.com/package/cors) - Permite que um site acesse recursos de outro site mesmo estando em domínios diferentes.
 <br>

 - [Mongoose](https://www.npmjs.com/package/mongoose) - É uma biblioteca de programação orientada a objetos JavaScript que cria uma conexão entre MongoDB e a estrutura de aplicativo da web Express.
 <br>

 - [Dotenv](https://www.npmjs.com/package/dotenv) - Carrega variáveis de ambiente de um arquivo .env para process.env.
 <br>
</div>

###  Arquivos: 

<div align = "justify">

- [package-lock.json] - Especifica a versão e suas dependências;
<br>

- [package.json] - Srquivo de configuração utilizado para estipular e configurar dependências;
<br>

- [.gitignore] - Arquivo que lista quais arquivos ou pastas o Git deve ignorar.
<br>

</div>

<br>

###  INSTALAÇÃO: 

1. Entre na pasta onde você deseja clonar o repositório. Abra o **git** nela e digite: 

    ```bash
    $ git clone https://github.com/BrunaCelestino/ON15-TET-S12-BD
     ```

2. Digite a linha abaixo para entrar na branch correta: 

    ```bash
    $ git checkout BrunaCelestino
    ```

3. Digite a linha abaixo para entrar na pasta correta: 

    ```bash
    $ cd para-o-lar/
    ```
    
4. Escreva a seguinte linha para instalar as dependências utilizadas nesse projeto: 

   ```bash
    $ npm install
    ```
5. Inicie o servidor, utilizando a frase: 

   ```bash
    $ npm start
    ```   

<br>

<div align = "justify">

###  TESTE: 

- Importe a coleção para teste deste servidor clicando [aqui](https://www.getpostman.com/collections/4c0cfb6fd8ef0b612113)!

- Copie o link acima e, no Postman, clique em **Import** -> **Link** (cole o link) -> **Continue** -> **Import**.

<br>

- Ou forke diretamente para o seu Postman clicando: <br> [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/20977005-92d3a5cf-f49a-47fd-8cc2-2e239ac95b04?action=collection%2Ffork&collection-url=entityId%3D20977005-92d3a5cf-f49a-47fd-8cc2-2e239ac95b04%26entityType%3Dcollection%26workspaceId%3Dfd948d9e-a939-463f-8094-05c2599f2db5) 


</div>

###  AUTORAS: 

- [Bruna Celestino](https://github.com/BrunaCelestino)
<br>

- [Eliza Pimentel](https://github.com/elizapimentel)
<br>

- [Geankre Souza](https://github.com/Geankre)
<br>




