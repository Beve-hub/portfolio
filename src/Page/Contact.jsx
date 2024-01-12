import React from 'react'
import Email from '../Images/gmail.png'
import calendly from '../Images/calendly.png'
import {lint} from '../data'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";
import {useNavigate} from 'react-router-dom'

const Contact = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex px-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 pb-[10rem] justify-center  cursor-pointer '> 
      <div  className='absolute top-10 right-20  items-center px-5 rounded-md sm:grid hidden' >  
                  
        <div className="flex justify-between gap-6">
        < GrHomeRounded onClick={() => navigate("/")} size='22' className='bg-[white] rounded-2xl p-1'/>  
        <IoIosArrowRoundBack onClick={() => navigate("/Project")} size='24' className='bg-[white] rounded-2xl'/>
        <IoIosArrowRoundForward size='24' className='bg-[white] rounded-2xl'/>
        </div>
        </div>

        <h1 className='flex justify-center text-white font-bold text-lg '>Contact</h1>

      <div className='pt-[5rem] mr-8 max-w-[1200px] mx-auto grid justify-center md:grid-cols-2 gap-8 px-20 '>
       
       <div className='px-4 rounded-md py-6 w-[20rem] bg-[--primary-color] text-white '>
       <a href='mailto:victor.interface23@gmail.com' className=' flex gap-4'>
        <img src={Email} alt='' className='w-[20px] h-[20px]'/>Victor.interface23@gmail.com
       </a>
       </div>

       <div className='px-4 rounded-md py-6 w-[20rem] bg-[--primary-color] text-white '>
       <a href='https://calendly.com/victor_okeke/30min' className=' flex gap-4'>
       <img src={calendly} alt='' className='w-[40px] h-[40px]'/>Book a 30mins Meeting
       </a>
       </div>

      
       <div className='flex justify-center gap-8 px-4 rounded-md py-6 w-[20rem] bg-[--primary-color] text-white' >

        {lint.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:hover:bg-[#9747FF] p-2 rounded-full text-white origin-top-left   "
        >
          {item.icon}
        </a>
      ))}
       </div>
      </div>
       
      </div>
    </section>
   
  )
}

export default Contact
