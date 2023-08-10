import React from 'react'
import AppButton from './AppButton'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import image7 from '../assets/image7.png'
import image8 from '../assets/image8.png'
import image9 from '../assets/image9.png'
import image10 from '../assets/image10.png'
import image11 from '../assets/image11.png'
import image12 from '../assets/image12.png'
import Arrow from '../assets/right-removebg-preview.png'

const Solutions = () => {
    const cards=[{
        icon: image1,
        title: 'No Friction For Players Or Developers',
        desc: 'Blend blockchain invisibly into the backbone of your games. Designed for all developers, we support 10+ programming languages and have complete Unreal Engine & Unity SDKs.',
        about: 'View all SDKs',
    },
{
    icon: image2,
    title: 'Player Management, Registration & Auth',
    desc: 'Streamline player authentication & registration through our custom white-label onboarding flow. Set, update & manage any game-related player data - no database required.',
    about: 'Learn About Auth Systems',
},
{
    icon: image3,
    title: 'Managed Wallets & External Wallets',
    desc: 'Generate player wallets automatically & support external wallets (EOAs) through Metamask, Coinbase Wallet & WalletConnect. Write one set of code for interactions with any wallet type',
    about: 'Learn About Player Wallets',
},
{
    icon: image4,
    title: 'Gasless & Fully Managed Transactions',
    desc: 'Eliminate obtrusive gas fees, wallet popups & prompts during gameplay through our systems that forward, sign, send, prioritize, retry & verify transactions automatically.',
    about: 'Learn About Transactions',
},
{
    icon: image5,
    title: 'Game Currencies (ERC20)',
    desc: 'Launch blockchain-based in-game currencies with one line of code. Design, monitor & fine-tune your economy with real-time visibility into how players engage and transact.',
    about: 'Learn About Game Currencies',
},
{
    icon: image6,
    title: 'Digital Collectibles & Items (ERC1155)',
    desc: 'Create & manage tokenized weapons, skins, materials, consumable or other items. Enable traditional player experiences while interacting with web3 systems under the hood.',
    about: 'Learn About Items',
},
{
    icon: image7,
    title: 'Shops & Item Crafting (On-Chain)',
    desc: 'Launch highly configurable shop and crafting systems in under 5 minutes to allow players to purchase, sell and craft in game items with your game currency or other currencies.',
    about: 'Learn About Shops & Crafting',
},
{
    icon: image8,
    title: 'Lootboxes(On-Chain)',
    desc: 'Create & control looboxes with mechanics that use weighted probabilities to determine randomized items or rewards. Set item or progress prerequisites to earn or open.',
    about: 'Learn About Lootboxes',
},
{
    icon: image9,
    title: 'Full Interoperability Between Games',
    desc: 'Leverage infrastructure that works seamlessly across partner ecosystems and other MetaFab games. Limitless opportunities for cross-pollination and collaboration.',
    about: 'Learn About Interoperability',
},
{
    icon: image10,
    title: 'Contract Ownership (No Lock-In)',
    desc: 'Transfer ownership of contracts deployed with MetaFab to an external wallet. Full autonomy to revoke our role as your infrastructure partner; whenever you want.',
    about: 'Learn About No Lock-in',
},
{
    icon: image11,
    title: 'Free Without The Premium',
    desc: 'Ditch the limits, paywalls, restrictions, & upfront or hidden fees. We want our tech to be open, accessible, & free without a creativity and adoption limiting monetization model.',
    about: 'Learn About Business Model',
    
},
{
    icon: image12,
    title: 'Community Driven & Developed',
    desc: 'Believe in a team that listens, moves fast, & loves what they do. We listen to our community, co-create practical solutions, and are passionate about building a better way to web3.',
    about: 'Learn About Our Philosphy',
}
]
  return (
    <div className='mt-24 px-4 lg:px-12 xl:px-72'>
        <div className='text-center lg:px-20'>
            <h1 className='text-[32px] md:text-5xl pb-10 font-bold text-white'>The solutions we wish we had when building our games</h1>
            <p className='text-slate-200 text-lg md:text-xl font-semibold'>Interacting with blockchain systems should feel familiar for both players and developers. Read more about how our suite of tools makes this possible:</p>
        </div>
        <div className=' flex justify-center items-center'>
        <div className='mt-7 w-64 mb-10'>
            <AppButton>View All Developer Docs</AppButton>
        </div>
        </div>
        
        <div className='grid grid-cols-1 gap-10  lg:gap-5 md:grid-cols-2 lg:grid-cols-3 '> 
{
cards.map((item)=>
(
    
        <div className='bg-slate-950 border-black py-5 px-3 rounded-xl  '>
        <div className='flex items-center gap-4 mb-2'>
            <img src={item.icon} alt='' className='bg-slate-800 border-gray-400 rounded-xl w-[20%] p-1'/>
            
                <h1 className='font-semibold text-base text-white '>{item.title}</h1>
            
        </div>
        <p className='text-slate-300 text-sm font-normal pt-2'>
            {item.desc}
</p>
<div className='flex gap-4 cursor-pointer pt-2'>
    <p className='text-white'>{item.about}</p>
<img src={Arrow} alt='' className='w-[5%] h-3/4 py-1.5'/>
</div>
        </div>
        
))
}</div>
    </div>
  )
}

export default Solutions