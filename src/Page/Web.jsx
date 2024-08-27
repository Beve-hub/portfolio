import React, {useEffect} from 'react'
import { link } from './../data';
import IMG1 from '../Images/anime.png'
import CV from '../Images/okeke victor Updated.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {  IoIosArrowRoundDown } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

const Web = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, []);
      
      const navigate = useNavigate();
      return (
        <section className=' h-screen   '>                   
          <div className="md:grid top-[20rem] right-[13rem] sm:absolute flex justify-center mt-[2rem]">
          {link.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="md:hover:bg-[#9747FF] h-fit p-6 rounded text-white origin-top-left rotate-0 sm:hover:bg-[#9747FF]"
            >
              {item.icon}
            </a>
          ))}
          </div>
    
       <div className='h-[40rem] grid justify-center items-center '>
          <div className=' grid gap-2 sm:grid  justify-center mx-auto' >
          
    
    
            
          <div className='absolute left-10 top-15 '>
          <div onClick={() => navigate("/About")}  className='flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
           
           <div className=''>
            <p>Hi, i'm</p>
            <h1 className='md:font-bold text-lg'>VIctor okeke</h1>
            </div>
           </div> 
    
           <div className='md:flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md my-3' onClick={() => navigate("/Contact")}  data-aos='zoom-forward'>
            <p className='flex text-start text-sm '>Are you in need of Front-End Developer(Web/mobile App) & UI/UXDesigner
             </p>
            <div  className="flex justify-between ml-0">
            
            </div>
            </div>
            
          <div className='md:flex bg-black font-sm text-white text-sm w-[12rem] justify-end py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
            <p><a href={CV} download >Download Resume</a></p>
          </div>
          </div>
          </div>
    
    
          <div>
          <div className='md:absolute left-[35rem] bottom-[5rem] sm:flex hidden' >
           <img src={IMG1} alt='hero_img' className=' w-[25rem]   ' />
          </div>
    
         <div className='absolute bottom-0 sm:grid hidden'>
          <p className='text-white'>Scroll </p>
          <IoIosArrowRoundDown size='24' color='white' className='bg-[#12121220] rounded-2xl animate-bounce'/>
         </div>
          
          </div> 
        </div>
        
        </section>
      )
}

export default Web
