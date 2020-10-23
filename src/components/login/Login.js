import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.scss';
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// import LockIcon from '@material-ui/icons/Lock';

function Login() {

    let history = useHistory();
    const [formData, setFormData] = useState({
        userName: '',
        password: '',
        usernameError: false,
        passwordError: false
    })

    const handleChangeUsername = e => {
        setFormData({
            ...formData,
            userName: e.target.value
        })
    };

    const handleChangePassword = e => {
        setFormData({
            ...formData,
            password: e.target.value
        })
    };

    const checkValidations = (event) => {
        let name = event.target.name;

        switch(name) {
            case 'username': 
            if (!formData.userName) {
                setFormData({
                    ...formData,
                    usernameError: true
                })
    
                return
            } else {
                setFormData({
                    ...formData,
                    usernameError: false
                })
            }
            break;

            case 'password': 
            if(!formData.password) {
                setFormData({
                    ...formData,
                    passwordError: true
                })
            } else {
                setFormData({
                    ...formData,
                    passwordError: false
                })
            }

            break;
            default: 
            break;

        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push('/home');
    }

    return (
        <div className="login">
            <div className="login-wrapper">
            <div className="login-form">
                <h3 className="title-text">sign in</h3>
                <form className="form">
                    <div className="input-group">
                        {/* <AccountCircleIcon /> */}
                        <input className="input-field" name="username" type="text" value={formData.userName} onBlur={e => checkValidations(e)} onChange={(e) => handleChangeUsername(e) } placeholder="Username" />
                        {
                            formData.usernameError ? (
                                <span className="error-message">Please enter username</span>
                            ) : ''
                        }
                    </div>
                    <div className="input-group">
                        {/* <LockIcon /> */}
                        <input type="password" name="password" className="input-field" value={formData.password} onBlur={e => checkValidations(e)} onChange={(e) => handleChangePassword(e)} placeholder="Password" />
                        {
                            formData.passwordError ? (
                                <span className="error-message">Please enter password</span>
                            ) : ''
                        }
                    </div>

                        <button onClick={e => handleSubmit(e)} className="login-btn" disabled={!formData.userName || !formData.password}>Login</button>
                </form>
            </div>
        </div>
        </div>
        
    )
}

export default Login
