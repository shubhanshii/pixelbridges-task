import React from 'react'
import AppButton from './AppButton'
import Toolsimage from '../assets/tools.png'

const Tools = () => {
  return (
    <div className='text-center pt-20 px-4 md:px-10 lg:px-44 xl:px-96'>
        <h1 className='text-white font-bold text-[32px] 2xl:px-36 md:text-[40px] md:px-20'>
        Take your game & our tools anywhere
        </h1>
        <p className='text-[18px] font-semibold text-[#FFFFFFCC] 2xl:px-20 pt-5'>Build programmatically using your preferred languages across popular blockchains with one vertically integrated infrastructure suite - MetaFab.</p>
        <div className='w-60 mx-auto pt-6'>
            <AppButton>View Developer SDKs</AppButton>
        </div>
        <img src={Toolsimage} alt='' className='flex justify-center items-center mx-auto xl:w-[100%]'/>
        </div>
  )
}

export default Tools