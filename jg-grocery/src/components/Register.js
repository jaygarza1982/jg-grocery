import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="CenterContainer">
                <div className="Register">
                    <form className="form" method="post" action="/user/register">
                        <div className="form-group">
                            <label htmlFor="jg-username">Username</label>
                            <input type="text" autocomplete="off" className="form-control" id="jg-username" name="username" placeholder="Username" />

                            <label htmlFor="jg-password">Password</label>
                            <input type="password" className="form-control" id="jg-password" name="password" placeholder="Password"/>

                            <label htmlFor="jg-password">Password confirm</label>
                            <input type="password" className="form-control" id="jg-password" name="passwordConfirm" placeholder="Password confirm"/>

                            <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Register"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Register;