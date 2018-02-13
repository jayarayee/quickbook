import React, { Component } from 'react'
import '../css/Login.css'
import logo from "../res/logo.png";
import form from 'react-bootstrap';

class Login extends Component{
    render(){
        return(
            <div className="fill-page dark-blue-background">
                <div className="login-container">
                    <div className="login-header"><img src={logo} alt="bluePrint" height="30"/></div>
                    <form id="form" className="login-form">
                
                        <div className="form-group">
                            <label className="login-label" htmlFor="username"> Username: </label>
                            <input id="username" type="text" className="login-text form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="login-label" htmlFor="username"> Password: </label>
                            <input id="username" type="text" className="login-text form-control" />
                        </div>
                        
                        <hr/>
                        <button type="submit" className="login-btn btn">
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Login