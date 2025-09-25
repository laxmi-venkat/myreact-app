import React, { useState } from "react";
import SearchBar from "../Jobs/SearchBar"; 
import FilterBar from "../Jobs/FilterBar";
import JobCard from "../Jobs/JobCard"; 
// function SearchBar({ search, setSearch }) {
//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search jobs, companies, or skills"
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         style={{ padding: "0.9rem", fontSize: "1rem" }}
//       />
//     </div>
//   );
// }

// function FilterBar({ filters, setFilters }) {
//   return (
//     <div className="bg-white rounded shadow-sm p-4 mb-4" style={{ minWidth: 260, maxWidth: 320, height: "fit-content" }}>
//       <h5 className="mb-4">Filters</h5>
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={filters.experience}
//           onChange={e => setFilters({ ...filters, experience: e.target.value })}
//         >
//           <option value="">Experience</option>
//           <option value="0-2">Entry Level (0-2 years)</option>
//           <option value="2-5">Mid Level (2-5 years)</option>
//           <option value="5+">Senior Level (5+ years)</option>
//         </select>
//       </div>
//       <div className="mb-3">
//         <select
//           className="form-select"
//           value={filters.jobType}
//           onChange={e => setFilters({ ...filters, jobType: e.target.value })}
//         >
//           <option value="">Job Type</option>
//           <option value="Full Time">Full Time</option>
//           <option value="Part Time">Part Time</option>
//           <option value="Contract">Contract</option>
//           <option value="Internship">Internship</option>
//         </select>
//       </div>
//       <div>
//         <select
//           className="form-select"
//           value={filters.location}
//           onChange={e => setFilters({ ...filters, location: e.target.value })}
//         >
//           <option value="">Location</option>
//           <option value="Hyderabad">Hyderabad</option>
//           <option value="Bangalore">Bangalore</option>
//           <option value="Mumbai">Mumbai</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Remote">Remote</option>
//         </select>
//       </div>
//     </div>
//   );
// }

// function JobCard({ job }) {
//   return (
    
//     <div className="card mb-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 10 }}>
//       <div className="row">
//         <div className="col-md-9">
//           <h5 className="mb-1" style={{ fontWeight: 600 }}>{job.title}</h5>
//           <small className="text-muted">{job.company}</small>
//           <div className="text-secondary my-1">
//             {job.location} &bull; {job.experience} Exp.
//           </div>
//           <div className="text-secondary">
//             ₹{job.salary} LPA &bull; {job.jobType} &bull; {job.posted}
//           </div>
//         </div>
//         <div className="col-md-3 d-flex align-items-center justify-content-md-end mt-2 mt-md-0">
//           <button className="btn btn-primary px-4" style={{ borderRadius: 6 }}>APPLY</button>
//         </div>
//       </div>


//     </div>
//   );
// }

export default function Engineering() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({ experience: "", jobType: "", location: "" });

  const jobs = [
    { title: "Frontend Developer", company: "Thagam Capital", location: "Hyderabad", experience: "0-2", jobType: "Full Time", salary: "4-6", posted: "2 days ago" },
    { title: "Backend Developer", company: "Superchat", location: "Bangalore", experience: "2-5", jobType: "Full Time", salary: "8-12", posted: "3 days ago" },
    { title: "Software Engineer", company: "Code Vidhya", location: "Hyderabad", experience: "3+", jobType: "Full Time", salary: "12-18", posted: "6 days ago" },
    { title: "Full-Stack Developer", company: "Tech Solutions", location: "Remote", experience: "2-5", jobType: "Full Time", salary: "8-15", posted: "1 week ago" },
    { title: "Data Analyst", company: "Bioheaven 360", location: "Mumbai", experience: "5+", jobType: "Contract", salary: "10-15", posted: "4 days ago" },
    { title: "DevOps Engineer", company: "Irasus", location: "Delhi", experience: "2-5", jobType: "Full Time", salary: "7-10", posted: "5 days ago" },
  ];

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
        {/* Job Listings Area */}
        <div className="col-lg-7 col-md-10">
          <h2 className="mb-4" style={{ fontWeight: 700 }}>Engineering Openings</h2>
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
