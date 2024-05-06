import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
const LandingPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate(); // Access the navigate function

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSignupClick = () => {
        navigate('/signup'); // Navigate to the signup page
    };

    return (
        <div>
            <h1>Welcome to Your MongoDB Admin Panel</h1>
            {isLogin ? <Login /> : <Signup />}
            {/* <p onClick={toggleForm}>
                {isLogin ? 'Don\'t have an account? <button> Sign up here.</button>' : 'Already have an account? Log in here.'}
            </p> */}
            {/* Call handleSignupClick when the "Sign up here" link is clicked */}
        </div>
    );
};

export default LandingPage;
