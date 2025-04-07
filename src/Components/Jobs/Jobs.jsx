import React, { useState } from 'react';
import '../../Styles/Jobs.css';
import { jobData } from '../Database/Job_Data';
import Filters from './Filters';
import Job_Card from './Job_Card';
import { FaFilter } from "react-icons/fa";


const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);
  const [showFilters, setShowFilters] = useState(true);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = jobData.slice(startIndex, startIndex + jobsPerPage);

  const renderPagination = () => {
    const pages = [];
    const totalVisible = 5;

    if (totalPages <= totalVisible + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }

    return pages.map((page, index) => (
      <button
        key={index}
        disabled={page === '...'}
        className={currentPage === page ? 'active' : ''}
        onClick={() => typeof page === 'number' && setCurrentPage(page)}
      >
        {page}
      </button>
    ));
  };

  return (
    <>
      <div className="container">
      <button
        className="toggle-button"
        onClick={() => setShowFilters((prev) => !prev)}
      >
       <FaFilter size={20} /> <span>Filters</span>
      </button>

      <div className={`filters-wrapper ${showFilters ? "show" : "hide"}`}>
        <div className="filters">
          <Filters />
        </div>
      </div>

        {/* Job Listings */}
        <div className="jobs">
          <div className="jobs-header">
            <div className="show-control">
              <label htmlFor="perPageSelect">Show</label>
              <select
                id="perPageSelect"
                value={jobsPerPage}
                onChange={(e) => {
                  setJobsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={40}>40</option>
                <option value={80}>80</option>
                <option value={100}>100</option>
              </select>
              <span>per page</span>
            </div>
            <div className="showing-count">
              Showing {startIndex + 1} to {Math.min(startIndex + jobsPerPage, jobData.length)} of {jobData.length}
            </div>
          </div>

          <div className="jobs_data">
            {paginatedJobs.map((job, indx) => (
              <Job_Card job={job} key={indx} />
            ))}
          </div>

          <div className="pagination">{renderPagination()}</div>
        </div>

        <div className="right_side">
          <p>Apply to JOBS On-The-Go <br /> Jobringer Mobile App</p>
          <img src="https://www.jobringer.com/images/anroid.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Jobs;
