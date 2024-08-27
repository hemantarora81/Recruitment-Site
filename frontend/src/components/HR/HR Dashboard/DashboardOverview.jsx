import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Total Candidates</h3>
          <p className="text-2xl font-bold text-indigo-600">150</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Recently Added</h3>
          <p className="text-2xl font-bold text-indigo-600">10</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-medium text-gray-700">Pending Reviews</h3>
          <p className="text-2xl font-bold text-indigo-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
