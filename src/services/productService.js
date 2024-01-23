const conn = require('../database/db');

exports.getAll = () => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM products', function (error, results) {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

exports.findById = (id) => {
    return new Promise((resolve, reject) => {
        conn.query('SELECT * FROM products WHERE id = ?', [id], function (error, results) {
            if (error) {
                reject(error);
            } else {
                if (results.length > 0) {
                    resolve(results);
                } else {
                    resolve(null);
                }
            }
        })
    })
}