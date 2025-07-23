// import React from 'react'
import {Hero, Navbar, Admission,LiveCourseBenefits,Testimonials,Footer, Gallery,TopBar} from "../Components/Index"
import "../App.css";
function Home() {
  return (
   <>
  <div className="bg-orange-200">
  <TopBar />
   <Navbar/>
   <Hero/>
   <Admission />
   <LiveCourseBenefits />
   {/* <Testimonials /> */}
    <Gallery />
   <Footer />
  </div>
   </>
  )
}

export default Home