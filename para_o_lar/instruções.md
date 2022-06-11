# Para o lar

Como terceira parte da aula, com banco de dados, vamos cadastrar os nossos artistas.

## 📑 Arquitetura do Projeto

```

para_o_lar         
    ├─ src                       
    │  ├─ controllers            
    │  │  └─ nomeDaSuaController.js  
    │  ├─ database               
    │  │  └─ moogoseConnect.js      
    │  ├─ models                 
    │  │  └─ nomeDaSuaModel.js      
    │  ├─ routes                 
    │  │  └─ nomeDaSuaRota.js      
    │  └─ app.js                 
    ├─ package-lock.json         
    ├─ package.json  
    ├─ .gitignore            
    └─ server.js

```

📖 A `Schema` de como vai ser sua playlist fica totalmente com vcs, mas é necessário, ao menos, que contenha 5 ou mais campos, possuindo 3 tipos diferentes. Abaixo os exemplos de tipos.

```
datas -> Date ->  2022/12/13
texto: String ->  'meu primeiro trabalho com mongo <3'
lista: ['pop', 'mpb', 'samba']
number: Number -> 1234
boolean: Boolean -> true | false

```

### Como entrega eu vou considerar 2 gets e um post, mas sitam-se avontade caso queira fazer mais

👩🏽‍🏫 Regras:
 - (opicional) Tratamento de erros e tratamento de campos são bem vindos, mas não obrigátorios.
 - (obrigatorio) mesmo que seja feito em dupla, eu preciso que cada uma abra um PR indivudual e na descrição coloca o nome da dupla.

Sugestão na hora de fazer

- um POST para criar os artistas.
- um get de todos os artistas
- um get por id 
- (opcional) um get por nome

Obrigada meninas, qualquer dúvida, podem me chamar no slack ou no linkedin.