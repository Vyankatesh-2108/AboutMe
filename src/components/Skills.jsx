import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import mongodb from '../assets/mongodb.png'
import nodejs from '../assets/nodejs.png'
import mysql from '../assets/mysql.png'
import firebase from '../assets/firebase.png'
import git from '../assets/git.png'
import figma from '../assets/figma.png'
import python from '../assets/python.png'


const Skills = () => {
  return (
    /** minimize grid size and add more languages */
    <div className='border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700 text-1xl md:text-2xl font-bold m-4'>
            My <br/> Tech <br/> Stack
        </h2>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={html} alt=''/>
            <p className='mt-2'>HTML</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={css} alt='' width={100} height={100}/>
            <p className='mt-2'>CSS</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={javascript} alt='' width={100} height={100}/>
            <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={tailwind} alt='' width={100} height={100}/>
            <p className='mt-2'>Tailwind</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={react} alt='' width={100} height={100}/>
            <p className='mt-2'>React</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={mongodb} alt='' width={100} height={100}/>
            <p className='mt-2'>MongoDB</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={nodejs} alt='' width={100} height={100}/>
            <p className='mt-2'>NodeJs</p>
        </div>

         <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={firebase} alt='' width={100} height={100}/>
            <p className='mt-2'>Firebase</p>
        </div>  

         <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={python} alt='' width={100} height={100}/>
            <p className='mt-2'>Python</p>
        </div> 

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={mysql} alt='' width={100} height={100}/>
            <p className='mt-2'>MySQL</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={figma} alt='' width={100} height={100}/>
            <p className='mt-2'>Figma</p>
        </div>

        <div className='flex flex-col items-center m-3 sm:my-0 w-[24px] md:w-[24px]'>
            <img src={git} alt='' width={100} height={100}/>
            <p className='mt-2'>Git</p>
        </div>

    </div>
  )
}

export default Skills
