import React, {useEffect} from 'react'
import Css  from '../Images/css.png'
import Html  from '../Images/html 1.png'
import Reacto  from '../Images/react 1.png'
import Git  from '../Images/git 1.png'
import Github  from '../Images/Github 1.png'
import Javascript  from '../Images/js 1.png'
import Figma  from '../Images/figma 1.png'
import Tai  from '../Images/tailwindcss.png'
import Php  from '../Images/photoshop.png'
import illustrator  from '../Images/illustrator.png'
import Native  from '../Images/native.png'
import Nextjs  from '../Images/next js.png'
import img  from '../Images/picture 2.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import {useNavigate} from 'react-router-dom'

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  const navigate = useNavigate();
  return (
    <section className="h-screen flex px-6 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      
      <div  className='w-[1640px] flex mx-auto justify-around pb-[10rem] mt-[16rem]'>

      <div  className='absolute top-10 right-20  items-center px-5 rounded-md sm:grid hidden' >                 
        <div className="flex justify-between gap-2">
        <IoIosArrowRoundBack onClick={() => navigate("/")} size='24' className='bg-[white] rounded-2xl'/>
        <IoIosArrowRoundForward onClick={() => navigate("/Project")} size='24' className='bg-[white] rounded-2xl'/>
        </div>
        </div>

         <img src={img} alt='' className='w-[25rem] rounded-t-[15rem] sm:flex hidden '/>
        <div>
        <div className='md:w-[40rem] text-white '>
        <h1 className=' font-bold text-2xl flex justify-center item-center mb-2'>About</h1>
        <p className='lg:w-[40rem] grid justify-center  font-sm mb-4 ml-'>I'm a full stack developer based in Nigeria with 
        54 years of experience in the development industry. My core 
        strengths are Frontend development (React),(React Native), UI/UX(Figma), Graphics 
        Design and illustration (Photoshop). if you' re not here for that, you'll
         probably find me building projects and having fun on Twitter, or networking 
         badly on LinkedIn</p></div>
         <div className='md:grid gap-2 items-center justify-center mx-auto mb-6'>
          <div className='flex gap-8 sm:grid-row-2 mx-[10px] pb-4'>
            <img src={Html} alt='' className='w-[50px] h-[50px]'/>
            <img src={Reacto} alt='' className='w-[50px] h-[50px]'/>
            <img src={Css} alt='' className='w-[50px] h-[50px]'/>
            <img src={Git} alt='' className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex gap-8 sm:grid-row-2 mx-[10px] pb-4'>
            <img src={Github} alt='' className='w-[50px] h-[50px] rounded-full'/>
            <img src={Javascript} alt='' className='w-[50px] h-[50px]'/>
            <img src={Nextjs} alt='' className='w-[50px] h-[50px] rounded-full'/>
            <img src={Native} alt='' className='w-[50px] h-[50px] rounded-full'/>
            </div>
             <div className='flex gap-8 sm:grid-row-2 mx-[12px]'>
            <img src={Php} alt='' className='w-[50px] h-[50px] rounded-full'/>
            <img src={Tai} alt='' className='w-[50px] h-[50px]'/>
            <img src={illustrator} alt='' className='w-[50px] h-[50px]'/>
            <img src={Figma} alt='' className='w-[50px] h-[50px]'/>
            </div>
         </div>
         </div>
     </div>
    </section>
  )
}

export default About
