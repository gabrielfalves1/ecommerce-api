const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', productController.getAll);

router.post('/:id', (req, res) => {

})

router.put('/:id', (req, res) => {

})

module.exports = router;

