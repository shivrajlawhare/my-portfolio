import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

    const experiences = [
        {
            id: 1,
            src: html,
            style: "shadow-orange-600",
            title: "HTML"
        },
        {
            id: 2,
            src: css,
            style: "shadow-blue-600",
            title: "CSS"
        },
        {
            id: 3,
            src: javascript,
            style: "shadow-yellow-600",
            title: "JavaScript"
        },
        {
            id: 4,
            src: reactImage,
            style: "shadow-blue-700",
            title: "React"
        },
        {
            id: 5,
            src: nextjs,
            style: "shadow-white",
            title: "NextJs"
        },
        {
            id: 6,
            src: tailwind,
            style: "shadow-cyan-600",
            title: "Tailwind"
        },
        {
            id: 7,
            src: graphql,
            style: "shadow-pink-600",
            title: "GraphQL"
        },
        {
            id: 8,
            src: github,
            style: "shadow-gray-600",
            title: "GitHub"
        },
    ]

  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full h-full text-white'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
                    Experience
                </p>
                <p className='py-6'>
                    These are the technologies I've worked with.
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3  gap-8 text-center px-12 py-8  sm:px-0'>

                {experiences.map(({id,src,style,title}) => (
                    <div key={id} className={'shadow-md rounded-lg hover:scale-105 duration-500 py-2 ' + style}>
                        <img src={src} className='w-20 mx-auto' alt="" />
                        <p className='mt-4'>
                            {title}
                        </p>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience