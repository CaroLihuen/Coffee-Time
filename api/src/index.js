const express = require ('express')
require ('dotenv/config')
const {Router} = require ('express')
const products = require ('./routes/Products.js')
const {conn, Products} = require ('./db.js')
const utils = require ('./util/utils.js')
const fetch = require('node-fetch')

const router = Router()
const server = express()
const PORT = parseInt(process.env.PORT||3001)

console.log(process.env.PORT)

server.use(express.json())

// server.use('/prod', products)
router.get('/index', (req,res)=>{
    res.send({ms: 'hola ahora si?'})
})
server.use('/', router)

conn.sync({force: true}).then(()=> {

    server.listen(PORT, ()=> {
        console.log(`Listening on PORT ${PORT}`)
        fetch(utils)
        .then(data => data.json())
        .then(product => {

            product.map( async prod => {
                await Products.create({
                    name: prod.name ?prod.name :'Producto',
                    price: prod.price ?prod.price :'0',
                    description: prod.description ?prod.description :'No description',
                    image: prod.image ? prod.image : 'Not found',
                    score: prod.score ? prod.score :'0'
                })
            })
        })
    })
    // .catch( err=> console.log(err))

})
