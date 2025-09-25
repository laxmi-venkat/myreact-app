import React from "react";

export default function FilterBar({ filters, setFilters }) {
  return (
    <div
      className="bg-white rounded shadow-sm p-4 mb-4"
      style={{ minWidth: 260, maxWidth: 320, height: "fit-content" }}>
      <h5 className="mb-4">Filters</h5>
      <div className="mb-3">
        <select
          className="form-select"
          value={filters.experience}
          onChange={e => setFilters({ ...filters, experience: e.target.value })}
        >
          <option value="">Experience</option>
          <option value="0-2">Entry Level (0-2 years)</option>
          <option value="2-5">Mid Level (2-5 years)</option>
          <option value="5+">Senior Level (5+ years)</option>
        </select>
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={filters.jobType}
          onChange={e => setFilters({ ...filters, jobType: e.target.value })}
        >
          <option value="">Job Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>
      <div>
        <select
          className="form-select"
          value={filters.location}
          onChange={e => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">Location</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Remote">Remote</option>
        </select>
      </div>
    </div>
  );
}
