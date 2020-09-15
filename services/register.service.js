const MongoClient = require('mongodb').MongoClient;
const mongoConfig = require('../config/mongo.config')

class RegisterService {
    constructor(user) {
        this.user = user;
        this.client = new MongoClient(mongoConfig.url);
    }

    register (response) {
        MongoClient.connect(mongoConfig.url, (err, client) => {
            let dbObj = client.db(mongoConfig.DBName);
            
            let collection = dbObj.collection(mongoConfig.usersCollection);

            collection.findOne({username: this.user.username}, (err, results) => {
                // If there is not a user with this username already
                if (results == null) {
                    // Only insert if passwords match
                    if (this.user.password === this.user.passwordConfirm) {
                        collection.insertOne(this.user, (err, res) => {
                            if (err != null) {
                                console.log(err);
                            }
                            // We were able to insert successfully
                            else {
                                response.json(this.user);
                            }
                        });
                    }
                    else {
                        response.send('Passwords do not match.');
                    }
                }
                else {
                    response.send('Username already registered.');
                }
            });
        });
    }
}

module.exports = RegisterService;