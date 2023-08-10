import React from 'react'
import AppButton from './AppButton'
import Arrow from '../assets/right-removebg-preview.png'

const System = () => {
  return (
    <div className='text-white px-96 pt-28 text-center'>
        <h1 className='text-[42px] font-bold'>We put in the time, money & headache, so you don't have to</h1>
        <p className='text-xl font-semibold py-6'>Reliable, scalable & secure systems; battle tested to handle 100,000's of active players and 10,000+ transactions per second, per game.</p>
        <div className='w-40 mx-auto flex mb-10'>
            <AppButton>Learn More</AppButton>
        </div>
        <div className='gap-7 flex justify-center items-center text-left -mx-10 '>
            <div className='bg-gray-950 p-5 rounded-lg'>
                <h1 className='text-base pb-2 font-bold'>Get to Market Faster</h1>
                <p className='text-sm pb-1 font-semibold'>
Offset months of ground-up smart contract and systems development with our simple but powerful REST APIs and SDKs that cover 95% of blockchain implementation and design patterns for games in just a few lines of code.
</p>
<div className='flex gap-2 '>
<p>View Our SDKs</p>
<img src={Arrow} alt='' className='w-[5%] h-3/4 py-1'/>
</div>
            </div>
            
            <div className='bg-gray-950 p-5 rounded-lg'>
                <h1 className='text-base pb-2 font-bold'>Focus on Building a Great Game</h1>
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