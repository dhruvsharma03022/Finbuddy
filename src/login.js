import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './style.css';


function Login() {

  const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validatePassword = (password) => {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    };

    const goToHtmlPage = () => {
        navigate('/home'); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.length < 5) {
            setError("Username must be at least 5 characters long.");
            return;
        }

        if (!validatePassword(password)) {
            setError("Password must be at least 8 characters, include 1 capital letter, 1 number, and 1 special character.");
            return;
        }

        setError("");
        goToHtmlPage(); 
    };

    return (
        <div className="login-page">
            <div className="auth-box">
                <img src="https://cdn-icons-png.flaticon.com/512/8345/8345328.png" alt="Logo" className="logo" />
                <h2 className="title">Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="options">
                        <label><input type="checkbox" className="checkbox" /> Remember Me</label>
                        <a href="#" className="link">Forgot Password?</a>
                    </div>
                    <button type="submit" className="btn">Log in</button>
                    <p className="toggle-text">Don't have an account? <a href="#" className="toggle-btn">Sign Up</a></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
