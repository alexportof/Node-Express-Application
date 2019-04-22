// const express = require('express')
// const nunjucks = require('nunjucks') //nunjucks é uma template engine,uma forma de renderizar html com JS

// const app = express();

// nunjucks.configure('views', {
//     autoescape: true,
//     express: app,
//     watch: true,
// });

// app.set('view engine', 'njk'); // set serve pra setar config globais o njk é a extensao dos arquivos nunjucks

// // app.get('/', (req, res) => {
// //     return res.send(`Bem-vindo,${req.query.name}`) // query params
// // });


//  app.get('/', (req, res) => {
//      return res.render("list",{name: "alex"});
//  });


// app.get('/nome/:name', (req, res) => {
//     return res.send(`Bem-vindo`); //no req estao todos os parametros e como esse parametro vem da url sem nome,usa o params e o nome do parametro
// });

// app.listen(3000);