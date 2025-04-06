



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import '../../Styles/Filters.css';

const jobTags = [
  { id: 1, name: "#Fresher" },
  { id: 2, name: "#Work From Home" },
  { id: 3, name: "#WFH" },
  { id: 4, name: "#IT" },
  { id: 5, name: "#HR" },
  { id: 6, name: "#Back Office" },
  { id: 7, name: "#BPO Jobs" },
  { id: 8, name: "#ITES" },
  { id: 9, name: "#Finance" },
  { id: 10, name: "#Accounts" },
  { id: 11, name: "#Medical" },
  { id: 12, name: "#Pharma" },
  { id: 13, name: "#Manager" },
  { id: 14, name: "#Developer" },
  { id: 15, name: "#CA" },
  { id: 16, name: "#Marketing" },
  { id: 17, name: "#Engineering" },
  { id: 18, name: "#Research" },
  { id: 19, name: "#Sales" },
  { id: 20, name: "#MBA" },
  { id: 21, name: "#Non Government Jobs" },
];

const Dropdown = ({ title, isOpen, toggle, children }) => (
  <div className={`dropdown ${isOpen ? 'open' : ''}`}>
    <button className="dropdown-toggle" onClick={toggle}>
      {title}
      <span className="plus-icon">{isOpen ? '×' : '+'}</span>
    </button>
    <div className="dropdown-content">{children}</div>
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
    "On Field": false

  });
  const [jobTypes, setJobTypes] = useState({
    "Full Time": false,
    "Part Time": false,
    "Freelance": false
  });

  const handleCheckboxChange = (stateSetter, key) => {
    stateSetter(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className='filters'>
      <div className='filter'>
     
     <div className="header">
      <h1>Filters</h1>
      <p>Keywords</p>
      <input type="text"  placeholder='Type keywords and press enter'/>
     </div>
      
      <div className="dropdown-container">
        {/* Search Input */}
        <Dropdown title="Experience"  isOpen={dropdown1Open}  toggle={() => setDropdown1Open(!dropdown1Open)} >
          <input type="text"  className="search-box" placeholder="Enter years of experience"  value={search}   onChange={e => setSearch(e.target.value)}/>
        </Dropdown>

        {/* Work Modes */}
        <Dropdown title="Work Mode" isOpen={dropdown2Open}  toggle={() => setDropdown2Open(!dropdown2Open)} >
          {Object.entries(workModes).map(([key, value]) => (
            <label key={key} className="checkbox-item">
              <input type="checkbox"  checked={value} onChange={() => handleCheckboxChange(setWorkModes, key)} />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </Dropdown>

        {/* Job Types */}
        <Dropdown  title="Job Types"  isOpen={dropdown3Open}  toggle={() => setDropdown3Open(!dropdown3Open)} >
          {Object.entries(jobTypes).map(([key, value]) => (
            <label key={key} className="checkbox-item">
              <input  type="checkbox"  checked={value}  onChange={() => handleCheckboxChange(setJobTypes, key)} />
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          ))}
        </Dropdown>
      </div>
      </div>


      <div className="quick_search">
            <h1>Quick Job search <FiSearch/></h1>
            <div className="tags">
                 {
                    jobTags.map((tag) => <Link key={tag.id}>{tag.name}</Link>)
                 }
            </div>
        </div>
      </div>

  );
};

export default Filters;
