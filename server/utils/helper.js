const bcrypt = require('bcrypt');

const haspassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

module.exports = {
    haspassword,
};
