import { Router } from "express";
const server = Router();

import { somar, dobro, temperatura, media, tabuada }from './services.js'

server.get('/ping', (req, resp) =>{
    resp.send('pong');
})

// 1)
server.get('/dobro/:num', (req, resp) => {
    const num = Number(req.params.num);
   
    const d = dobro(num);

    resp.send({
        dobro: d
    });
})


// 2)
server.post('/somar', (req, resp) => {
    let a = req.body.a;
    let b = req.body.b;

    const x = somar(a, b);

    resp.send({
        somar: x
    })
})

// 3)
server.get('/temperatura/:graus', (req, resp) => {
    const graus = Number(req.params.graus);
    const x = temperatura(graus);

    resp.send({
        temperatura: x
    })
})

// 4)
server.post('/media', (req, resp) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    const n3 = req.body.n3;

    const m = media(n1, n2, n3);

    resp.send({
        media: m
    })
})

//5)
server.get('/tabuada', (req, resp) => {
    let num = Number(req.query.num);

   const x = tabuada(num);

    resp.send({
        tabuada: x
    })
})

export default server;