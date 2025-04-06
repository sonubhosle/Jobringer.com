import React from 'react'
import Jobs from '../Components/Jobs/Jobs'
import Notifire from '../Components/Notifier/Notifire'
import Search from '../Components/Search/Search'

const Home = () => {
  return (
    <div>
      <Notifire />
      <Search />
      <Jobs />
    </div>
  )
}

export default Home