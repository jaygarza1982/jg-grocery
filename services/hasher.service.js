const bcrypt = require('bcryptjs');
const cryptoConfig = require('../config/crypto.config');

class HasherService {
    genHash (pass) {
        let salt = bcrypt.genSaltSync(cryptoConfig.hashRounds);

        return bcrypt.hashSync(pass, salt);
    }

    check (pass, hash) {
        return bcrypt.compareSync(pass, hash);
    }
}

module.exports = HasherService;