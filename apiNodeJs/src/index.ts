import express from 'express';
import { config } from 'dotenv';
import { request } from 'http';

config();

const app =express();

const port = process.env.PORT || 3333;

app.get(`/gremiovaisaircampeao`, (request, response) => {
    response.send('Atenção terraquios, o gremio vai sair campeão!')
})

app.listen(port, () => console.log(`listening on port ${port}`));
