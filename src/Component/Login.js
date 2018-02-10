import React, { Component } from 'react'
import '../css/Login.css'

class Login extends Component{
    render(){
        return(
            <div className="fill-page dark-blue-background">
                <div className="login-container">
                    <form id="form" className="login-form">
                        <hr/>
                        <div className="form-group">
                            <label className="login-label"></label>
                            <input id="username" type="text" className="login-text form-control" 
                                onChange={event => this.setState({ username: event.target.value, usernameError: "" })}/>
                        </div>
                        <div className="form-group">
                            <label className="login-label" ></label>
                            <input id="password" type="password" className="login-text form-control" 
                                onChange={event => this.setState({ password: event.target.value, passwordError: "" })}/>
                        </div>
                        <hr/>
                        <button type="submit" className="login-btn btn">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login