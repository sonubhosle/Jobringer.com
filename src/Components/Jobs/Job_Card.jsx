import React from 'react';
import '../../Styles/Jobs.css'; // assuming CSS is here
import { RiBriefcase2Fill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { MdWatchLater } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiShareFill } from "react-icons/ri";
import { FaSave } from "react-icons/fa";

import { FaChalkboardUser } from "react-icons/fa6";

const Job_Card = ({ job }) => {
  return (
    <div className="job_card">
       <div className="job_card_design">
          <div className="angle-dark"></div>
          <div className="angle-teal"></div>
        </div>
        <div className="job_header">
          <div className="mode">In Office</div>
          <div className="job_logo">
            <img src="https://www.jobringer.com/images/content/company-logo/hjp463d24f149780af70b443b07cda6dc66.png" alt="" />
          </div>
          <div className="job_name">
            <div className="title">IT RECRUITER | FRESHER | MNC</div>
            <div className="company">HINDCO Consulting Services</div>
          </div>
        </div>
        <div className="cmp_salary_exp">
          <li>< RiBriefcase2Fill size={27} color='#6212A6' />  0 - 3 Years</li>
          <li><GiWallet size={27}   color='#6212A6'/> Not Disclosed</li>
          <li><MdWatchLater size={27}   color='#6212A6'/> Full Time</li>
        </div>
        <div className="location"><HiOutlineLocationMarker size={27}   color='#6212A6' /> Mumbai | Navi Mumbai / Panvel | Thane</div>
        <div className="skills"><span>Key Skills:</span> HR , Recuitment , IT, IT Recruiter, Staffing, Talent Sourcing, Talent Acquisition</div>
        <div className="posted">Posted 20 day(s) ago</div>
        <div className="btn_group">
          <div className="left_btn">
              <p><FaChalkboardUser size={27} /></p>
              <p><RiShareFill size={27}  /></p>
              <p><FaSave size={27} /></p>
          </div>
          <div className="right_btn" role={'button'}>Apply</div>
        </div>
    </div>
  );
};

export default Job_Card;
