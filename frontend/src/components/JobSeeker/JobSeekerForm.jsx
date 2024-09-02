import React, { useState } from "react";
import axios from "axios";
import "./JobSeeker.css";
import Alert from "../../Common/Alerts/Alert";
const JobSeekerForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
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
  console.log(process.env.REACT_APP_BASE_URL,"process.env.REACT_APP_BASE_URL")

  // console.log(process.env.REACT_APP_BASE_URL,"process.env.REACT_APP_BASE_URL")
  // console.log(formData,"formData")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setData({
      ...data,
      resume: e.target.files[0],
    });
  };

  //   const validateForm = async (event) => {
  //     event.preventDefault();
  //     const { fullName, email, mobile, qualification, resume } = data;

  //     if (!fullName || !email || !mobile || !qualification || !resume) {
  //       alert("All fields are required!");
  //       return;
  //     }

  //     const formData = new FormData();
  //     Object.keys(data).forEach((key) => {
  //       data.append(key, data[key]);
  //     });
  // console.log(data,"Append")
  //     // Logging FormData contents
  //     for (let pair of data.entries()) {
  //         console.log(`${pair[0]}: ${pair[1]}`);
  //     }

  //     try {
  //       const response = await axios.post(
  //         "/api/jobseeker",
  //         data, // Pass the FormData object here
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );
  //       console.log(response,"response")
  //       setAlertMessage("Form submitted successfully!");
  //       setAlertType("success");
  //     } catch (error) {
  //       setAlertMessage("There was an error submitting the form. Please try again.");
  //       setAlertType("error");
  //       console.error(error);
  //     }
  //   };
  const validateForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullName", data?.fullName);
    formData.append("email", data?.email);
    formData.append("mobile", data?.mobile);
    formData.append("qualification", data?.qualification);
    formData.append("designation", data?.designation);
    formData.append("resume", data?.resume);
    formData.append("gender", data?.gender);
    formData.append("experience", data?.experience);
    // console.log(formData, "formData");
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/jobseeker`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data", // Ensure correct content type
      },
    })
      .then((response) => {
        console.log(response, "response");
        if (response.status === 200) {
          setAlertMessage(response.data.msg);
          setAlertType("success");
        }
        window.scrollTo(0,0)
      })
      .catch((error) => {
        console.log(error, "error");
        setAlertMessage("Error while creating Account!");
        setAlertType("error");
        // console.error('Error:', error);
      });
  };
  return (
    <section className="job-form shadow-blue-200 shadow-md p-5 rounded-md">
      {alertMessage && <Alert message={alertMessage} type={alertType} />}
      <header className="text-lg font-semibold text-center mb-5">
        Registration Form
      </header>
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
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="input-box">
            <label className="block mb-1">
              Phone Number<span className="text-red-600">*</span>
            </label>
            <input
              name="mobile"
              value={data.mobile || ""}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
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
          </div>
          <div className="input-box ">
            <label className="block mb-1">
              Gender<span className="text-red-600">*</span>
            </label>
            <select
              required
              name="gender"
              value={data.gender || ""}
              onChange={handleInputChange}
              className=" p-2 border border-gray-300 rounded-md w-full"
            >
              <option hidden>Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Prefer not to say</option>
            </select>
          </div>
        </div>
        <div className="grid w-full max-w-xs items-center gap-1.5 text-left mb-2">
          <label className=" text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-xs font-medium">
            Upload Resume<span className="text-red-600">*</span>
          </label>
          <input
            name="resume"
            accept="application/pdf"
            onChange={handleFileChange}
            className="flex w-full rounded-md border border-gray-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-black file:text-white file:text-base file:font-normal"
            type="file"
            id="picture"
          />
        </div>

        <button
          className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
          onClick={(e) => validateForm(e)}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default JobSeekerForm;
