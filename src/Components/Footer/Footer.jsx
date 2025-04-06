import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/Footer.css'
import { indian, international, users } from '../Database/Job_Locations'
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="top_grid">
        <div className="grid">
          <h1>Jobs in India</h1>
          <div className="tags">{indian.map((tag, indx) => <Link key={tag.id}>{tag.name}</Link>)
          }</div>
        </div>
        <div className="grid">
          <h1>International Jobs</h1>
          <div className="tags">{international.map((tag, indx) => <Link key={tag.id}>{tag.name}</Link>)
          }</div>
        </div>
      </div>
      <div className="counter">
        <div className="values">
          {
            users.map((user, indx) => {
              return (
                <div className="user" key={indx}>
                  <div className="title">{user.title}</div>
                  <div className="count">{user.count}</div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="disclaimer">
        <div className="top">
          <p><span>Disclaimer: </span> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker</p>
          <img src="https://www.jobringer.com/images/startuplogo.png" alt="" />
        </div>
        <div className="media">
          <span>Follow us on</span>
          <div className="icons">
            <Link><FaWhatsapp /> </Link>
            <Link><FaFacebookF /> </Link>
            <Link><FaTwitter /> </Link>
            <Link><FaInstagram /> </Link>
            <Link><FaLinkedinIn /> </Link>
            <Link><FaYoutube /> </Link>
            <Link><FaTelegramPlane /> </Link>
          </div>
        </div>
      </div>
      <div className="privacy_policy">
        <div className="links">
        <Link>Terms and conditions</Link>
        <div className="line"></div>
        <Link>Privacy Policy </Link>
        <div className="line"></div>
         <Link>Refund / Cancellation</Link> 
         <div className="line"></div>
         <Link>Policy</Link> 
         <div className="line"></div>
         <Link>About Us</Link>
         <div className="line"></div>
         <Link> Contact Us</Link>
         <div className="line"></div> 
         <Link>FAQ</Link> 
         <div className="line"></div>
         <Link>Blogs</Link>
        </div>
        <div className="copyright">© All Rights Reserved @ 2025 Jobtech Ventures Private Limited.</div>
      </div>
    </div>
  )
}

export default Footer