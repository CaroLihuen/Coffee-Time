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