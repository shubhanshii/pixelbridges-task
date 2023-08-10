import React from 'react'
import AppButton from './AppButton'
import Arrow from '../assets/right-removebg-preview.png'

const System = () => {
  return (
    <div className=' xl:px-52 pt-24 text-center px-4 '>
        <h1 className='text-white md:text-[42px] text-[32px] lg:px-44 font-bold'>We put in the time, money & headache, so you don't have to</h1>
        <p className='text-[#FFFFFFCC] md:text-xl text-lg lg:px-40 font-semibold py-6'>Reliable, scalable & secure systems; battle tested to handle 100,000's of active players and 10,000+ transactions per second, per game.</p>
        <div className='w-40 mx-auto flex mb-10'>
            <AppButton>Learn More</AppButton>
        </div>
        <div className='gap-7 flex flex-col lg:flex-row justify-center items-center text-left mx-2 lg:py-5 md:mx-36 lg:mx-10'>
            <div className='bg-gray-900 p-7 rounded-lg text-[#FFFFFFCC]'>
                <h1 className='text-base pb-2 font-bold'>Get to Market Faster</h1>
                <p className='text-[15px] pb-1 font-semibold'>
Offset months of ground-up smart contract and systems development with our simple but powerful REST APIs and SDKs that cover 95% of blockchain implementation and design patterns for games in just a few lines of code.
</p>
<div className='flex gap-2 '>
<p>View Our SDKs</p>
<img src={Arrow} alt='' className='w-[5%] h-3/4 py-1'/>
</div>
            </div>
            
            <div className='bg-gray-900 p-7 rounded-lg text-[#FFFFFFCC]'>
                <h1 className='text-[15px] pb-2 font-bold'>Focus on Building a Great Game</h1>
                <p className='text-[13px] pb-1 font-semibold'>
                Reallocate the 10's to 100's of thousands saved on blockchain R&D toward more developers, designers, and areas that scale, not toward building, writing, rewriting & re-rewriting efficient and immutable contracts & systems.
</p>
<div className='flex gap-2 '>
<p>View Our Documentation</p>
<img src={Arrow} alt='' className='w-[5%] h-3/4 py-1'/>
</div>
            </div>

        </div>
    </div>
  )
}

export default System