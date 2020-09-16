import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="Background">
                <Link to="/login"><button class="btn btn-primary">Login</button></Link>
                <Link to="/register"><button class="btn btn-primary">Register</button></Link>
            </div>
        );
    }
}

export default LandingPage;