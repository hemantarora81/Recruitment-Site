import React from 'react';
import './JobSeeker.css';

const JobSeekerForm = () => {
  const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const { fullname, email, mobile, qualification, resume } = form;

    if (!fullname.value.trim() || !email.value.trim() || !mobile.value.trim() || !qualification.value.trim() || !resume.files.length) {
      alert('All fields are required!');
      return;
    }
    alert('Form submitted successfully!');
  };

  return (
    <section className="job-form shadow-blue-200 shadow-md p-5 rounded-md">
      <header className="text-lg font-semibold text-center mb-5">Registration Form</header>
      <form className="form space-y-0" onSubmit={validateForm}>
        <div className="input-box">
          <label className="block mb-1">Full Name<span className='text-red-600'>*</span></label>
          <input required placeholder="Enter full name" type="text" className="w-full p-2 border border-gray-300 rounded-md"/>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
          <div className="input-box">
            <label className="block mb-1">Phone Number<span className='text-red-600'>*</span></label>
            <input required placeholder="Enter phone number" type="tel" className="w-full p-2 border border-gray-300 rounded-md"/>
          </div>
          <div className="input-box">
            <label className="block mb-1">Email<span className='text-red-600'>*</span></label>
            <input required placeholder="Enter Email" type="email" className="w-full p-2 border border-gray-300 rounded-md"/>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 ">
        <div className="input-box">
          <label className="block mb-1">Highest Qualification<span className='text-red-600'>*</span></label>
          <select required className="w-full p-2 border border-gray-300 rounded-md">
            <option hidden>Select</option>
            <option>Master's</option>
            <option>Bachelor's</option>
            <option>12th</option>
            <option>10th</option>
            <option>None</option>
          </select>
        </div>
        <div className="input-box">
          <label className="block mb-1">Experience Level<span className='text-red-600'>*</span></label>
          <select required className="w-full p-2 border border-gray-300 rounded-md">
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
        <div className="grid w-full max-w-xs items-center gap-1.5 text-left">
            <label className=" text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >Upload Resume<span className='text-red-600'>*</span></label>
            <input className="flex w-full rounded-md border border-gray-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-black file:text-white file:text-base file:font-normal"
              type="file"
              id="picture"
            />
          </div>
        <div className="input-box flex items-center gap-2 ">
          <label className="block mb-1">Gender<span className='text-red-600'>*</span></label>
          {/* <div className="flex gap-4 w-full gender-box">
            <div className="flex items-center">
              <input name="gender" id="check-male" type="radio" className="mr-2"/>
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="flex items-center">
              <input name="gender" id="check-female" type="radio" className="mr-2"/>
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="flex items-center">
              <input name="gender" id="check-other" type="radio" className="mr-2"/>
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div> */}
            <select required className="w-full p-2 border border-gray-300 rounded-md w-1/3">
            <option hidden>Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <button className="w-full py-2 text-white bg-gradient-to-r from-blue-500 to-blue-700 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
          Submit
        </button>
      </form>
    </section>
  );
};

export default JobSeekerForm;
