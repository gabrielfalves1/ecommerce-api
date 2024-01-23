const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(express.json());
const products = require('./routes/productRoutes');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use('/products', products);

