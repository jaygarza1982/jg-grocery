
class HomeService {
    constructor (session) {
        this.session = session;
    }

    getHome(response) {
        if (this.session.user) {
            const reader = require('./data.reader.service');
            let r = new reader('../assets/data.csv');
            response.json({
                username: this.session.user.username,
                products: r.read(),
            });
        }
    }
}

module.exports = HomeService;