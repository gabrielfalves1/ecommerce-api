const ProductService = require('../services/productService')
const { Product } = require('../models/Product')

exports.getAll = async (req, res) => {
    try {
        const results = await ProductService.getAll()
        res.json(results)

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }
}

exports.findById = async (req, res) => {
    try {
        const id = req.params.id
        const result = await ProductService.findById(id)
        if (result) {
            res.json(result)
        } else {
            res.status(404).json({ error: 'Produto não encontrado.' })
        }

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }
}

exports.create = async (req, res) => {
    const { name, description, price } = req.body;
    const newProduct = new Product(name, description, price)
    try {
        const result = await ProductService.create(newProduct);

        if (result.success) {
            res.json({ success: result.message })
        } else {
            res.status(404).json({ error: result.message })
        }

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }

}

exports.edit = async (req, res) => {
    try {
        const product = req.body
        const id = req.params.id
        const result = await ProductService.edit(product, id)

        if (result.success) {
            res.json({ success: result.message })
        } else {
            res.status(404).json({ error: result.message })
        }

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }
}

exports.remove = async (req, res) => {
    try {
        const id = req.params.id
        const result = await ProductService.remove(id)

        if (result.success) {
            res.json({ success: result.message })
        } else {
            res.status(404).json({ error: result.message })
        }

    } catch (error) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }
}