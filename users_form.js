const express = require('express')
const nunjucks = require('nunjucks') //nunjucks é uma template engine,uma forma de renderizar html com JS

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.set('view engine', 'njk');
app.use(express.urlencoded({extended: false })); // pra termos acesso ao corpo da requisicao temos que informar ao express q vamos utilizar a leitura de corpo

const users = ["Alex", "Porto", "Ferreira"];

app.get('/', (req, res) => {
     return res.render("list",{users});
 });

app.get('/new', (req, res) => {
    return res.render('new');
})

app.post('/create', (req, res) => { // agr nossas informacoes estao no corpo da requisicao e nao da pra enxergar na url
    users.push(req.body.user);
    console.log(req.body);
    return res.redirect('/');
});

app.listen(3000);