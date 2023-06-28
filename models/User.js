const db = require('../models/db_config');


module.exports.add_answer = (firstname, name, answer, email, word, day) => {
  db.prepare("INSERT INTO answer (firstname, name, answer,email ,words, day) VALUES (?, ?, ? ,?, ?, ?);").run(firstname, name, answer,email, word, day);
};


module.exports.selectAll = () => {
  return db.prepare("SELECT * FROM answer").all();
};

module.exports.selectSaturday = () => {
  return db.prepare("SELECT * FROM answer WHERE day = 'zaterdag'").all();
};

module.exports.selectSunday = () => {
  return db.prepare("SELECT * FROM answer WHERE day = 'zondag'").all();
};




