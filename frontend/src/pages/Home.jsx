import React from 'react'

const Home = () => {
  return (
   <React.Fragment>
{/* <!-- Hero Section --> */}
<section className="bg-gradient-to-r from-blue-500 to-white text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl font-bold text-black">Simplify Your Hiring Process or Job Search!</h1>
    <p className="mt-4 text-xl text-black">Easily upload your resume or find top candidates.</p>
    <div className="mt-6 flex justify-center">
      <a href="/job-seeker" className="bg-white text-blue-500 px-4 py-2 rounded-md mr-4">For Job Seekers</a>
      <a href="/hr" className="bg-white text-red-500 px-4 py-2 rounded-md">For HR</a>
    </div>
  </div>
</section>

{/* <!-- How It Works --> */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center">How It Works</h2>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      <div className="text-center">
        <svg className="mx-auto h-12 w-12 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7 7 7-7" /></svg>
        <h3 className="text-lg font-semibold">For Job Seekers</h3>
        <p className="mt-2">Fill out the form, upload your resume, and wait for HRs to contact you.</p>
      </div>
      <div className="text-center">
        <svg className="mx-auto h-12 w-12 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l-7 7 7 7zM15 6l7 7-7 7" /></svg>
        <h3 className="text-lg font-semibold">For HRs</h3>
        <p className="mt-2">Sign up to view resumes and contact potential candidates directly.</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- CTA Section --> */}
<section className="bg-blue-600 text-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
    <p className="mt-4 mb-5 text-xl">Join us today to streamline your job search or recruitment process.</p>
    <a href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-md mt-4">Sign Up Now</a>
  </div>
</section>

{/* <!-- Contact Information --> */}
<section className="py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold">Contact Us</h2>
    <p className="mt-4 text-xl">Have questions or need assistance? Reach out to us!</p>
    <p className="mt-2">Email: support@example.com</p>
    <p className="mt-2">Phone: (123) 456-7890</p>
  </div>
</section>

{/* <!-- Footer --> */}
<footer className="bg-gray-800 text-white py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between">
      <div>
        <h3 className="text-lg font-bold">Recruitment Platform</h3>
        <ul className="mt-4">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/terms-of-service" className="hover:underline">Terms of Service</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-bold">Follow Us</h3>
        <ul className="mt-4 flex space-x-4">
          {/* <!-- Add social media icons --> */}
        </ul>
      </div>
    </div>
  </div>
</footer>


   </React.Fragment>
  )
}

export default Home