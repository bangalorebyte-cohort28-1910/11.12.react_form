import React, { Component } from 'react'

export class LoginForm extends Component {
    render() {
        return (
            <div className="login">
                <form className="login-form">
                    <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    <p className="forgot-password text-right">Forgot<a href=" "> password?</a></p>
                </form>
            </div >

        )
    }
}


export default LoginForm;
