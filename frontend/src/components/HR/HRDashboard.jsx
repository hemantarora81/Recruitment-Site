import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import DashboardOverview from './HR Dashboard/DashboardOverview';
import SearchFilterSort from './HR Dashboard/SearchFilterSort';
import CandidateList from './HR Dashboard/CandidateList';
import axios from 'axios'
const HRDashboard = () => {
  const navigate = useNavigate()
  const [candidatesData,setCandidatesData] = useState([])
 // console.log(candidatesData,"candidatesData")
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      navigate('/');
    }
  }, []); 
  useEffect(()=>{
    fetchCandidates()
  },[])
  const fetchCandidates = async() =>{
    try {
      const candidates = await axios.get(`/jobseekersInfo`);
      if(candidates.data.success){
        setCandidatesData(candidates.data.jobSeekers)
      }
    } catch (error) {
      console.error(error);
    }
  }
 
  return (
    <div className="container min-h-screen bg-gray-100 p-2">
      <DashboardOverview />
      <SearchFilterSort />
      <CandidateList candidatesData={candidatesData.length>0?candidatesData:[]}/>
    </div>
  );
};

export default HRDashboard;
