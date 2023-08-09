import React from 'react'
import Twitter from '../assets/twitter.png'
import Discord from '../assets/discord.png'
import AppButton from  '../components/AppButton'

const Navbar = () => {
  return (
    <div className='py-4'>
        <div className='flex justify-between px-8'>
            <ul className=' flex text-gray-400  text-lg gap-6'>
                <li >Docs</li>
                <li>SDKs</li>
                <li>API Reference</li>
                <li>Support</li>
                <img src={Twitter} alt='' className='w-[2%] h-3/4'/>
                <img src={Discord} alt='' className='w-[2%] h-3/4'/>
                
                <div className='text-white font-bold text-3xl text-center pl-48'>
                 
                 <h1>METAFAB</h1>
                </div>
                </ul>
                <div className='flex gap-10'>
                <ul>
                <li className='text-gray-400 text-lg'>Login</li></ul>
                <div className='w-40'>
                  <AppButton>Get Started</AppButton>
                  
                </div>
                
                </div>
        </div>
    </div>
  )
}

export default Navbar