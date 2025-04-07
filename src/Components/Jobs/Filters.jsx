import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import '../../Styles/Filters.css';

const jobTags = [
  { id: 1, name: "#Fresher" }, { id: 2, name: "#Work From Home" }, { id: 3, name: "#WFH" },
  { id: 4, name: "#IT" }, { id: 5, name: "#HR" }, { id: 6, name: "#Back Office" },
  { id: 7, name: "#BPO Jobs" }, { id: 8, name: "#ITES" }, { id: 9, name: "#Finance" },
  { id: 10, name: "#Accounts" }, { id: 11, name: "#Medical" }, { id: 12, name: "#Pharma" },
  { id: 13, name: "#Manager" }, { id: 14, name: "#Developer" }, { id: 15, name: "#CA" },
  { id: 16, name: "#Marketing" }, { id: 17, name: "#Engineering" }, { id: 18, name: "#Research" },
  { id: 19, name: "#Sales" }, { id: 20, name: "#MBA" }, { id: 21, name: "#Non Government Jobs" },
];

const Dropdown = ({ title, isOpen, toggle, children }) => (
  <div className={`dropdown ${isOpen ? 'open' : ''}`}>
    <button className="dropdown-toggle" onClick={toggle}>
      {title}
      <span className="plus-icon">{isOpen ? '×' : '+'}</span>
    </button>
    {isOpen && <div className="dropdown-content">{children}</div>}
  </div>
);

const Filters = () => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [search, setSearch] = useState('');

  const [workModes, setWorkModes] = useState({
    "In Office": false,
    "Work From Home / WFH": false,
    "Hybrid": false,
    "Remote": false,
    "On Field": false,
  });

  const [jobTypes, setJobTypes] = useState({
    "Full Time": false,
    "Part Time": false,
    "Freelance": false,
  });

  const handleCheckboxChange = (setState, key) => {
    setState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <section className="filter">
        <div className="header">
          <h1>Filters</h1>
          <label htmlFor="keyword-search">Keywords</label>
          <input
            id="keyword-search"
            type="text"
            placeholder="Type keywords and press enter"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="dropdown-container">
          {/* Experience */}
          <Dropdown
            title="Experience"
            isOpen={dropdown1Open}
            toggle={() => setDropdown1Open(!dropdown1Open)}
          >
            <input
              type="text"
              className="search-box"
              placeholder="Enter years of experience"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </Dropdown>

          {/* Work Modes */}
          <Dropdown
            title="Work Mode"
            isOpen={dropdown2Open}
            toggle={() => setDropdown2Open(!dropdown2Open)}
          >
            {Object.entries(workModes).map(([mode, checked]) => (
              <label key={mode} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleCheckboxChange(setWorkModes, mode)}
                />
                {mode}
              </label>
            ))}
          </Dropdown>

          {/* Job Types */}
          <Dropdown
            title="Job Types"
            isOpen={dropdown3Open}
            toggle={() => setDropdown3Open(!dropdown3Open)}
          >
            {Object.entries(jobTypes).map(([type, checked]) => (
              <label key={type} className="checkbox-item">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleCheckboxChange(setJobTypes, type)}
                />
                {type}
              </label>
            ))}
          </Dropdown>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="quick_search">
        <h1>
          Quick Job Search <FiSearch />
        </h1>
        <div className="tags">
          {jobTags.map(tag => (
            <Link key={tag.id} to="#" aria-label={`Search for ${tag.name}`}>
              {tag.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Filters;
