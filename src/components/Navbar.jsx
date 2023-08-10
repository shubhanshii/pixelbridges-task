import React, { useState } from 'react'
import Twitter from '../assets/twitter.svg'
import Discord from '../assets/discord.svg'
import AppButton from  '../components/AppButton'
import Logo from '../assets/logo.png'

const Navbar = () => {

const [color, setColor]=useState(false)
const changeColor = ()=>{
  if(window.scrollY >=10){
    setColor(true)
  } else {
    setColor(false)
  }
}
window.addEventListener('scroll', changeColor)
  return (
    <div className='fixed z-10 w-full'>
    <div className={color? 'bg-navbar' : ''}>
    <nav className='py-3'>
        <div className='lg:flex lg:justify-around px-5 md:px-10'>
            <ul className=' lg:flex text-[#FFFFFFCC]  text-lg lg:gap-4 xl:gap-6 hidden cursor-pointer'>
                <li >Docs</li>
                <li>SDKs</li>
                <li>API Reference</li>
                <li>Support</li>
                <img src={Twitter} alt='' className='lg:w-6 xl:w-8 h-3/4'/>
                <img src={Discord} alt='' className='lg:w-6 xl:w-10 h-3/4'/>
                
                </ul>
   <img src={Logo} alt='' className=' flex justify-center items-center lg:w-1/4 h-full w-1/2 xl:w-[17%] lg:pr-24 pt-1 mx-auto md:w-1/4'/>
                
                
                <div className='lg:flex gap-10 hidden cursor-pointer'>
                <ul>
                <li className='text-[#FFFFFFCC] text-lg'>Login</li></ul>
                <div className='w-40'>
                  <AppButton>Get Started</AppButton>
                  
                </div>
                
                </div>
        </div>
    </nav>
    </div>
    </div>
  )
}

export default Navbar