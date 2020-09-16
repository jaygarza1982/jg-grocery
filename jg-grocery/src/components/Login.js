import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="CenterContainer">
                <h1>
                    Login to JG Grocery
                </h1>
                <div className="Register">
                    <form className="form" method="post" action="/user/login">
                        <div className="form-group">
                            <label htmlFor="jg-username">Username</label>
                            <input type="text" autocomplete="off" className="form-control" id="jg-username" name="username" placeholder="Username" />

                            <label htmlFor="jg-password">Password</label>
                            <input type="password" className="form-control" id="jg-password" name="password" placeholder="Password"/>

                            <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Login;