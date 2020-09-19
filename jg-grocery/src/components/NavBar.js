import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.linkStyle = { marginRight: 50}
    }
    render() {
        return (
            <div className="NavBar">
                <div className="container-fluid">
                    <div className="text-center row">
                        <div className="col-1" style={this.linkStyle}>
                            <Link to="/login">
                                <div>
                                    Login
                                </div>
                            </Link>
                        </div>
                        <div className="col-1" style={this.linkStyle}>
                            <Link to="/register">
                                <div>
                                    Register
                                </div>
                            </Link>
                        </div>
                        <div className="col-1" style={this.linkStyle}>
                            <Link to="/home">
                                <div>
                                    Home
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;