// import React, { useState } from 'react';
// import axios from "axios";
// import {useNavigate} from 'react-router-dom'
// import './HRLogin.css';
// import Alert from '../../Common/Alerts/Alert';

// const HRSignupLogin = () => {
//   const navigate = useNavigate()
//   const [alertMessage, setAlertMessage] = useState("");
//   const [isLoading,setisLoading] = useState(false)
//   const [alertType, setAlertType] = useState("");
//   const [isLogin, setIsLogin] = useState(false);
//   const [data, setData] = useState({
//     fullName: '',
//     mobileNumber: '',
//     email: '',
//     password: ''
//   });

//   // Set for Valid Email Value
//   const validEmail = (email) => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email.toLowerCase());
//   };

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     const url = isLogin  ? `${process.env.REACT_APP_BASE_URL}/login`  : `${process.env.REACT_APP_BASE_URL}/register`;
  
//   const formData = isLogin 
//     ? { email: data.email, password: data.password } 
//     : {
//         fullName: data.fullName,
//         mobileNumber: data.mobileNumber,
//         email: data.email,
//         password: data.password,
//       };
//     if (!validEmail(data.email)) {
//       setAlertMessage("Please enter a valid email address.");
//       setAlertType("error");
//       return;
//     }
//     setisLoading(true);
// // console.log(data,"")
//    await axios({
//       method: "POST",
//       url: url,
//       data: formData,
//       headers: {
//         "Content-Type": "application/json", 
//       },
//     })
//       .then((response) => {
//         // console.log(response,"response")
//         if (response.status === 200) {
//           // console.log(response.data.msg,"response.data.msg")
//           setisLoading(false);
//           setAlertMessage(response.data.msg?response.data.msg:"Login Successfully");
//           window.scrollTo(0,0)
//           localStorage.setItem("token",response.data.token);
//           localStorage.setItem("user_id",response.data.user._id);
//           localStorage.setItem("isLogin",true);
//           setAlertType("success");
//           setData({
//             fullName: '',
//             mobileNumber: '',
//             email: '',
//             password: ''
//           });
//            navigate('/hr-dashboard') 
//         }
//       })
//       .catch((error) => {
//         console.log(error, "error");
//         setAlertMessage(error.response.data.msg);
//         setAlertType("error");
//         setisLoading(false);
//       });
//   };
//   return (
//     <div className='container-custom p-3'>
//       <div className="form-box">
//         <div className="form">
//           <span className="title">{isLogin ? 'Login' : 'Sign up'}</span>
//           <span className="subtitle">{!isLogin && 'Create a free account with your email.'}</span>
//          {alertMessage && <Alert message={alertMessage} type={alertType} />}

//           <div className="form-container">
//             {!isLogin && (
//               <>
//                 <input
//                   type="text"
//                   className="input"
//                   placeholder="Full Name*"
//                   name="fullName"
//                   value={data.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="number"
//                   className="input"
//                   placeholder="Mobile Number"
//                   name="mobileNumber"
//                   value={data.mobileNumber}
//                   onChange={handleChange}
//                   required
//                 />
//               </>
//             )}
//             <input
//               type="email"
//               className="input"
//               placeholder="Email*"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="password"
//               className="input"
//               placeholder="Password*"
//               name="password"
//               value={data.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           {isLoading?
//          <button className="flex justify-center gap-1 text-sm w-full place-items-center  rounded-lg p-6 overflow-x-hidden">
//           <svg
//         className="animate-spin h-5 w-5 text-white mr-3"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//       >
//         <circle
//           className="opacity-25"
//           cx="12"
//           cy="12"
//           r="10"
//           stroke="currentColor"
//           strokeWidth="4"
//         ></circle>
//         <path
//           className="opacity-75"
//           fill="currentColor"
//           d="M4 12a8 8 0 018-8v8H4z"
//         ></path>
//       </svg>
//          {isLogin? "Loading..." : "Creating Account..."}
//        </button>
//         :
//           <button  onClick={(e)=>handleSubmit(e)}>{isLogin ? 'Login' : 'Sign up'}</button>
// }
//         </div>
//         <div className="form-section">
//           <p>
//             {isLogin ? "Don't have an account?" : 'Have an account?'}{' '}
//             <b onClick={() => setIsLogin(!isLogin)} className='cursor-pointer'>
//               {isLogin ? 'Sign Up' : 'Log in'}
//             </b>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HRSignupLogin;
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import './HRLogin.css';
import Alert from '../../Common/Alerts/Alert';

const HRSignupLogin = () => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    password: ''
  });

  // Validations
  const validEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };

  const validMobileNumber = (mobileNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobileNumber);
  };

  const validPassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  };
  const isValidFullName = (fullName) => {
    const alphaWithSpacesRegex = /^[A-Za-z\s]+$/;
    return fullName.trim().length > 0 && alphaWithSpacesRegex.test(fullName);
  };
  
  // React.useEffect(() => {
  //   if (isLogin) {
  //     setAlertMessage('');
  //     setAlertType('');
  //   }
  // }, [isLogin]);

  // Input Values
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNumber") {
      if (value.length > 10) return; // Prevent further input if more than 10 digits
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const url = isLogin  ? `/api/login`  : `/api/register`;

    const formData = isLogin 
      ? { email: data.email, password: data.password } 
      : {
          fullName: data.fullName,
          mobileNumber: data.mobileNumber,
          email: data.email,
          password: data.password,
        };

    // Validation Checks
    if (!validEmail(data.email)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertType("error");
      return;
    }

    if (!isLogin) {
      if (!isValidFullName(data.fullName) ) {
        setAlertMessage("Please enter a valid full name.");
        setAlertType("error");
        return;
      }
      
      if (!validMobileNumber(data.mobileNumber)) {
        setAlertMessage("Please enter a valid 10-digit mobile number.");
        setAlertType("error");
        return;
      }

      if (!validPassword(data.password)) {
        setAlertMessage("Password must be at least 8 characters long, and include one uppercase letter, one lowercase letter, one number, and one special character.");
        setAlertType("error");
        return;
      }
    }

    setisLoading(true);
    setAlertMessage('');
    try {
      const response = await axios({
        method: "POST",
        url: url,
        data: formData,
        headers: {
          "Content-Type": "application/json", 
        },
      });

      if (response.status === 200) {
        setisLoading(false);
        setAlertMessage(response.data.msg || (isLogin ? "Login Successfully" : "Account Created Successfully"));
        setAlertType("success");
        if(isLogin){
          localStorage.setItem("token", response?.data?.token);
          localStorage.setItem("user_id", response?.data?.user._id);
          localStorage.setItem("isLogin", true);
        }

        setData({
          fullName: '',
          mobileNumber: '',
          email: '',
          password: ''
        });
        if(isLogin){

          navigate('/hr-dashboard');
        }else{
          setIsLogin(true);
          setAlertMessage('Please Login with credentials');
        }
      }
    } catch (error) {
      setAlertMessage(error.response?.data?.msg || "Something went wrong, please try again.");
      setAlertType("error");
      setisLoading(false);
    }
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
                  placeholder="Mobile Number*"
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

          {isLoading ? (
            <button className="flex justify-center gap-1 text-sm w-full place-items-center bg-blue-500 text-white rounded-lg p-2">
              <svg
                className="animate-spin h-5 w-5 text-white mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              {isLogin ? "Loading..." : "Creating Account..."}
            </button>
          ) : (
            <button 
              onClick={(e) => handleSubmit(e)}
              className="w-full p-2 mt-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
            >
              {isLogin ? 'Login' : 'Sign up'}
            </button>
          )}
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
