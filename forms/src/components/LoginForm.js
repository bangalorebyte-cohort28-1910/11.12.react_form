import React, { Component } from 'react'

export class LoginForm extends Component {
    render() {
        return (
            <div className="login" style={{ marginTop: '150px' }}>
                <form className="login-form" style={loginform}>
                    <h3 className="text-center">Sign In</h3>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email address</label>
                        <input type="email" className="form-control" id="useremail" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    <p className="forgot-password text-right">Forgot<a href=" "> password</a></p>
                </form>
            </div>

        )
    }
}

const loginform = {
    width: '450px',
    margin: 'auto',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    background: 'white',
    padding: '40px 55px 45px 55px',
    borderRadius: '15px',


}

export default LoginForm
