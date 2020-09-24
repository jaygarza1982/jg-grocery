
class HomeService {
    constructor (session) {
        this.session = session;
    }

    getHome(response) {
        if (this.session.user) {
            const reader = require('./data.reader.service');
            let r = new reader('../assets/data.csv');
            r.read();
            console.log(r);
            response.json({
                username: this.session.user.username,
                products: [
                    {
                        name: 'product1 name hereeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
                        id: 'product1 id here',
                    },
                    {
                        name: 'product2 name here',
                        id: 'product2 id here',
                    },
                    {
                        name: 'product3 name here',
                        id: 'product3 id here',
                    },
                    {
                        name: 'product4 name here',
                        id: 'product4 id here',
                    },
                    {
                        name: 'product5 name here',
                        id: 'product5 id here',
                    },
                ],
            });
        }
    }
}

module.exports = HomeService;