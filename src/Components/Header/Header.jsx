import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Header.css';
import { HiMiniBars3 } from 'react-icons/hi2';
import { FiUserPlus } from 'react-icons/fi';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { TiArrowBackOutline } from 'react-icons/ti';
import { LuBriefcaseBusiness } from 'react-icons/lu';

const Header = () => {
  return (
    <header className='navigation'>
      {/* Logo */}
      <Link to='/' className='logo'>
        <img
          src="https://i.postimg.cc/k5zsSpVR/logonew.jpg"
          alt="Jobringer Logo"
        />
      </Link>

      {/* Center Section */}
      <div className='center'>
        <div className='job_count'>
          <div className='count'>
            11,000+ <p>Active Jobs</p>
          </div>
        </div>

        <div className='menus'>
          <Link to="#" aria-label="Menu">
            <HiMiniBars3 size={35} color='#323E6B' />
          </Link>
          <Link to="#" aria-label="Login">
            <FiUserPlus size={28} color='#323E6B' />
            <p>Login</p>
          </Link>
          <Link to="/" aria-label="Home">
            <FaAngleDoubleRight size={28} color='#323E6B' />
            <p>Home</p>
          </Link>
          <Link to="/jobs" aria-label="Jobs">
            <LuBriefcaseBusiness size={28} color='#323E6B' />
            <p>Jobs</p>
          </Link>
          <Link to="#" aria-label="Back">
            <TiArrowBackOutline size={32} color='#323E6B' />
            <p>Back</p>
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className='right_menus'>
        <Link to="#">Jobs</Link>
        <Link to="#">Active Employers</Link>
        <Link to="#">Job Blogs</Link>
        <Link to="#">Pricing</Link>
        <button className='seeker_login'>Jobseeker Login</button>
        <button className='emp_login'>Employer Login</button>
      </div>
    </header>
  );
};

export default Header;
