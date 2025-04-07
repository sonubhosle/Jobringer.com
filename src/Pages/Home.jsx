import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import Jobs from '../Components/Jobs/Jobs'
import Notifire from '../Components/Notifier/Notifire'
import Search from '../Components/Search/Search'
import '../Styles/Home.css'
const Home = () => {
  return (
    <div>
      <Notifire />
      <Search />
      <Jobs />
      <div className="wap-btn">
        <FaWhatsapp />
      </div>
    </div>
  )
}

export default Home