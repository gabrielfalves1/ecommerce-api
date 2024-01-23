const express = require('express')
const ProductController = require('../controllers/productController')
const router = express.Router()

router.get('/', ProductController.getAll)

router.get('/:id', ProductController.findById)

router.post('/', ProductController.create)

router.post('/:id',)

router.put('/:id', ProductController.edit)

router.delete('/:id',)

module.exports = router

