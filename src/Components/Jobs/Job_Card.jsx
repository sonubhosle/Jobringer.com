import React from 'react';
import '../../Styles/Jobs.css';

import {
  RiBriefcase2Fill,
  RiShareFill,
} from 'react-icons/ri';
import { GiWallet } from 'react-icons/gi';
import { MdWatchLater } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaSave } from 'react-icons/fa';
import { FaChalkboardUser } from 'react-icons/fa6';

const ICON_COLOR = '#6212A6';
const ICON_SIZE = 27;

const Job_Card = () => {
  return (
    <div className="job_card">
      {/* Background design angles */}
      <div className="job_card_design">
        <div className="angle-dark"></div>
        <div className="angle-teal"></div>
      </div>

      {/* Header with logo and title */}
      <div className="job_header">
        <div className="mode">In Office</div>
        <div className="job_logo">
          <img
            src="https://www.jobringer.com/images/content/company-logo/hjp463d24f149780af70b443b07cda6dc66.png"
            alt="Company Logo"
          />
        </div>
        <div className="job_name">
          <div className="title">IT RECRUITER | FRESHER | MNC</div>
          <div className="company">HINDCO Consulting Services</div>
        </div>
      </div>

      {/* Job meta info */}
      <ul className="cmp_salary_exp">
        <li>
          <RiBriefcase2Fill size={ICON_SIZE} color={ICON_COLOR} /> 0 - 3 Years
        </li>
        <li>
          <GiWallet size={ICON_SIZE} color={ICON_COLOR} /> Not Disclosed
        </li>
        <li>
          <MdWatchLater size={ICON_SIZE} color={ICON_COLOR} /> Full Time
        </li>
      </ul>

      {/* Location */}
      <div className="location">
        <HiOutlineLocationMarker size={ICON_SIZE} color={ICON_COLOR} /> Mumbai | Navi Mumbai / Panvel | Thane
      </div>

      {/* Skills */}
      <div className="skills">
        <span>Key Skills:</span> HR, Recruitment, IT, IT Recruiter, Staffing, Talent Sourcing, Talent Acquisition
      </div>

      {/* Post info */}
      <div className="posted">Posted 20 day(s) ago</div>

      {/* Buttons */}
      <div className="btn_group">
        <div className="left_btn">
          <p><FaChalkboardUser size={ICON_SIZE} /></p>
          <p><RiShareFill size={ICON_SIZE} /></p>
          <p><FaSave size={ICON_SIZE} /></p>
        </div>
        <div className="right_btn" role="button">
          Apply
        </div>
      </div>
    </div>
  );
};

export default Job_Card;
