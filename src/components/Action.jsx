import React from 'react'
import AppButton from './AppButton'

const Action = () => {
  return (
    <div className='text-center px-72 text-white'>
        <h1 className='text-4xl font-bold pt-20 pb-10'>See MetaFab in action</h1>
        <p className='text-lg font-semibold pb-14 px-36'>Check out Arcane Survivor, a demo game implementing MetaFab products like player authentication, gasless transactions, game currencies, tokenized items, shops, crafting, & more. Built in under a week by a developer with no prior blockchain experience.</p>
        <div className='bg-black py-64 rounded-xl'>
        <div className='w-52 mx-auto'>
            <button className='p-[1px]  text-white bg-btn rounded-lg w-full'>
              <div className='bg-gray-900 px-5 py-[4px] rounded-lg flex flex-row-reverse items-center justify-center gap-3'>
              
                <p>Play Arcane Survivor</p>
              </div>
            </button>
          </div>
        {/* <div className=' mx-auto w-48 bg-btn rounded-lg '>
            <button className='bg-gray-900 px-4 py-[1px] '>Play Arcane Survivor</button>
        </div> */}</div>
    </div>
  )
}

export default Action