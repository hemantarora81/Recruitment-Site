import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Loading from './Common/Loader';
import './App.css'
// Lazy load the components
const Home = React.lazy(() => import('./pages/Home'));
const HRPage = React.lazy(() => import('./pages/HRPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const JobSeekerForm = React.lazy(() => import('./components/JobSeeker/JobSeekerForm'))
const HRSignupLogin = React.lazy(() => import('./components/HR/HRSignupLogin'));
const HRDashboard = React.lazy(() => import('./components/HR/HRDashboard'));
function App() {
  return (
    <Router>
       <Navbar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/candidate-form" element={<JobSeekerForm />} />
          <Route path="/hr" element={<HRPage />} />
          <Route path="/hr-form" element={<HRSignupLogin />} />
          <Route path="/hr-dashboard" element={<HRDashboard/>} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
