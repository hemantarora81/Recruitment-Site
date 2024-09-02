import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import DashboardOverview from './HR Dashboard/DashboardOverview';
import SearchFilterSort from './HR Dashboard/SearchFilterSort';
import CandidateList from './HR Dashboard/CandidateList';

const HRDashboard = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/');
    }
  }, []); 
  return (
    <div className="container min-h-screen bg-gray-100 p-2">
      <DashboardOverview />
      <SearchFilterSort />
      <CandidateList />
    </div>
  );
};

export default HRDashboard;
