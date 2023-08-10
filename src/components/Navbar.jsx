import React, { useState } from 'react'
import Twitter from '../assets/twitter.png'
import Discord from '../assets/discord.png'
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
    <nav className='py-4'>
        <div className='lg:flex lg:justify-between px-5 md:px-10'>
            <ul className=' lg:flex text-[#FFFFFFCC]  text-lg lg:gap-4 xl:gap-6 hidden'>
                <li >Docs</li>
                <li>SDKs</li>
                <li>API Reference</li>
                <li>Support</li>
                <img src={Twitter} alt='' className='lg:w-[5%] xl:w-[4%] h-3/4'/>
                <img src={Discord} alt='' className='lg:w-[5%] xl:w-[4%] h-3/4'/>
                
                </ul>
             
                 <img src={Logo} alt='' className='text-white font-bold text-xl md:text-3xl text-center lg:pr-20 xl:pr-96 lg:w-1/4 h-full w-1/2 xl:w-[40%] mx-auto md:w-1/3'/>
                
                
                <div className='lg:flex gap-10 hidden'>
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