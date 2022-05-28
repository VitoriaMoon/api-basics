
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import endpoints from './endpoints.js'
const server = express();
server.use(cors());
//extensão de parametro de corpo (body)
server.use(express.json());
server.use(endpoints);


server.listen(process.env.PORT, 
                () => console.log(`API ON NA PORTA ${process.env.PORT}`));
