import { Router } from "express";
const server = Router();

import { somar, dobro }from './services.js'

server.get('/ping', (req, resp) =>{
    resp.send('pong');
})

//parametro de rota
server.get('/dobro/:num', (req, resp) => {
    const num = Number(req.params.num);
   
    const d = dobro(num);

    resp.send({
        dobro: d
    });
})

//parametro de query
server.get('/somar', (req, resp) => {
    let a = Number(req.query.a);
    let b = Number(req.query.b);

   const x = somar(a, b);

    resp.send({
        somar: x
    })
})

//parametro de corpo(body)
server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;

    const x = somar(a, b);

    resp.send({
        somar: x
    })
})

//desestrutruração 
server.post('/somar', (req, resp) => {
  try{  
    const {a, b}= req.body;
    const x = somar(a, b)

        resp.send({
            somar: x
        })
     }
    catch (err){
        resp.status(500).send({
            erro: err.message
        })   
    }
})

export default server;