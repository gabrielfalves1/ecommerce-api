const conn = require('../database/db')
const { v4: uuidv4 } = require('uuid')

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM products WHERE status = 'active'", function (error, results) {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        })
    })
}

exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("SELECT * FROM products WHERE id = ? LIMIT 1", [id], function (error, results) {
            if (error) {
                reject(error)
            } else {
                if (results.length > 0) {
                    resolve(results)
                } else {
                    resolve(null)
                }
            }
        })
    })
}

exports.create = (product) => {
    return new Promise((resolve, reject) => {
        const id = uuidv4()
        conn.query("INSERT INTO products(id, name, description, price) VALUES(?, ?, ?, ?)",
            [id, product.name, product.description, product.price],
            function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    const rows = result.affectedRows
                    if (rows > 0) {
                        resolve({ success: true, message: 'Produto cadastrado com sucesso!' })
                    } else {
                        resolve({ success: false, message: 'Produto não pode ser cadastrado.' })
                    }
                }
            })
    })
}

exports.edit = (product, id) => {
    return new Promise((resolve, reject) => {
        conn.query("UPDATE products set name = ?, description = ?, price = ? WHERE id = ?",
            [product.name, product.description, product.price, id],
            function (error, result) {
                if (error) {
                    reject(error)
                } else {
                    const rows = result.affectedRows
                    if (rows > 0) {
                        resolve({ success: true, message: 'Produto atualizado com sucesso!' })
                    } else {
                        resolve({ success: false, message: 'Produto não encontrado.' })
                    }
                }
            })
    })
}

exports.remove = (id) => {
    return new Promise((resolve, reject) => {
        conn.query("UPDATE products SET status = 'deleted' WHERE id = ?", [id], function (error, result) {
            if (error) {
                reject(error)
            } else {
                const rows = result.affectedRows
                if (rows > 0) {
                    resolve({ success: true, message: 'Produto removido!' })
                } else {
                    resolve({ success: false, message: 'Produto não encontrado.' })
                }
            }

        })
    })
}