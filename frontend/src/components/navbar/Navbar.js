/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import logo_lightbg from '../../assets/logos/logo_lightbg.png'

import {Link} from "react-router-dom";



const Navbar = () => {
  let Links =[
    {name:"FAQs",link:"faqs"},
    {name:"Pricing",link:"pricing"},
    {name:"Resources",link:"resources"},
    {name:"Security",link:"security"},
    {name:"Contact",link:"contact"},
  ];
  let [open,setOpen]=useState(false);
return (
  <div className='shadow-md w-full left-0 bg-white z-20 text-lg'>
    <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center 
    text-gray-800'>
      <span className='text-3xl text-indigo-600 mr-1 pt-2'>
      <Link class="text-xl font-bold font-heading" to="/">
              <img src = {logo_lightbg} alt = 'EntrustUs Logo' class ='' />
        </Link>
      </span>
      
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <ion-icon name={open ? 'close':'menu'}></ion-icon>
    </div>

    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
      {
        Links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
            <Link to={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</Link>
          </li>
          
        ))
      }
      <li className='md:ml-8 text-xl md:my-0 my-7'>
                <button class = 'hover:text-gray-200'>Sign In</button>
                </li>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                <button class={`bg-[#171A46] text-white font-bold py-2 px-6 rounded-full`}>Login</button>
                </li>
    </ul>
    </div>
    </div>
)
}

export default Navbar