import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from './layout/Header'
import Footer from './layout/Footer'
import Profile from './pages/Profile'
import AboutProject from './pages/AboutProject'

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/about-project' element={<AboutProject />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
