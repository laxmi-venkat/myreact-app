import React, { useState } from "react";
import SearchBar from "../Jobs/SearchBar";
import FilterBar from "../Jobs/FilterBar";
import JobCard from "../Jobs/JobCard";

export default function HRandAdmin() {
  // HR and Admin jobs data
  const companies = [
    { name: 'Thagam Capital', roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] },
    { name: 'SuperChat', roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] },
    { name: 'Irasus', roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] },
    { name: 'CodeVidhya', roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] },
    { name: 'BioHeaven360', roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] },
  ];

  // Convert companies -> jobs
const jobs = [];
companies.forEach(company => {
  company.roles.forEach(role => {
    jobs.push({
      title: role,
      company: company.name,
      location: "", // add location if needed
      experience: "", // add experience if needed
      jobType: "",
      salary: "",
      posted: "",
    });
  });
});


  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ experience: "", jobType: "", location: "" });

  // ERROR WAS HERE! Change "job.filter" to "jobs.filter"
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase())
      || job.company.toLowerCase().includes(search.toLowerCase());
    const matchesExperience = filters.experience ? job.experience === filters.experience : true;
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location === filters.location : true;
    return matchesSearch && matchesExperience && matchesJobType && matchesLocation;
  });

  return (
     <div className="container-fluid bg-light py-4" style={{ minHeight: "100vh" }}>
      <div className="row justify-content-center">
        {/* Sidebar */}
        <div className="col-lg-3">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>
        {/* Job Listings Area */}
        <div className="col-lg-7 col-md-10">
          <h2 className="mb-4" style={{ fontWeight: 700 ,color:'blue'}}>HR and Admin Openings</h2>
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
  );
}
