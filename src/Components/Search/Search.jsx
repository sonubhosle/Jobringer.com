import React, { useState, useCallback } from 'react';
import '../../Styles/Search.css';
import { Link } from 'react-router-dom';

const jobTags = [
  "#Fresher", "#Work From Home", "#WFH", "#IT", "#HR", "#Back Office",
  "#BPO Jobs", "#ITES", "#Finance", "#Accounts", "#Medical", "#Pharma",
  "#Manager", "#Developer", "#CA", "#Marketing", "#Engineering", "#Research",
  "#Sales", "#MBA", "#Non Government Jobs"
];

const locations = ["Abu Road", "Adilabad", "Agar Malwa", "Agartala", "Agra"];
const experiences = ["0", "1", "2", "3", "4"];
const salaries = ["0 - 3 Lacs", "3 - 6 Lacs", "6 - 9 Lacs", "9 - 12 Lacs", "12 - 15 Lacs", "15 - 20 Lacs", "20 - 25 Lacs", "25 - 30 Lacs", "30 - 40 Lacs", "40 - 50 Lacs", "50 Lacs - 1 Crore", "1 Crore+"];

const CustomDropdown = ({
  label,
  options,
  selected,
  onSelect,
  isOpen,
  onToggle,
  className
}) => {
  const [filter, setFilter] = useState('');

  const filteredOptions = options.filter(opt =>
    opt.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={`dropdown-wrapper ${className}`}>
      <div className="dropdown-header" role="button" onClick={onToggle}>
        {selected || label}
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="dropdown-list">
          <div className="search_bar">
            <input
              type="text"
              placeholder="Search..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="dropdown-search"
            />
          </div>

          <div className="box">
            <p>{label}</p>
            {filteredOptions.map((option, idx) => (
              <div
                className="option"
                key={idx}
                onClick={() => {
                  onSelect(option);
                  onToggle();
                  setFilter('');
                }}
              >
                {option}
              </div>
            ))}
            {filteredOptions.length === 0 && (
              <li className="no-option">No results</li>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');
  const [salary, setSalary] = useState('');
  const [openDropdown, setOpenDropdown] = useState(null);

  const filteredTags = jobTags.filter(
    tag =>
      tag.toLowerCase().includes(keyword.toLowerCase()) &&
      !selectedTags.includes(tag)
  );

  const addTag = useCallback((tag) => {
    setSelectedTags(prev => [...prev, tag]);
    setKeyword('');
  }, []);

  const removeTag = useCallback((tagToRemove) => {
    setSelectedTags(prev => prev.filter(tag => tag !== tagToRemove));
  }, []);

  const handleDropdownToggle = useCallback((dropdownKey) => {
    setOpenDropdown(prev => (prev === dropdownKey ? null : dropdownKey));
  }, []);

  return (
    <div className="search_container">
      <div className="search_section">
        <h1>Search Job</h1>

        <div className="search_input">
          <input
            type="text"
            placeholder="Type keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <div className="dropdowns">
          <CustomDropdown
            label="Select Location"
            options={locations}
            selected={location}
            onSelect={setLocation}
            isOpen={openDropdown === 'location'}
            onToggle={() => handleDropdownToggle('location')}
            className="dropdown-large"
          />

          <CustomDropdown
            label="Select Experience"
            options={experiences}
            selected={experience}
            onSelect={setExperience}
            isOpen={openDropdown === 'experience'}
            onToggle={() => handleDropdownToggle('experience')}
            className="dropdown-small"
          />

          <CustomDropdown
            label="Select Salary"
            options={salaries}
            selected={salary}
            onSelect={setSalary}
            isOpen={openDropdown === 'salary'}
            onToggle={() => handleDropdownToggle('salary')}
            className="dropdown-small"
          />
        </div>

        <button className="find_jobt">Search</button>
      </div>

      {keyword && (
        <div className="suggestions">
          {filteredTags.map((tag, index) => (
            <Link key={index} onClick={() => addTag(tag)}>
              {tag}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
