
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function LandingPage() {
  return (
    <div  className="landing-page">
    <div className='landing-div'>
      <h1>Welcome to PopX</h1>
      <p>Lorem Ipsun dolor sit amet.</p>
      <p>Lorem Ipsun dolor sit amet.</p>
      <Link to="/register">
        <button className="btn" id="create-account-btn">Create Account</button>
      </Link>
      <br/>
      <Link to="/login">
        <button className="btn" id="already-registered-btn" >Already Registered? Login</button>
      </Link>
  
      </div>

    </div>
  );
}

export default LandingPage;
