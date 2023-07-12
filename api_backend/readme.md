# Veificar versão do "node" instalado.
node -v
# Gerar arquivo package.jason/-lock.
verificar a pasta q está -> npm init -y /npm i express
# Baixar os npms abaixo: 
npm i mysq12;
npm i nodemon -D; ->Ele roda e automaticamente atualiza o arquivo editado.
npm i dotenv; 
# Criar um git ignore. 
Criar arquivo -> ".gitignore" [Ele serve para quando enviarmos os arquivos pro git ele não puxar os arquivos q não desejamos]
# Instalar o 'ESLint'.
npx eslint --init -> 'y' ou 'enter' para instalar -> 1° style/ 2° commonjs/ 3° none/ 4°no/ 5° browse/ 6° guide/ 7°standard/ 8°JSON/ 9°yes/ 10°npm/
# Criar scr. 
pasta principal -> pasta secundaria[onde está o node_modules] EX:'backend' -> cria a pasta 'scr'
# Criar arquivo 'js'. 
# Atualizar o package.jason.
"start": "node .backend/src/index.js -> nome da pasta."
# Para rodar.
Estar na pasta raiz -> 'npm start'.
# Configurações base. 
const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.status(200).send('lokloklok :0');
})

app.listen(3333,() => console.log('Running on port 3333')); 
# Para rodar no site/chrome.
http://localhost:3333/ -> '3333' número de chamada. <-EX
# Instalar o 'nodemon' no package.jason. 
"dev": "nodemon ./backend/src/index.js" -> Para rodar 'npm run dev'
