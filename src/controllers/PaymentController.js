const PaymentService = require('../services/PaymentService')

exports.createPayment = async (req, res) => {
    try {
        const { body } = req;
        const { payer } = body;
        const paymentData = {
            transaction_amount: body.transaction_amount,
            token: body.token,
            description: body.description,
            installments: body.installments,
            payment_method_id: body.payment_method_id,
            issuer_id: body.issuer_id,
            payer: {
                email: payer.email,
                identification: {
                    type: payer.identification.type,
                    number: payer.identification.number
                }
            }
        }
        PaymentService.createPayment(paymentData)
        //console.log(paymentData);
    } catch (err) {
        res.status(500).json({ error: 'Erro Interno do Servidor' })
        console.error(err.message)
    }
}