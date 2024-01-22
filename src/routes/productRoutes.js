const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Rota de produtos!');
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

module.exports = router;

s