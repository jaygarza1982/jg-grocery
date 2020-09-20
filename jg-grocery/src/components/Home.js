import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { pageInfo: null, };
    }

    async componentDidMount() {
        let fetched = await fetch('/user/home');
        let json = await fetched.json();
        this.setState({username: json.username, products: json.products});
    }

    render() {
        return (
            <div className="Home">
                <div>
                    {
                        this.state.username ? (
                        <div>Welcome, {this.state.username}!</div>
                        ) : (<div>Please login.</div>)
                    }
                </div>
                <div>
                    {
                        this.state.products ? (
                            this.state.products.map((p, index) => {
                                return (
                                    <div key={p.id} className="product">
                                        <div>{p.name}</div>
                                    </div>
                                )
                            })
                        ) : <div>Loading products...</div>
                    }
                </div>
            </div>
        );
    }
}

export default Home;