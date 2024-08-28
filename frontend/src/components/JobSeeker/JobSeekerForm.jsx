import React, { useState } from "react";
import "./JobSeeker.css";
import Alert from "../../Common/Alerts/Alert";
const JobSeekerForm = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    qualification: "",
    experience: "",
    designation: "",
    gender: "",
    resume: null,
  });
console.log(formData,"formData")
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const validateForm = async (event) => {
    event.preventDefault();
    const { fullname, email, mobile, qualification, resume } = formData;

    if (!fullname || !email || !mobile || !qualification || !resume) {
      alert("All fields are required!");
      return;
    }
  console.log(formData,"formDataIn")
  //   const data = new FormData();
  // Object.keys(formData).forEach((key) => {
  //     data.append(key, formData[key]);
  //   });
  //     console.log(data,"FormDataSendData");
    // try {
    //   const response = await axios.post(
    //     "http://localhost:5000/api/jobseekers",
    //     data
    //   );
    //   alert("Form submitted successfully!");
    // } catch (error) {
    //   alert("There was an error submitting the form. Please try again.");
    //   console.error(error);
    // }
  };
  return (
    <section className="job-form shadow-blue-200 shadow-md p-5 rounded-md">
      {alertMessage && (
        <Alert message={alertMessage} type={alertType} />
      )}
      <header className="text-lg font-semibold text-center mb-5">
        Registration Form
      </header>
      <form className="form space-y-0" >
        <div className="input-box">
          <label className="block mb-1">
            Full Name<span className="text-red-600">*</span>
          </label>
          <input
           name="fullname"
           value={formData.fullname || ''}
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
              value={formData.mobile || ''}
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
               value={formData.email || ''}
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
              value={formData.qualification || null}
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
              value={formData.experience || null}
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
              value={formData.designation || ''}
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
            value={formData.gender || null}
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
           onChange={handleFileChange}
            className="flex w-full rounded-md border border-gray-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-black file:text-white file:text-base file:font-normal"
            type="file"
            id="picture"
          />
        </div>
     
        <button type="submit" className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300" onClick={(e) =>validateForm(e) }>
          Submit
        </button>
      </form>
    </section>
  );
};

export default JobSeekerForm;
