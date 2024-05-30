import React from 'react'
import aboutImg from '../assets/about.jpg'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
                    <p className='text-base lg:text-lg text-justify'>
                    I am a software developer who is passionate about creating immersive and user-centric digital experiences. With my technical proficiency, creative mindset, and commitment to excellence, I am confident in my ability to contribute to the success of any software development project. In addition to my technical skills, I am a problem solver and possess a strong analytical mindset. I am constantly seeking opportunities to enhance my skills and stay up-to-date with the latest industry trends and best practices
                    </p>
                </div>
            </div>

            <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}></img>

      </div>
    </div>
  )
}

export default About
