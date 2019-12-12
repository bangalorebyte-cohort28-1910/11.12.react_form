import React, { Component } from 'react'

export class RegisterForm extends Component {
    render() {
        return (
            <div className="login">
                <form className="login-form">
                    <h3 className="text-center">Register Form</h3>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Username</label>
                        <input type="text" className="form-control" id="username" placeholder="Set a username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Confirm Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Re-enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign up</button>
                    <p className="forgot-password text-right">Already registered?<a href="/sign-in"> Sign in</a></p>
                </form>
            </div>

        )
    }
}


export default RegisterForm;
