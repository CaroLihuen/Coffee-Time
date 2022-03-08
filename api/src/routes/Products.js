const { Router } = require( 'express')
const util = require( '../util/utils.js')

const router = Router();

router.get('/', (req, res) => {

    // res.send({util})
    res.send({ms: 'Holaaaaa'})

});


router.get('/home', (req, res) => {
    res.send({ms: 'Holaaaaa en homeee'})
    
});

// router.put('path', (req, res) => {
    
// });

// router.delete('path', (req, res) => {
    
// });

module.exports = {router};