import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Footer.css';
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane
} from 'react-icons/fa';
import { indian, international, users } from '../Database/Job_Locations';

const socialIcons = [
  { icon: <FaWhatsapp />, name: 'Whatsapp' },
  { icon: <FaFacebookF />, name: 'Facebook' },
  { icon: <FaTwitter />, name: 'Twitter' },
  { icon: <FaInstagram />, name: 'Instagram' },
  { icon: <FaLinkedinIn />, name: 'LinkedIn' },
  { icon: <FaYoutube />, name: 'YouTube' },
  { icon: <FaTelegramPlane />, name: 'Telegram' },
];

const policyLinks = [
  'Terms and conditions',
  'Privacy Policy',
  'Refund / Cancellation',
  'Policy',
  'About Us',
  'Contact Us',
  'FAQ',
  'Blogs'
];

const Footer = () => {
  return (
    <footer className='footer-section'>
      <div className="top_grid">
        {[{ title: 'Jobs in India', data: indian }, { title: 'International Jobs', data: international }].map((section, idx) => (
          <div className="grid" key={idx}>
            <h1>{section.title}</h1>
            <div className="tags">
              {section.data.map(tag => (
                <Link to="#" key={tag.id}>{tag.name}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="counter">
        <div className="values">
          {users.map((user, idx) => (
            <div className="user" key={idx}>
              <div className="title">{user.title}</div>
              <div className="count">{user.count}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="disclaimer">
        <div className="top">
          <p>
            <span>Disclaimer:</span> All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker
          </p>
          <img src="https://www.jobringer.com/images/startuplogo.png" alt="Startup India Logo" />
        </div>

        <div className="media">
          <span>Follow us on</span>
          <div className="icons">
            {socialIcons.map((item, idx) => (
              <Link to="#" key={idx} aria-label={item.name}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="privacy_policy">
        <div className="links">
          {policyLinks.map((text, idx) => (
            <React.Fragment key={idx}>
              <Link to="#">{text}</Link>
              {idx !== policyLinks.length - 1 && <div className="line" />}
            </React.Fragment>
          ))}
        </div>
        <div className="copyright">
          © All Rights Reserved @ 2025 Jobtech Ventures Private Limited.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
