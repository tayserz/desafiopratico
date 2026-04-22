const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'shinkansen.proxy.rlwy.net',
    port: 42665,
    user: 'root',
    password: 'XkiKOVjvsOKDIlUWfoSshRfgsuLjndyL',
    database: 'railway'
});

module.exports = db;