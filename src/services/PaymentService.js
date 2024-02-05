const { MercadoPagoConfig, Payment } = require('mercadopago');
const client = new MercadoPagoConfig({ accessToken: process.env.access_token });
const payment = new Payment(client);
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

exports.createPayment = (paymentData) => {
    const id = uuidv4()
    payment.create({
        body: paymentData,
        requestOptions: { idempotencyKey: id }
    })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
} 