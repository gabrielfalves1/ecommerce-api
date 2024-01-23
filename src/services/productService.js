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
