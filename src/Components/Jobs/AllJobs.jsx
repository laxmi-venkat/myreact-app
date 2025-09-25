import React, { useState } from "react";
import SearchBar from "../Jobs/SearchBar";
import FilterBar from "../Jobs/FilterBar";
import JobCard from "../Jobs/JobCard";

export default function AllJobs() {
  // Example: Combine engineering + HR/Admin + other jobs into one array
  const jobs = [
    // Engineering
    { title: "Frontend Developer", company: "Thagam Capital", location: "Hyderabad", experience: "0-2", jobType: "Full Time", salary: "4-6", posted: "2 days ago" },
    { title: "Backend Developer", company: "Superchat", location: "Bangalore", experience: "2-5", jobType: "Full Time", salary: "8-12", posted: "3 days ago" },
    // HR and Admin
    { title: "HR Manager", company: "Thagam Capital", location: "", experience: "", jobType: "", salary: "", posted: "" },
    { title: "Recruiter", company: "SuperChat", location: "", experience: "", jobType: "", salary: "", posted: "" },
    // Add more as needed...
  ];

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ experience: "", jobType: "", location: "" });

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
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
        {/* Job Listings */}
        <div className="col-lg-7 col-md-10">
          <h2 className="mb-4" style={{ fontWeight: 700 }}>All Jobs Available</h2>
          <SearchBar search={search} setSearch={setSearch} />
          <div>
            {filteredJobs.map((job, idx) => (
              <JobCard key={idx} job={job} />
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
