const productService = require('../services/productService');
//const Product = require('../models/product');

exports.getAll = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.json(products);

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        console.error(err.message);
    }
};

exports.findById = async (req, res) => {
    try {
        const product = await productService.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Produto não encontrado.' })
        }

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        console.error(err.message);
    }
}
