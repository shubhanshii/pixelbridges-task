import React from 'react'
import AppButton from './AppButton'
import Toolsimage from '../assets/tools.png'

const Tools = () => {
  return (
    <div className='text-center pt-20'>
        <h1 className='text-white font-bold text-[40px] px-[500px]'>
        Take your game & our tools anywhere
        </h1>
        <p className='text-[18px] font-semibold text-slate-50 px-[430px] pt-5'>Build programmatically using your preferred languages across popular blockchains with one vertically integrated infrastructure suite - MetaFab.</p>
        <div className='w-60 mx-auto pt-6'>
            <AppButton>View Developer SDKs</AppButton>
        </div>
        <img src={Toolsimage} alt='' className='flex justify-center items-center -mt-12 mx-auto w-[80%]'/>
        </div>
  )
}

export default Tools