class PotentialUserModel {
    constructor(username) {
        this.username = username;
        this.password = null;
        this.passwordConfirm = null;
    }
}

module.exports = PotentialUserModel;