import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { pageInfo: null, };
    }

    async componentDidMount() {
        let fetched = await fetch('/user/home');
        let json = await fetched.text();
        console.log(json);
        this.setState({pageInfo: json});
    }

    render() {
        return (
            <div className="Home">
                Welcome, username!
                <div>
                    {this.state.pageInfo}
                </div>
            </div>
        );
    }
}

export default Home;