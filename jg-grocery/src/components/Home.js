import React, { Component } from 'react';

import Product from './Product';

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
            <div className="container-fluid Home">
                <div>
                    {
                        this.state.username ? (
                        <h1>Welcome, {this.state.username}!</h1>
                        ) : (<div>Please login.</div>)
                    }
                </div>
                <div className="row Products">
                    {
                        this.state.products ? (
                            this.state.products.map((p, index) => {
                                return (
                                    <Product 
                                        key={p.id}
                                        price={p.price}
                                        description={p.description}
                                        size={p.size}
                                    />
                                )
                            })
                        ) : (
                            <div className="col-12">
                                Loading...
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Home;