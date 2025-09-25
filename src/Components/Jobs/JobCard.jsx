import React from "react";

export default function JobCard({ job }) {
  return (
    <div className="card mb-3 p-3" style={{ border: "1px solid #e5e7eb", borderRadius: 10 }}>
      <div className="row">
        <div className="col-md-9">
          <h5 className="mb-1" style={{ fontWeight: 600 }}>{job.title}</h5>
          <small className="text-muted">{job.company}</small>
          <div className="text-secondary my-1">
            {job.location} &bull; {job.experience} Exp.
          </div>
          <div className="text-secondary">
            ₹{job.salary} LPA &bull; {job.jobType} &bull; {job.posted}
          </div>
        </div>
        <div className="col-md-3 d-flex align-items-center justify-content-md-end mt-2 mt-md-0">
          <button className="btn btn-primary px-4" style={{ borderRadius: 6 }}>APPLY</button>
        </div>
      </div>
    </div>
  );
}
