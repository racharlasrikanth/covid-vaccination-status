import React, { useState, useEffect } from 'react'
import AdminLogo from "./../../assets/admin-logo.svg";

const Login = ({ setUserLoggedStatus }) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // it will execute everytime when we open login page
    useEffect(() => {
        setUserLoggedStatus(false)
    }, [])

    const handleChange = (e, name) => {
        if(name === "username"){
            setUsername(e.target.value)
        }
        if(name === "password"){
            setPassword(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "admin" && password === "admin"){
            setUserLoggedStatus(true);
        }else{
            setUserLoggedStatus(false);
        }
    }

    return (
        <section className='login-container'>
            <div className="login-form">
                <form className="form">
                    <div className="admin-form-logo">
                        <img src={AdminLogo} alt="admin-logo" />
                    </div>
                    <div className="form-control">
                        <input type="text" name="username" id="username" placeholder='Enter your name' value={username} onChange={(e) => handleChange(e, "username")}/>
                    </div>
                    <div className="form-control">
                        <input type="password" name="password" id="password" placeholder='Enter your password' value={password} onChange={(e) => handleChange(e, "password")} />
                    </div>
                    <div className="form-control">
                        <button onClick={handleSubmit} type="button">Login</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;
