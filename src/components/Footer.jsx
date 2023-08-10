import React from 'react'
import AppButton from './AppButton'

const Footer = () => {
  return (
    <div className='bg-footer py-28'>
      <h1 className='text-center text-white font-bold text-[40px] pb-6'>
      Ready to build?<br></br>
Get started today
      </h1>
      <div className='flex gap-7 justify-center items-center mx-auto'>
        <div className='w-60'>
<AppButton>Get Started, We're Free</AppButton>
        </div>
        <div className='w-52'>
<AppButton>View Our Dev Docs</AppButton>
        </div>
        <div className='w-60'>
<AppButton>Schedule an Intro Call</AppButton>
        </div>
        <div className='w-44'>
<AppButton>Join Discord</AppButton>
        </div>
      </div>
    </div>
  )
}

export default Footer