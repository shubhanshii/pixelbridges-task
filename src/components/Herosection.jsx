import React from 'react'
import AppButton from './AppButton'
import Hero from '../assets/hero.png'

const Herosection = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center text-center pt-16 gap-8 px-96'>
            <h1 className='text-white text-6xl font-bold'>Frictionless blockchain games build with MetaFab</h1>
            <p className='text-gray-300 text-[22px]'>The free, end-to-end, self-serve solution for games and gamified apps to integrate powerful blockchain infrastructure in minutes, not months.</p>
        </div>
        <div className='flex justify-center items-center  gap-5 mt-5 mb-12'>
            <div className='text-lg font-semibold w-60'>
                <AppButton>Sign up, We're free</AppButton>
                </div>
            <div className='text-lg font-semibold w-60'>
                <AppButton>Book an intro call</AppButton>
                </div>
        </div>
        <div className='flex justify-center items-center'>
        <img src={Hero} alt='' className='w-1/2'/></div>
    </div>
  )
}

export default Herosection