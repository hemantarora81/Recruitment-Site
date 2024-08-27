import React from 'react';

const candidates = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    qualification: 'B.Tech',
    experience: '3 Years',
    resumeUrl: '#',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    qualification: 'MCA',
    experience: '5 Years',
    resumeUrl: '#',
  },
  // Add more candidates as needed
];

const CandidateList = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Candidates</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500">Qualification</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500">Experience</th>
              <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-500">Resume</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id}>
                <td className="px-6 py-4 border-b text-sm text-gray-700">{candidate.name}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">{candidate.email}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">{candidate.qualification}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">{candidate.experience}</td>
                <td className="px-6 py-4 border-b text-sm text-gray-700">
                  <a
                    href={candidate.resumeUrl}
                    download
                    className="text-indigo-600 hover:underline"
                  >
                    Download Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateList;
