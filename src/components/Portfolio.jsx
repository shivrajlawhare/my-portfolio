import React from 'react'
import memoriesApp from '../assets/portfolio/memoriesApp.png'
import smartBrains from '../assets/portfolio/smartBrains.png'
import robofriends from '../assets/portfolio/robofriends.png'
import tictactoe from '../assets/portfolio/tictactoe.png'
import C from '../assets/portfolio/C++.jpg'
import solidity from '../assets/portfolio/solidity.png'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: memoriesApp,
            demo: 'https://memories-app2603.netlify.app/',
            code: 'https://github.com/shivrajlawhare/Memories-App'
        },
        {
            id: 2,
            src: smartBrains,
            demo: 'https://github.com/shivrajlawhare/smartbrains',
            code: 'https://github.com/shivrajlawhare/smartbrains-api'
        },
        {
            id: 3,
            src: robofriends,
            demo: 'https://robofriends-nine-steel.vercel.app/',
            code: 'https://github.com/shivrajlawhare/robofriends'
        },
        {
            id: 4,
            src: tictactoe,
            demo: 'https://shivrajlawhare.github.io/tictactoe/',
            code: 'https://github.com/shivrajlawhare/tictactoe'
        },
        {
            id: 5,
            src: C,
            demo: 'https://github.com/shivrajlawhare/bus_booking_system',
            code: 'https://github.com/shivrajlawhare/bus_booking_system'
        },
        {
            id: 6,
            src: solidity,
            demo: 'https://github.com/shivrajlawhare/Learn-Solidity',
            code: 'https://github.com/shivrajlawhare/Learn-Solidity'
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-gray-500'>
                    Portfolio
                </p>
                <p className='py-6'>
                    check out some of my work right here.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {
                    portfolios.map(({id,src,demo,code}) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center '>
                                <a className='flex justify-center items-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer" href={demo}>Demo</a>
                                <a className='flex justify-center items-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' target='_blank' rel="noreferrer" href={code}>Code</a>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio