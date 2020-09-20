
class HomeService {
    constructor (session) {
        this.session = session;
    }

    getHome(response) {
        if (this.session.user) {
            response.json({
                username: this.session.user.username,
                products: [
                    {
                        name: 'product1 name here',
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
                ],
            });
        }
    }
}

module.exports = HomeService;