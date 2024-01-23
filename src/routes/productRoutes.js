const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', productController.getAll);

router.get('/:id', productController.findById);

router.post('/:id',);

router.put('/:id',);

router.delete('/:id',);

module.exports = router;

