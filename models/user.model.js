class User {
    constructor(username) {
        this.fullname = null;
        this.username = null;
        this.password = null;
        this.passwordConfirm = null;
        this.hash = null;
        this.salt = null;
    }
}

module.exports = User;