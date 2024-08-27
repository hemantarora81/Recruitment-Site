import React from 'react';
import DashboardOverview from './HR Dashboard/DashboardOverview';
import SearchFilterSort from './HR Dashboard/SearchFilterSort';
import CandidateList from './HR Dashboard/CandidateList';

const HRDashboard = () => {
  return (
    <div className="container min-h-screen bg-gray-100 p-2">
      <DashboardOverview />
      <SearchFilterSort />
      <CandidateList />
    </div>
  );
};

export default HRDashboard;
