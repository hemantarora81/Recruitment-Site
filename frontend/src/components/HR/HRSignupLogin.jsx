import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import './HRLogin.css';
import Alert from '../../Common/Alerts/Alert';

const HRSignupLogin = () => {
  const navigate = useNavigate()
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading,setisLoading] = useState(false)
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    const url = isLogin  ? `${process.env.REACT_APP_BASE_URL}/login`  : `${process.env.REACT_APP_BASE_URL}/register`;
  
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
    setisLoading(true);
// console.log(data,"")
   await axios({
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
          setisLoading(false);
          setAlertMessage(response.data.msg?response.data.msg:"Login Successfully");
          window.scrollTo(0,0)
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("user_id",response.data.user._id);
          localStorage.setItem("isLogin",true);
          setAlertType("success");
          setData({
            fullName: '',
            mobileNumber: '',
            email: '',
            password: ''
          });
           navigate('/hr-dashboard') 
        }
      })
      .catch((error) => {
        console.log(error, "error");
        setAlertMessage(error.response.data.msg);
        setAlertType("error");
        setisLoading(false);
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
          {isLoading?
         <button className="flex justify-center gap-1 text-sm w-full place-items-center  rounded-lg p-6 overflow-x-hidden">
         <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
           width="18" height="18">
           <path
             d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
             stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
           <path
             d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
             stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-white">
           </path>
         </svg>
         {isLogin? "Loading..." : "Creating Account..."}
       </button>
        :
          <button  onClick={(e)=>handleSubmit(e)}>{isLogin ? 'Login' : 'Sign up'}</button>
}
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
