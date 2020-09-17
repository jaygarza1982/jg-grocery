class UserModel {
    constructor(username) {
        this.fullname = null;
        this.username = username;
        this.hash = null;
    }
}

module.exports = UserModel;