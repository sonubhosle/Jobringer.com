import React, { useState } from 'react';
import '../../Styles/Jobs.css';
import { jobData } from '../Database/Job_Data';
import Filters from './Filters';
import Job_Card from './Job_Card';

const Jobs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(5);

  const totalPages = Math.ceil(jobData.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const paginatedJobs = jobData.slice(startIndex, startIndex + jobsPerPage);

  const renderPagination = () => {
    const pages = [];
    const totalVisible = 5; // how many pages to show around current page

    if (totalPages <= totalVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }

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
    <div className='container'>
      <Filters />

      <div className="jobs">
        {/* Header */}
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

        {/* Job Cards */}
        <div className="jobs_data">
          {paginatedJobs.map((job, indx) => (
            <Job_Card job={job} key={indx} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {renderPagination()}
        </div>
      </div>

      <div className="right_side"></div>
    </div>
  );
};

export default Jobs;
