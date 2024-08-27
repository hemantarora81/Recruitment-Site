import React, { useState } from 'react';
import './HRLogin.css'
const HRSignupLogin = () => {
  const [isLogin,setIsLogin] = useState(false);
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const validateForm = (event) => {
    event.preventDefault();

    const form = event.target;
    let isValid = true;
    const newErrors = { firstname: '', lastname: '', email: '', password: '' };

    // Check for Required Firstname
    if (form.firstname.value.trim() === "") {
      newErrors.firstname = "First name is required!";
      isValid = false;
    }

    // Check for Required Lastname
    if (form.lastname.value.trim() === "") {
      newErrors.lastname = "Last name is required!";
      isValid = false;
    }

    // Check for Required Email
    if (form.email.value.trim() === "") {
      newErrors.email = "Email is required!";
      isValid = false;
    } else if (!validEmail(form.email.value.trim())) {
      newErrors.email = "Email is not valid!";
      isValid = false;
    }

    // Check for Required Password
    if (form.password.value.trim() === "") {
      newErrors.password = "Password is required!";
      isValid = false;
    } else if (form.password.value.length < 9) {
      newErrors.password = "Password must be at least 9 characters!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Set for Valid Email Value
  const validEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  return (
    <div className='container-custom p-3'>
              <div className="form-box ">
                {isLogin?
              <form className="form">
                  <span className="title">Sign up</span>
                  <span className="subtitle">Create a free account with your email.</span>
                  <div className="form-container">
                    <input type="text" className="input" placeholder="Full Name"/>
                    <input type="number" className="input" placeholder="Mobile Number"/>
                    <input type="email" className="input" placeholder="Email"/>
                    <input type="password" className="input" placeholder="Password"/>
                  </div>
                  <button  onClick={()=>(alert("Signup Clicked"))}>Sign up</button>
              </form>
              :
              <form className="form">
                  <span className="title">Login</span>
                  <div className="form-container">
                    <input type="email" className="input" placeholder="Email"/>
                    <input type="password" className="input" placeholder="Password"/>
                  </div>
                  <button onClick={()=>(alert("Login Clicked"))}>Login</button>
              </form>
                }
              <div className="form-section">
                {isLogin?
                <p >Don't have an account? <b onClick={()=>setIsLogin(!isLogin)} className='cursor-pointer'>Sign Up</b> </p>
                  :
                  <p>Have an account? <b onClick={()=>setIsLogin(!isLogin)} className='cursor-pointer'>Log in</b> </p>

                }
              </div>
              </div>

    </div>
  )
}

export default HRSignupLogin;
