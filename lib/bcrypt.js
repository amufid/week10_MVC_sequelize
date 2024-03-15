const bcrypt = require('bcrypt');
const saltRound= 10;
const salt = bcrypt.genSaltSync(saltRound);

const hashPassword = (plaintextPassword) => {
   return bcrypt.hashSync(plaintextPassword, salt)
}

module.exports = hashPassword