<<<<<<< HEAD
import express from 'express'
import 'dotenv/config'
import {Router} from 'express'
import products from './routes/Products.js'

const router = Router()
const server = express()
const PORT = parseInt(process.env.PORT||3001)

console.log(process.env.PORT)

server.use(express.json())
server.listen(PORT, ()=> console.log(`Listening on PORT ${PORT}`))

server.use('/prod', products)
router.get('/index', (req,res)=>{
    res.send({ms: 'hola ahora si?'})
})
server.use('/', router)
=======
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
require('./db.js') 
const obj=require('utils/utils');

const server= express();
server.name= obj

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

server.use((err,req,res,next) => {
    const status =err.status || 500;
    const message=err.message || err;
    console.log(err);
    res.status(status.send(message));
})

module.exports =server
>>>>>>> 69a1e65deab5bb1ae241cc56d03bd7cd0e316200
