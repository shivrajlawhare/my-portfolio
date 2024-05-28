import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div
            className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center  w-full h-full'>
            <div className='
                pb-8 '>
                <p className=' 
                    text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis magnam ad vero quas quis iste nesciunt repudiandae ut labore eos harum, maiores nobis rerum ea officiis sint, quasi doloribus provident. Eveniet cum quia magni suscipit vero dolore rerum animi laborum, eligendi consequuntur, praesentium, repellat provident nesciunt hic deserunt sit ad!
            </p>

            <br />

            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nulla cum doloremque, eos quas dolore fuga vel libero aliquid. Id qui quidem deleniti tempora expedita libero enim ratione et, quasi facere tenetur optio aperiam, laboriosam inventore voluptate, odio quos totam accusantium! Atque ipsa in tenetur dignissimos nihil perspiciatis vero ab!
            </p>
        </div>
    </div>
  )
}

export default About