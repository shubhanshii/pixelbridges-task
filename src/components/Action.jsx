import React from 'react'
import AppButton from './AppButton'

const Action = () => {
  return (
    <div className='text-center px-4 md:px-0 lg:px-6 xl:px-44 2xl:px-72'>
        <h1 className='text-[40px] text-white font-bold pt-20 pb-6 md:px-4'>See MetaFab in action</h1>
        <p className='text-lg font-semibold pb-14 md:px-10 2xl:px-36 xl:px-52 lg:px-32 text-[#FFFFFFCC]'>Check out Arcane Survivor, a demo game implementing MetaFab products like player authentication, gasless transactions, game currencies, tokenized items, shops, crafting, & more. Built in under a week by a developer with no prior blockchain experience.</p>
        <div className='bg-black py-32 md:py-64 rounded-xl'>
        <div className='w-52 mx-auto'>
            <button className='p-[1px]  text-white bg-btn rounded-lg'>
              <div className='bg-gray-900 px-5 py-[4px] rounded-lg flex flex-row-reverse items-center justify-center gap-3'>
              
                <p>Play Arcane Survivor</p>
              </div>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Action