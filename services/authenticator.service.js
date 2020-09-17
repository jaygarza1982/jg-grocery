const MongoClient = require('mongodb').MongoClient;
const mongoConfig = require('../config/mongo.config');
const HasherService = require('../services/hasher.service');

class AuthenticatorService {
    constructor(user) {
        this.user = user;
        this.client = new MongoClient(mongoConfig.url);
    }

    login (response) {
        MongoClient.connect(mongoConfig.url, (err, client) => {
            let dbObj = client.db(mongoConfig.DBName);
            
            let collection = dbObj.collection(mongoConfig.usersCollection);

            collection.findOne({username: this.user.username}, (err, user) => {
                // If a user exists with this username
                if (user != null) {
                    console.log(user);

                    let hasherService = new HasherService();
                    if (hasherService.check(this.user.password, user.hash)) {
                        console.log('Successful login from ' + this.user.username);
                        response.json(user);
                    }
                    else {
                        console.log('Failed login for ' + this.user.username);
                        response.send('Wrong username or password.');
                    }
                }
                else {
                    response.send('Wrong username or password.');
                }
            });
        });
    }
}

module.exports = AuthenticatorService;