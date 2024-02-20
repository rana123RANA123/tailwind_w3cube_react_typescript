import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Navbar from '../components/Navbar'
import Blog from './blog/Blog'
import SecondNavbar from '../components/SecondNavbar'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <>
   {/* <Navbar /> */}
   {/* <SecondNavbar /> */}
   <main>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/blog' element={<Blog />} />
   </Routes>
   </main>
   <Footer />
   </>
  )
}
