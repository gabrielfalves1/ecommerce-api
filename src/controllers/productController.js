const productService = require('../services/productService');

exports.getAll = async (req, res) => {
    try {
        const products = await productService.getAll();
        res.json(products);

    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' });
        console.error(err.message);
    }
};
