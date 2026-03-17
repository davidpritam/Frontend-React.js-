import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Kodr from './pages/kodr'
import Kodex from './pages/kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> }/>
        <Route path='/courses' element={ <Courses /> }>
        <Route path='/courses' element={<AllCourses />}/>
        <Route path='/courses/kodr' element= { <Kodr/>} />
        <Route path='/courses/kodex' element= { <Kodex/>} />
        </Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
