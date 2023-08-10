import React from 'react'
import AppButton from './AppButton'
import Hero from '../assets/hero.png'

const Herosection = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center text-center pt-36 gap-8 px-3 md:px-6 xl:px-80 2xl:px-96 lg:px-36'>
            <h1 className='text-white text-5xl md:text-[55px] xl:text-6xl font-bold'>Frictionless blockchain games build with MetaFab</h1>
            <p className='text-gray-300 text-xl lg:text-[22px] font-semibold'>The free, end-to-end, self-serve solution for games and gamified apps to integrate powerful blockchain infrastructure in minutes, not months.</p>
        </div>
        <div className='flex justify-center items-center flex-col md:flex-row gap-5 mt-5 mb-12'>
            <div className='text-lg font-semibold w-60'>
                <AppButton>Sign up, We're free</AppButton>
                </div>
            <div className='text-lg font-semibold w-60'>
                <AppButton>Book an intro call</AppButton>
                </div>
        </div>
        <div className='flex justify-center items-center pt-3'>
        <img src={Hero} alt='' className='xl:w-1/2 lg:w-3/4 '/></div>
    </div>
  )
}

export default Herosection