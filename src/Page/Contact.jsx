import React from 'react'
import Email from '../Images/gmail.png'
import {lint} from '../data'

const Contact = () => {
  return (
    <div className='pt-[10rem]'>
      <h1 className='flex justify-center text-white font-bold text-lg '>Contact</h1>
      <div className='pt-[5rem] mr-8 max-w-[1200px] mx-auto grid justify-center md:grid-cols-2 gap-12 px-20 '>
       
       <div className='px-4 rounded-md py-6 w-[20rem] bg-[--primary-color] text-white animate-bounce'>
       <a href='mailto:victor.interface23@gmail.com' className=' flex gap-4'>
        <img src={Email} alt='' className='w-[20px] h-[20px]'/>Victor.interface23@gmail.com
       </a>
       </div>

       <div className='flex justify-center gap-8 px-4 rounded-md py-6 w-[20rem] bg-[--primary-color] text-white animate-bounce' >

        {lint.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:bg-[#9747FF] p-2 rounded-full text-white origin-top-left   "
        >
          {item.icon}
        </a>
      ))}
       </div>
      </div>
    </div>
  )
}

export default Contact
