const express = require('express')

const app = express();

app.get('/', (req, res) => {
    return res.send(`Bem-vindo,${req.query.name}`) // query params
});

app.get('/nome/:name', (req, res) => {
    return res.send(`Bem-vindo, ${req.params.name}`); //no req estao todos os parametros e como esse parametro vem da url sem nome,usa o params e o nome do parametro
});

app.get('/cidade/:city', (req, res) => {
   return res.json({ //tipo de resposta mt utilizada q serve qndo estamos criando API rest(sem parte de visualização)
       message: `Your city is ${req.params.city}`
   });
});

app.listen(3000);