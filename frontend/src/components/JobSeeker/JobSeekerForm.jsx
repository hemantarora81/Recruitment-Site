import React from 'react';
import './JobSeeker.css'
const JobSeekerForm = () => {
  const validateForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const { fullname, email, mobile, qualification, resume } = form;

    if (!fullname.value.trim() || !email.value.trim() || !mobile.value.trim() || !qualification.value.trim() || !resume.files.length) {
      alert('All fields are required!');
      return;
    }
    // Add further form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    /* From Uiverse.io by mi-series */ 
<section class="job-form">
  <header>Registration Form</header>
  <form class="form" action="#">
      <div class="input-box">
          <label>Full Name<span className='text-red-600'>*</span></label>
          <input required="" placeholder="Enter full name" type="text"/>
      </div>
      <div class="column">
          <div class="input-box">
            <label>Phone Number<span className='text-red-600'>*</span></label>
            <input required="" placeholder="Enter phone number" type="telephone"/>
          </div>
          <div class="input-box">
            <label>Birth Date<span className='text-red-600'>*</span></label>
            <input required="" placeholder="Enter birth date" type="date"/>
          </div>
      </div>
      <div class="gender-box flex-row gap-2">
        <label>Gender<span className='text-red-600'>*</span></label>
        <div class="gender-option">
          <div class="gender">
            <input  name="gender" id="check-male" type="radio"/>
            <label for="check-male">Male</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-female" type="radio"/>
            <label for="check-female">Female</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-other" type="radio"/>
            <label for="check-other">Prefer not to say</label>
          </div>
        </div>
      </div>
      <div class="input-box address">
      <div class="column">
      <div class="select-box">
            <select>
              <option hidden="">Highest Qualification<span className='text-red-600'>*</span></option>
              <option>Master's</option>
              <option>Bachelor's</option>
              <option>12th</option>
              <option>10th</option>
              <option>None</option>
            </select>
          </div>
        <input required="" placeholder="Passout year" type="text"/>
        </div>
      </div>
      <div class="grid w-full max-w-xs items-center gap-1.5 mt-2">
  <label
    class=" text-black peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >Upload Resume<span className='text-red-600'>*</span></label>
  <input
    class="flex w-full rounded-md border border-blue-300 border-input bg-white text-sm text-gray-400 file:border-0 file:bg-blue-600 file:text-white file:text-lg file:font-medium"
    type="file"
    id="picture"
  />
</div>

      <button className='bg-gradient-to-r from-blue-500 to-white text-white' type='submit'>Submit</button>
  </form>
</section>
  );
}

export default JobSeekerForm;
