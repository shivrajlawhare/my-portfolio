import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className='w-full h-full bg-gradient-to-b from-gray-800 to-black text-white'>
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
            My name is Shivraj, and I am a dedicated Full Stack Developer with a passion for building web applications using modern technologies. With extensive experience in the industry, I specialize in React, Node.js, and MongoDB. My background includes working on diverse projects that range from small business websites to large-scale web applications, ensuring each project is completed with the highest standards of quality and functionality.
            </p>

            <br />

            <p className='text-xl'>
            Beyond my professional life, I am passionate about video editing and content creation. These hobbies allow me to explore my creativity and bring a unique perspective to my work as a developer. I believe in the power of collaboration, integrity, and dedication, and I strive to incorporate these values into my work daily. My goal is to create impactful web applications that not only meet clients' needs but also provide an exceptional user experience, contributing positively to the digital landscape.
            </p>
        </div>
    </div>
  )
}

export default About