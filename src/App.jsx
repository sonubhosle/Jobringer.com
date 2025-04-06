  import React from 'react'
  import './App.css'
  import {Route,Routes} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
  const App = () => {
    return (
      <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
      </>
    )
  }

  export default App