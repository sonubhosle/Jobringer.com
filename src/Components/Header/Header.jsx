import React from 'react'
import '../../Styles/Header.css'
import { Link } from 'react-router-dom'
import { HiMiniBars3 } from "react-icons/hi2";
import { FiUserPlus } from "react-icons/fi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";
import { LuBriefcaseBusiness } from "react-icons/lu";

const Header = () => {
  return (
    <div className='navigation'>
      <Link to='/' className="logo">
        <img src={"https://i.postimg.cc/k5zsSpVR/logonew.jpg" || "../../assets/logonew.jpg"} alt="" srcset="" />
      </Link>
      <div className="center">
        <div className="job_count">
          <div className="count">11,000+ <p>Active Jobs</p></div>
        </div>

        <div className="menus">
          <Link><HiMiniBars3 color='#323E6B' size={35} /></Link>
          <Link><FiUserPlus color='#323E6B' size={28} /><p>Login</p></Link>
          <Link><FaAngleDoubleRight color='#323E6B' size={28} /><p>Home</p></Link>
          <Link><LuBriefcaseBusiness color='#323E6B' size={28} /> <p>Jobs</p></Link>
          <Link><TiArrowBackOutline color='#323E6B' size={32} /><p>Back</p></Link>
        </div>
      </div>
      <div className="right_menus">
        <Link>Jobs</Link>
        <Link>Active Employers</Link>
        <Link>Job Blogs</Link>
        <Link>Pricing</Link>
        <button className="seeker_login">Jobseeker Login</button>
        <button className='emp_login'>Employer Login</button>
      </div>
    </div>
  )
}

export default Header