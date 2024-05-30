import React from 'react'
import proj1 from "../assets/vocal_vibes.png"
import proj2 from "../assets/pune_covid_care.png"
import proj3 from "../assets/music_player.png"
import proj4 from "../assets/AIimg1.png"
import proj5 from "../assets/text_to_speech.png"
import proj6 from "../assets/grid_art_system.png"


const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/**Project 1 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj1} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>Vocal Vibes
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://vocalvibes-8b0a8.web.app/' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            {/**Project 2 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj2} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>Pune Covid Care
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://pune-covid-care.firebaseapp.com/index.html' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            {/**Project 3 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj3} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>Music Player
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://vyankatesh-2108.github.io/Music_Player/' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            {/**Project 4 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj4} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>AI Image Creator
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://github.com/Vyankatesh-2108/Automated-Image-Creator' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>


            {/**Project 5 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj5} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>Text to Speech Converter
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://text-to-speech-b6320.web.app/' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {/**Project 6 */}
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center h-[180px] bg-cover relative'>
                <img src={proj6} alt=''/>
                {/** Live button demo link */}
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-1xl font-bold text-white tracking-wider'>Grid Art Design
                    </span>
                    <div className='pt-8-text-center'>
                    <a href='https://github.com/Vyankatesh-2108/Grid_Art_Design' target='_blank' rel='noopener noreferrer'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Live
                            </button>
                        </a>
                    </div>
                </div>
            </div>



        </div>
      
    </div>
  )
}

export default Work
