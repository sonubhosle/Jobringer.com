import React, { useEffect, useState } from 'react';
import '../../Styles/Notifire.css'

const notifications = [
  { name: "CA Wani", action: "got selected for a job!" },
  { name: "Mehak Sharma", action: "was shortlisted by 10 employers" },
  { name: "Rohan Mehta", action: "got an interview call from 3 companies" },
  { name: "Aayushi Patel", action: "received a job offer!" },
  { name: "Vikram Joshi", action: "was viewed by 25 recruiters" },
  { name: "Nikita Rao", action: "was invited to apply for 5 jobs" },
  { name: "Zaid Shaikh", action: "was contacted by an HR representative" },
  { name: "Priya Sen", action: "was shortlisted for Top MNC Role" },
  { name: "Ankit Gupta", action: "profile matched with 12 job openings" },
  { name: "Sneha Iyer", action: "resume was downloaded by 3 employers" }
];

const Notifire = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % notifications.length);
    }, 6000); 

    return () => clearInterval(interval); 
  }, []);

  const currentNotification = notifications[currentIndex];

  return (
    <div className='notifire-box' >
       <p>{currentNotification.name} {currentNotification.action}</p>
    </div>
  );
};

export default Notifire;
