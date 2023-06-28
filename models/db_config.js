const { dbPath } = require('../config');



const db = require('better-sqlite3')(dbPath,{verbose : console.log});
module.exports = db;