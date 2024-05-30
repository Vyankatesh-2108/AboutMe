import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import pdf from '../assets/cv.pdf'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black text-center'>
        
        {/* <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
                <img src={heroimage} alt='hero image'/>
        </div> */}

        <div className='col-span-3 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>
                <span className='primary-color'>
                    I'm a
                </span><br/>
                <TypeAnimation
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "Web Designer",
                        1000,
                        "Backend Dev",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            
            <p className='text-white sm:text-lg my-6 lg:text-x1'>
            I am a software developer who is passionate about creating immersive and user-centric digital experiences. With my technical proficiency, creative mindset, and commitment to excellence, I am confident in my ability to contribute to the success of any software development project.
            </p>

            <div className='my-8'>
                    <a href={pdf} download className='px-6 py-3 w-full rounded-x1 mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-6 py-3 w-full rounded-x1 mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>
            </div>
        </div>
    </div>
  )
}

export default Hero
