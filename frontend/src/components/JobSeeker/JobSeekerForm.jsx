// import React, { useState } from "react";
// import axios from "axios";
// import "./JobSeeker.css";
// import Alert from "../../Common/Alerts/Alert";
// const JobSeekerForm = () => {
//   const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("");
//   const [postLoading, setPostLoading] = useState(false);
//   const [validationErrors, setValidationErrors] = useState({});
//   const [data, setData] = useState({
//     fullName: "",
//     email: "",
//     mobile: "",
//     qualification: "",
//     experience: "",
//     designation: "",
//     gender: "",
//     resume: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let errors = {};
//     if (name === 'mobile') {
//       if (value.length > 10) return; 
//   }
//   if(value === 'mobile'){
//     if(value.length<10){
// errors.mobile = "Please Enter valid mobile number";
//   setValidationErrors(errors);
//   }
// }
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setData({
//       ...data,
//       resume: e.target.files[0],
//     });
//   };

//   const validateForm = (e) => {
//     e.preventDefault();
//     let errors = {};

//         // Check for empty fields and add error messages
//         if (!data.fullName) errors.fullName = "Name is Required";
//         if (!data.email) errors.email = "Email is Required";
//         if (!data.mobile) errors.mobile = "Mobile number is Required";
//         if (!data.qualification) errors.qualification = "Qualification is Required";
//         if (!data.designation) errors.designation = "Designation is Required";
//         if (!data.resume) errors.resume = "Resume is Required";
//         if (!data.gender) errors.gender = "Gender is Required";
//         if (!data.experience) errors.experience = "Experience is Required";

//         // If there are errors, set them in state and don't proceed
//         if (Object.keys(errors).length > 0) {
//             setValidationErrors(errors);
//             setAlertMessage("Please fill in all the fields.");
//             setAlertType("error");
//             setPostLoading(false);
//             return;
//         }
//     const formData = new FormData();
//     formData.append("fullName", data?.fullName);
//     formData.append("email", data?.email);
//     formData.append("mobile", data?.mobile);
//     formData.append("qualification", data?.qualification);
//     formData.append("designation", data?.designation);
//     formData.append("resume", data?.resume);
//     formData.append("gender", data?.gender);
//     formData.append("experience", data?.experience);
//     setPostLoading(true)
//     // console.log(formData, "formData");
//     axios({
//       method: "POST",
//       url: `${process.env.REACT_APP_BASE_URL}/jobseeker`,
//       data: formData,
//       headers: {
//         "Content-Type": "multipart/form-data", // Ensure correct content type
//       },
//     })
//       .then((response) => {
//         // console.log(response, "response");
//         if (response.status === 200) {
//           setAlertMessage(response.data.msg);
//           setAlertType("success");
//         }
//         setPostLoading(false);
//         window.scrollTo(0,0)
//       })
//       .catch((error) => {
//         console.log(error, "error");
//         setAlertMessage("Error while creating Account!");
//         setAlertType("error");
//         setPostLoading(false); 
//         // console.error('Error:', error);
//       });
//   };
//   return (
//     <section className="job-form shadow-blue-200 shadow-md p-5 rounded-md">
//       {alertMessage && <Alert message={alertMessage} type={alertType} />}
//       <header className="text-lg font-semibold text-center mb-5">
//         Registration Form
//       </header>
//       <div className="form space-y-0">
//         <div className="input-box">
//           <label className="block mb-1">
//             Full Name<span className="text-red-600">*</span>
//           </label>
//           <input
//             name="fullName"
//             value={data.fullName || ""}
//             onChange={handleInputChange}
//             placeholder="Enter full name"
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-md"
//           />
//            {validationErrors.fullName && <span className=" text-red-600 font-serif my-2">{validationErrors.fullName}</span>}
//         </div>
//         <div className="grid md:grid-cols-2 gap-4 ">
//           <div className="input-box">
//             <label className="block mb-1">
//               Phone Number<span className="text-red-600">*</span>
//             </label>
//             <input
//               name="mobile"
//               value={data.mobile || ""}
//               onChange={handleInputChange}
//               placeholder="Enter phone number"
//               type="tel"
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             {validationErrors.mobile && <span className=" text-red-600 font-serif my-2">{validationErrors.mobile}</span>}
//           </div>
//           <div className="input-box">
//             <label className="block mb-1">
//               Email<span className="text-red-600">*</span>
//             </label>
//             <input
//               name="email"
//               value={data.email || ""}
//               onChange={handleInputChange}
//               placeholder="Enter Email"
//               type="email"
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//              {validationErrors.email && <span className=" text-red-600 font-serif my-2">{validationErrors.email}</span>}
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 gap-4 mb-2">
//           <div className="input-box">
//             <label className="block mb-1">
//               Highest Qualification<span className="text-red-600">*</span>
//             </label>
//             <select
//               required
//               name="qualification"
//               value={data.qualification || ""}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option hidden>Select</option>
//               <option>Master's</option>
//               <option>Bachelor's</option>
//               <option>12th</option>
//               <option>10th</option>
//               <option>None</option>
//             </select>
//             {validationErrors.qualification && <span className=" text-red-600 font-serif my-2">{validationErrors.qualification}</span>}
//           </div>
//           <div className="input-box">
//             <label className="block mb-1">
//               Experience Level<span className="text-red-600">*</span>
//             </label>
//             <select
//               required
//               name="experience"
//               value={data.experience || ""}
//               onChange={handleInputChange}
//               className="w-full p-2 border border-gray-300 rounded-md"
//             >
//               <option hidden>Select</option>
//               <option>Fresher</option>
//               <option>0 - 1</option>
//               <option>1 - 2</option>
//               <option>2 - 3</option>
//               <option>3 - 4</option>
//               <option>5+</option>
//             </select>
//             {validationErrors.experience && <span className=" text-red-600 font-serif my-2">{validationErrors.experience}</span>}
//           </div>
//         </div>
//         <div className="grid md:grid-cols-2 gap-4 mb-2">
//           <div className="input-box">
//             <label className="block mb-1">
//               Desired Designation<span className="text-red-600">*</span>
//             </label>
//             <input
//               required
//               name="designation"
//               value={data.designation || ""}
//               onChange={handleInputChange}
//               placeholder="Enter Designation"
//               type="text"
//               className="w-full p-2 border border-gray-300 rounded-md"
//             />
//             {validationErrors.designation && <span className=" text-red-600 font-serif my-2">{validationErrors.designation}</span>}
//           </div>
//           <div className="input-box ">
//             <label className="block mb-1">
//               Gender<span className="text-red-600">*</span>
//             </label>
//             <select
//               required
//               name="gender"
//               value={data.gender || ""}
//               onChange={handleInputChange}
//               className=" p-2 border border-gray-300 rounded-md w-full"
//             >
//               <option hidden>Select</option>
//               <option>Male</option>
//               <option>Female</option>
//               <option>Prefer not to say</option>
//             </select>
//             {validationErrors.gender && <span className=" text-red-600 font-serif my-2">{validationErrors.gender}</span>}
//           </div>
//         </div>
//         <div className="grid w-full max-w-xs items-center gap-1.5 text-left mb-2">
//           <label className=" text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs font-medium">
//             Upload Resume<span className="text-red-600">*</span>
//           </label>
//           <input
//             name="resume"
//             accept="application/pdf"
//             onChange={handleFileChange}
//             className="flex w-full rounded-md border border-gray-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-black file:text-white file:text-base file:font-normal"
//             type="file"
//             id="picture"
//           />
//            {validationErrors.resume && <span className=" text-red-600 font-serif my-2">{validationErrors.resume}</span>}
//         </div>
//         {postLoading?
//            <button className="flex justify-center gap-1 text-sm w-full place-items-center  rounded-lg p-6 overflow-x-hidden">
//            <svg className="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
//              width="18" height="18">
//              <path
//                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
//                stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
//              <path
//                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
//                stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" className="text-white">
//              </path>
//            </svg>
//            Submiting Form...
//          </button>:
//         <button
//           className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
//           onClick={(e) => validateForm(e)}
//         >
//           Submit
//         </button>
//         }
     
//       </div>
//     </section>
//   );
// };

// export default JobSeekerForm;
import React, { useRef, useState } from "react";
import axios from "axios";
import "./JobSeeker.css";
import Alert from "../../Common/Alerts/Alert";

const JobSeekerForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [postLoading, setPostLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const resumeRef = useRef(null);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    qualification: "",
    experience: "",
    designation: "",
    gender: "",
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...validationErrors };

    // Validate mobile number to have a maximum of 10 digits
    if (name === "mobile") {
      if (value.length > 10) return; // Prevent further input if more than 10 digits
    }

    // Remove the validation error for the field being updated
    if (errors[name]) {
      delete errors[name];
    }

    setData({
      ...data,
      [name]: value,
    });
    setValidationErrors(errors);
  };

  const handleFileChange = (e) => {
    const errors = { ...validationErrors };
    delete errors.resume;

    setData({
      ...data,
      resume: e.target.files[0],
    });

    setValidationErrors(errors);
  };

  const validateForm = (e) => {
    e.preventDefault();
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check for empty fields and add error messages
    if (!data.fullName) errors.fullName = "Name is Required";
    if (!data.email) errors.email = "Email is Required";
    else if (!emailRegex.test(data.email)) errors.email = "Invalid Email Format";
    if (!data.mobile) errors.mobile = "Mobile number is Required";
    else if (data.mobile.length < 10) errors.mobile = "Mobile number must be 10 digits";
    if (!data.qualification) errors.qualification = "Qualification is Required";
    if (!data.designation) errors.designation = "Designation is Required";
    if (!data.resume) errors.resume = "Resume is Required";
    if (!data.gender) errors.gender = "Gender is Required";
    if (!data.experience) errors.experience = "Experience is Required";

    // If there are errors, set them in state and don't proceed
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setAlertMessage("Please fill in all the fields.");
      setAlertType("error");
      return;
    }

    const formData = new FormData();
    formData.append("fullName", data?.fullName);
    formData.append("email", data?.email);
    formData.append("mobile", data?.mobile);
    formData.append("qualification", data?.qualification);
    formData.append("designation", data?.designation);
    formData.append("resume", data?.resume);
    formData.append("gender", data?.gender);
    formData.append("experience", data?.experience);

    setPostLoading(true);

    axios({
      method: "POST",
      url: `/jobseeker`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setAlertMessage(response.data.msg);
          setAlertType("success");
          setData({
              fullName: "",
              email: "",
              mobile: "",
              qualification: "",
              experience: "",
              designation: "",
              gender: "",
              resume: null,
          })
          if(resumeRef?.current){
            resumeRef.current.value=null;
          }
        }
        setPostLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(error, "error");
        setAlertMessage("Error while creating Account!");
        setAlertType("error");
        setPostLoading(false);
      });
  };

  return (
    <section className="job-form shadow-blue-200 shadow-md px-5 py-2 rounded-md">
     
      <header className="text-lg font-semibold text-center mb-5">
        Registration Form
      </header>
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      <div className="form space-y-0">
        <div className="input-box">
          <label className="block mb-1">
            Full Name<span className="text-red-600">*</span>
          </label>
          <input
            name="fullName"
            value={data.fullName || ""}
            onChange={handleInputChange}
            placeholder="Enter full name"
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {validationErrors.fullName && (
            <span className="text-red-600 font-serif my-2">
              {validationErrors.fullName}
            </span>
          )}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="input-box">
            <label className="block mb-1">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              name="mobile"
              value={data.mobile || ""}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {validationErrors.mobile && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.mobile}
              </span>
            )}
          </div>
          <div className="input-box">
            <label className="block mb-1">
              Email<span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              value={data.email || ""}
              onChange={handleInputChange}
              placeholder="Enter Email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {validationErrors.email && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.email}
              </span>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <div className="input-box">
            <label className="block mb-1">
              Highest Qualification<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="qualification"
              value={data.qualification || ""}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option hidden>Select</option>
              <option>Master's</option>
              <option>Bachelor's</option>
              <option>12th</option>
              <option>10th</option>
              <option>None</option>
            </select>
            {validationErrors.qualification && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.qualification}
              </span>
            )}
          </div>
          <div className="input-box">
            <label className="block mb-1">
              Experience Level<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="experience"
              value={data.experience || ""}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option hidden>Select</option>
              <option>Fresher</option>
              <option>0 - 1</option>
              <option>1 - 2</option>
              <option>2 - 3</option>
              <option>3 - 4</option>
              <option>5+</option>
            </select>
            {validationErrors.experience && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.experience}
              </span>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <div className="input-box">
            <label className="block mb-1">
              Desired Designation<span className="text-red-600">*</span>
            </label>
            <input
              required
              name="designation"
              value={data.designation || ""}
              onChange={handleInputChange}
              placeholder="Enter Designation"
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {validationErrors.designation && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.designation}
              </span>
            )}
          </div>
          <div className="input-box">
            <label className="block mb-1">
              Gender<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="gender"
              value={data.gender || ""}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded-md w-full"
            >
              <option hidden>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            {validationErrors.gender && (
              <span className="text-red-600 font-serif my-2">
                {validationErrors.gender}
              </span>
            )}
          </div>
        </div>
        <div className="input-box">
          <label className="block mb-1">
            Upload Resume<span className="text-red-600">*</span>
          </label>
          <input
            required
            style={{paddingLeft:0,height:27}}
            className="flex w-full rounded-md border  border-gray-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-black file:text-white file:text-base file:font-normal"
            name="resume"
            type="file"
            ref={resumeRef}
            onChange={handleFileChange}
            accept="application/pdf"
          />
          {validationErrors.resume && (
            <span className="text-red-600 font-serif my-2">
              {validationErrors.resume}
            </span>
          )}
        </div>
        <button
  onClick={validateForm}
  disabled={postLoading}
  className="w-full p-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex justify-center items-center"
>
  {postLoading ? (
    <>
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
      Submitting Form...
    </>
  ) : (
    "Submit"
  )}
</button>

      </div>
    </section>
  );
};

export default JobSeekerForm;
