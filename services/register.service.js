const MongoClient = require('mongodb').MongoClient;
const mongoConfig = require('../config/mongo.config')
const HasherService = require('../services/hasher.service');
const UserModel = require('../models/user.model');

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

                        // Modify user for insert
                        let hashService = new HasherService();
                        let newUser = new UserModel(this.user.username);
                        newUser.hash = hashService.genHash(this.user.password);

                        // Insert the user and return proper response after registration
                        collection.insertOne(newUser, (err, res) => {
                            if (err != null) {
                                console.log(err);
                            }
                            // We were able to insert successfully
                            else {
                                response.json(newUser);
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