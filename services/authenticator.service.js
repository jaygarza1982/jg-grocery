const MongoClient = require('mongodb').MongoClient;
const mongoConfig = require('../config/mongo.config');

class AuthenticatorService {
    constructor(user) {
        this.user = user;
        this.client = new MongoClient(mongoConfig.url);
    }

    login (response) {
        MongoClient.connect(mongoConfig.url, (err, client) => {
            let dbObj = client.db(mongoConfig.DBName);
            
            let collection = dbObj.collection(mongoConfig.usersCollection);

            collection.findOne({username: this.user.username}, (err, results) => {
                // If a user exists with this username
                if (results != null) {
                    console.log(results);
                }
            });
        });
    }
}

module.exports = AuthenticatorService;