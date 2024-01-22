const express = require('express');
const app = express();
const port = 3000;
const products = require('./routes/productRoutes');

app.listen(port, () => {
    console.log(`Server started in port ${port}`);
});

app.use('/products', products);

