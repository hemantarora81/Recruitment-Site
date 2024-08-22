import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Loading from './Common/Loader';
// Lazy load the components
const Home = React.lazy(() => import('./pages/Home'));
const JobSeekerPage = React.lazy(() => import('./pages/JobSeekerPage'));
const HRPage = React.lazy(() => import('./pages/HRPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
       <Navbar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-seeker" element={<JobSeekerPage />} />
          <Route path="/hr" element={<HRPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
