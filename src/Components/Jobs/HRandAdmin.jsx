import React, { useState } from "react";
import SearchBar from "../Jobs/SearchBar";
import FilterBar from "../Jobs/FilterBar";
import JobCard from "../Jobs/JobCard";

export default function HRandAdmin() {
  // HR and Admin jobs data
  const companies = [
    { 
      name: 'Thangam Capital', 
      roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] 
    },
    { 
      name: 'SuperChat', 
      roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] 
    },
    { 
      name: 'Irasus', 
      roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] 
    },
    { 
      name: 'CodeVidhya', 
      roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] 
    },
    { 
      name: 'BioHeaven360', 
      roles: ['HR Manager', 'Talent Acquisition Specialist', 'Recruiter', 'Office Administrator', 'Administrative Assistant'] 
    },
  ];

  // Convert companies -> jobs
  const jobs = [];
  companies.forEach(company => {
    company.roles.forEach((role, index) => {
      jobs.push({
        id: `${company.name}-${role}-${index}`,
        title: role,
        company: company.name,
        location: "Remote", // Add location data
        experience: getExperienceLevel(role), // Add experience based on role
        jobType: "Full-time", // Add job type
        salary: getSalaryRange(role), // Add salary range
        posted: getRandomPostedDate(), // Add posted date
        description: `Join ${company.name} as a ${role}. Great opportunity to work in a dynamic environment.`,
        requirements: getJobRequirements(role)
      });
    });
  });

  // Helper functions to generate realistic job data
  function getExperienceLevel(role) {
    const seniorRoles = ['HR Manager'];
    const midRoles = ['Talent Acquisition Specialist', 'Recruiter'];
    const juniorRoles = ['Office Administrator', 'Administrative Assistant'];
    
    if (seniorRoles.includes(role)) return '5+ years';
    if (midRoles.includes(role)) return '2-4 years';
    if (juniorRoles.includes(role)) return '0-2 years';
    return '1-3 years';
  }

  function getSalaryRange(role) {
    const salaryMap = {
      'HR Manager': '₹8-15 LPA',
      'Talent Acquisition Specialist': '₹4-8 LPA',
      'Recruiter': '₹3-6 LPA',
      'Office Administrator': '₹3-5 LPA',
      'Administrative Assistant': '₹2-4 LPA'
    };
    return salaryMap[role] || '₹3-6 LPA';
  }

  function getRandomPostedDate() {
    const days = Math.floor(Math.random() * 7) + 1;
    return `${days} days ago`;
  }

  function getJobRequirements(role) {
    const requirementMap = {
      'HR Manager': ['MBA in HR', '5+ years experience', 'Leadership skills', 'Policy development'],
      'Talent Acquisition Specialist': ['HR degree', 'Recruitment experience', 'Communication skills'],
      'Recruiter': ['Any degree', 'Communication skills', 'Sales mindset'],
      'Office Administrator': ['Graduate', 'Administrative skills', 'MS Office proficiency'],
      'Administrative Assistant': ['Graduate', 'Basic computer skills', 'Organizational skills']
    };
    return requirementMap[role] || ['Relevant degree', 'Good communication skills'];
  }

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ 
    experience: "", 
    jobType: "", 
    location: "" 
  });

  // Fixed filtering function
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
                         job.company.toLowerCase().includes(search.toLowerCase());
    const matchesExperience = filters.experience ? job.experience === filters.experience : true;
    const matchesJobType = filters.jobType ? job.jobType === filters.jobType : true;
    const matchesLocation = filters.location ? job.location === filters.location : true;
    
    return matchesSearch && matchesExperience && matchesJobType && matchesLocation;
  });

  return (
    <div className="container-fluid bg-light py-4" style={{ minHeight: "100vh", marginTop: "84px" }}>
      <div className="row justify-content-center">
        {/* Sidebar */}
        <div className="col-lg-3">
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>
        
        {/* Job Listings Area */}
        <div className="col-lg-7 col-md-10">
          <h2 className="mb-4" style={{ fontWeight: 700, color: '#f97316' }}>
            HR and Admin Openings
          </h2>
          <p className="text-muted mb-4">
            Showing {filteredJobs.length} HR and Administrative positions across our portfolio companies
          </p>
          
          <SearchBar search={search} setSearch={setSearch} />
          
          <div className="mt-4">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-5">
                <div className="text-muted">
                  <h4>No HR and Admin jobs found</h4>
                  <p>Try adjusting your search criteria or filters</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}