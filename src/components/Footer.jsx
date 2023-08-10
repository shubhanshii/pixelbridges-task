import React from 'react'
import AppButton from './AppButton'

const Footer = () => {
  return (
    <div className='bg-footer py-28'>
      <h1 className='text-center text-white font-bold text-[32px] md:text-[40px] pb-6'>
      Ready to build?<br></br>
Get started today
      </h1>
      <div className='flex gap-7 lg:gap-4 justify-center text-[16px] items-center mx-auto flex-col lg:flex-row lg:mx-5'>
        <div className='w-60 font-semibold'>
<AppButton>Get Started, We're Free</AppButton>
        </div>
        <div className='w-60 font-bold'>
<AppButton>View Our Dev Docs</AppButton>
        </div>
        <div className='w-60 font-bold'>
<AppButton>Schedule an Intro Call</AppButton>
        </div>
        <div className='w-60 lg:w-44 font-bold'>
<AppButton>Join Discord</AppButton>
        </div>
      </div>
    </div>
  )
}

export default Footer