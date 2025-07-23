import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import logo from '../assets/logo.png';

import { Link } from 'react-router-dom';
function Navbar() {
  const [menu , setMenu] = useState(false);

  const toggle = () =>{
    setMenu(!menu)
  }
  return (
    <>
    <div className='p-2 bg-white'>
    <div className='container flex justify-between items-center'>
    <Link to="/"><img src={logo} className='w-20'  alt="Logo" /></Link>
    
    <ul className='items-center hidden lg:flex'>
  <li className='mx-4 relative cursor-pointer group'>
    <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><Link to="/" className='text-black'>Home</Link></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><Link to="#admission" className='text-black'>Courses</Link></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200 text-black'>news</span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><Link to="#gallery" className='text-black'>gallery</Link></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><Link to="/Aboutus" className='text-black'>About-us</Link></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
  <li className='mx-4 relative cursor-pointer group'>
  <span className='absolute left-0 right-0 top-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
    <span className='hover:font-bold transition duration-200'><Link to="/offlineForm" className='text-black'>apply offline</Link></span>
    <span className='absolute left-0 right-0 bottom-0 h-0.5 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200'></span>
  </li>
</ul>

      <div className='flex'>
      <IoCall className='text-orange-500 m-2 hidden sm:block' size={25}/>
      <button className=' hidden lg:block p-2 px-6 bg-orange-500 rounded-md text-white font-bold'><Link to="/login">Login</Link></button>
      </div>
      <div className='flex'>
        <IoCall className='text-orange-600 lg:hidden md:hidden mr-2' size={25}/>
        <GiHamburgerMenu className='block lg:hidden text-orange-600' size={23} onClick={toggle} />
      </div>

   
    </div>
 </div>


 {menu && 
 <div className='block lg:hidden fixed inset-0  bg-orange bg-opacity-50 z-40' onClick={toggle}/>
  }
 <aside className={`block lg:hidden fixed top-0 h-full w-64 bg-white text-black transition-transform transform z-50 ${
  menu ? " translate-x-0" : "-translate-x-full"
  }`}> 



<IoMdClose className=' absolute top-5 text-2xl right-4 text-orange' size={23} onClick={toggle}/>
 
<div className='p-4'>
<img src={logo} className='w-32'  alt="Logo" />

</div>
     <ul>
        <li className='mx-4 font-bold cursor-pointer mb-2 '><Link to="/">Home</Link></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><Link to="#admission" >Courses</Link></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'>news</li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><Link to="#gallery">gallery</Link></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><Link to="/Aboutus">About-us</Link></li>
        <li className='mx-4 hover:font-bold cursor-pointer mb-2'><Link to="/offlineForm">apply offline</Link></li>
      </ul>

      <button className='w-[80%] bg-orange-500 p-2 px-4 rounded-md text-white font-bold absolute bottom-[10px] mx-6'><Link to="/login">Login</Link></button>
 </aside>
 </>
  )
}

export default Navbar