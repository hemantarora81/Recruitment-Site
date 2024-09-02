import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './HRLogin.css';
import Alert from '../../Common/Alerts/Alert';

const HRSignupLogin = () => {
  const navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: ''
  });

  // Set for Valid Email Value
  const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isLogin 
    ? `${process.env.REACT_APP_BASE_URL}/login` 
    : `/${process.env.REACT_APP_BASE_URL}/register`;
  
  const formData = isLogin 
    ? { email: data.email, password: data.password } 
    : {
        fullName: data.fullName,
        mobileNumber: data.mobileNumber,
        email: data.email,
        password: data.password,
      };
    if (!validEmail(data.email)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertType("error");
      return;
    }
// console.log(data,"")
    axios({
      method: "POST",
      url: url,
      data: formData,
      headers: {
        "Content-Type": "application/json", 
      },
    })
      .then((response) => {
        // console.log(response,"response")
        if (response.status === 200) {
          // console.log(response.data.msg,"response.data.msg")
          setAlertMessage(response.data.msg?response.data.msg:"Login Successfully");
          window.scrollTo(0,0)
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("user_id",response.data.user._id);
          setAlertType("success");
          setData({
            fullName: '',
            mobileNumber: '',
            email: '',
            password: ''
          });
          setIsLogin(true);
          // setAlertMessage("")
         isLogin ? navigate('/hr-dashboard') : setIsLogin(true)
        }
      })
      .catch((error) => {
        console.log(error, "error");
        setAlertMessage(error.response.data.msg);
        setAlertType("error");
      });
  };
  return (
    <div className='container-custom p-3'>
      <div className="form-box">
        <div className="form">
          <span className="title">{isLogin ? 'Login' : 'Sign up'}</span>
          <span className="subtitle">{!isLogin && 'Create a free account with your email.'}</span>
         {alertMessage && <Alert message={alertMessage} type={alertType} />}

          <div className="form-container">
            {!isLogin && (
              <>
                <input
                  type="text"
                  className="input"
                  placeholder="Full Name*"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  className="input"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={data.mobileNumber}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <input
              type="email"
              className="input"
              placeholder="Email*"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              className="input"
              placeholder="Password*"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
          </div>
          <button onClick={(e)=>handleSubmit(e)}>{isLogin ? 'Login' : 'Sign up'}</button>
        </div>
        <div className="form-section">
          <p>
            {isLogin ? "Don't have an account?" : 'Have an account?'}{' '}
            <b onClick={() => setIsLogin(!isLogin)} className='cursor-pointer'>
              {isLogin ? 'Sign Up' : 'Log in'}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRSignupLogin;
