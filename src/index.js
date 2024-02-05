const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const products = require('./routes/productRoutes')
const payments = require('./routes/PaymentRoutes')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
app.use(cors())
app.use(express.json())
app.use('/products', products)
app.use('/process_payment', payments)
