import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Men from './pages/Men'
import Women from './pages/Women'
import Randomabout from './pages/Randomabout'
import Courses from './pages/Courses'
import Cohort2 from './pages/Cohort2'
import Anycourse from './pages/Anycourse'
import CourseDetails from './pages/CourseDetails'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/courses' element={<Courses/>}/>

        {/* Nested route */}
        <Route path='/product/men' element={<Men/>}/>
        <Route path='/product/women' element={<Women/>}/>

        {/* Dynamic route */}
        <Route path='/about/:id' element={<Randomabout />} />

        <Route path='/courses/cohort2' element={<Cohort2/>}/>
        {/* Nested Dynamic Route */}
        <Route path='/courses/:courseId' element={<Anycourse/>}/>
        <Route path='/courses/:courseId/detail' element={<CourseDetails/>}/>
        
        {/* Not Found Page */}
        <Route  path='/*' element={<NotFound />} />

      </Routes>
    </div>
  )
}

export default App

