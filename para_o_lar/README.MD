# API DE MUSICAS

<hr>

### Tópicos 

- [Descrição do projeto](#descrição-do-projeto)

- [Funcionalidades](#funcionalidades)

- [Ferramentas utilizadas](#principais-ferramentas-utilizadas)

- [Acesso ao projeto](#acesso-ao-projeto)

- [Abrir e rodar o projeto](#abrir-e-rodar-o-projeto)

- [Desenvolvedores](#desenvolvedores)

## Descrição do projeto 

<p align="justify">
 Projeto de API de Musicas foi desenvolvido para o aprendizado de API realizando uma intergração com MongoDB do curso Reprograma. Essa API tem como objetivo armazena dados referente a  musicas.

## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realiza cadastro de novas musicas.

:heavy_check_mark: `Funcionalidade 2:` Você pode pesquisar musicas dando como parâmetro nome do artista ou categoria da musica.

:heavy_check_mark: `Funcionalidade 3:` Pode excluir uma musica através do id passado como parâmetro .

:heavy_check_mark: `Funcionalidade 4:` Pode pesquisar informações da musica passando como parâmetro o nome da musica.

## Principais ferramentas utilizadas
- NodeJS,
- MongoDB
###

## Acesso ao projeto

Você pode [acessar o código fonte do projeto](https://github.com/mariaftavares/ON15-TET-S12-BD/tree/Maria_Fernanda_Tavares/para_o_lar).

## Abrir e rodar o projeto
Primeiro você precisa ter instalado no seu computador `NodeJS` caso ainda não tenha clique [aqui](https://nodejs.org/en/download/) e realize a instalação. Após instalar você pode [clonar](https://docs.github.com/pt/repositories/creating-and-managing-repositories/cloning-a-repository) o repositorio na sua maquina você e abrir o editor de código-fonte da sua preferência, como por exemplo [VSCODE](https://code.visualstudio.com).
Para abrir o projeto no `VSCODE`, é necessário:  
- Ir na barra de menus e selecionar a opção `file` ou `arquivo`;
- Selecione a opção `open folder ...` e procure a pasta onde está o projeto;
- Por fim clique em `OK`.
- Entre na pasta  `ON15-TET-S12-BD` e depois na pasta `para_o_lar`, ao entrar na pasta execute o comando npm i instale todas as depedencias necessarias para rodar o projeto.

 ``` bash
├── ON15-TET-S12-BD
│   ├── para_o_lar
```
- Após isso crie um arquivo .env e siga como base o exemplo dado no arquivo `.env.example` colocando a porta em que deseja rodar o seu servidor e também o link do seu banco no MongoDB caso não tenha clique [aqui](https://www.automalabs.com.br/tutorial-mongodb-atlas-conta-bancos-e-colecoes/) e aprenda como criar um.
- Depois é so digitar `npm start` e utilizar o [postman](https://www.postman.com/postman/workspace/postman-public-workspace/request/create?requestId=3140f48f-c487-4a55-a045-ea0f82645fdc) para usar as rotas já feitas
<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Caminho</th>
      <th>Reposta</th>
    </tr>
  </thead>
 <tbody>
    <tr>
      <td>GET</td>
      <td>/musicas</td>
      <td>Traz todas as musicas cadastradas no banco.</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/musica/pesquisar/</td>
      <td>Traz todas as musicas com a categoria ou artista passado na query params</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/musica/pesquisarmusica</td>
      <td>Traz as informações da musica do titulo passado no query params</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/musica/criar</td>
      <td>Adiciona uma nova musica com as informações enviadas no body</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/musica/excluir/id</td>
      <td>Ele excluir a musica que possui o id passado no params(params é onde está escrito id)</td>
    </tr>
    </tbody>
</table>

- Exemplo de modelo para adicionar uma nova musica:
```bash
{
    "artista": "Nome do artista",
        "compositor": [
            "Nome do compositor"
        ],
        "titulo": "Nome da musica",
        "categoria": [
            "categoria da musica (pop,indie,mpb etc..)"
        ],
        "clipe": true,
        "imagens": []
}
```



## Desenvolvedora

| [<img src="https://avatars.githubusercontent.com/u/83185858?v=4" width=115><br><sub>Maria Fernanda Tavares</sub>](https://github.com/mariaftavares) | 
| :---: 
