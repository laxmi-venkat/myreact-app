import React, { useState } from 'react';
import JobCard from '../Jobs/JobCard';
import FilterBar from '../Jobs/FilterBar';
import SearchBar from '../Jobs/SearchBar';
export default function SalesAndMarketing(){
    const [search,setSearch] = useState("");
    const [filters
    ,setFilters] = useState({experience:"",jobType:"",location:""})
   const jobs=[
    {
  title: "Digital Marketing Manger", company: "Thagam Capital", location: "chennai", experience: "0-2", jobType: "Full Time", salary: "4-6", posted: "2 days ago" },
    { title: "Sales Executive", company: "Superchat", location: "Hyderabad", experience: "2-5", jobType: "Full Time", salary: "8-12", posted: "3 days ago" },
    { title: "Social media manager", company: "Code Vidhya", location: "Hyderabad", experience: "3+", jobType: "Full Time", salary: "12-18", posted: "6 days ago" },
    { title: "Business Development", company: "Super chat", location: "Remote", experience: "2-5", jobType: "Full Time", salary: "8-15", posted: "1 week ago" },
    { title: "Digiat marketing intern", company: "Bioheaven 360", location: "Mumbai", experience: "intern", jobType: "intern", salary: "10-15", posted: "4 days ago" },
   
  ];
 const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchesExperience = filters.experience ? job.experience === filters.experience : true;
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location === filters.location : true;
    return matchesSearch && matchesExperience && matchesJobType && matchesLocation;
  });
 
    return(
        <div className="container-fluid bg-light py-4" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center">
        {/* Sidebar */}
        <div className="col-lg-3">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>
        {/* Job Listings Area */}
        <div className="col-lg-7 col-md-10">
          <h2 className="mb-4" style={{ fontWeight: 700 }}>Sales Marketing Jobs
            </h2>
          <SearchBar search={search} setSearch={setSearch} />
           <div>
            {filteredJobs.map((job, idx) => (
              <JobCard key={idx} job={job} />   // Correct usage!
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-muted py-5 text-center">No jobs found.</div>
            )}
          </div>
        </div>
      </div>
     

        </div>
    )
}