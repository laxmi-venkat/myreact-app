import React from "react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search jobs, companies, or skills"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: "0.9rem", fontSize: "1rem" }}
      />
    </div>
  );
}
