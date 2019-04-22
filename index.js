const express = require('express')
const nunjucks = require('nunjucks')

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.set('view engine', 'njk')

app.get('/', (req, res) => {
    return res.send(`Bem-vindo,${req.query.name}`) // query params
});

app.get('/nome/:name', (req, res) => {
    return res.send(`Bem-vindo`); //no req estao todos os parametros e como esse parametro vem da url sem nome,usa o params e o nome do parametro
});

app.listen(3000);