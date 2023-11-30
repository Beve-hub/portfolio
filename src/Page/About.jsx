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

const About = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);

  return (
    <section className="h-screen flex px-6 md:flex-row grid-col-2 items-center justify-center overflow-hidden">

      <div data-aos='fade-left' className='w-[1640px] flex mx-auto justify-around'>
         <img src={img} alt='' className='sm:flex hidden '/>
        <div>
        <div className='md:w-[50rem] text-white '>
        <h1 className=' font-bold text-2xl flex justify-center mb-2'>About</h1>
        <p className='lg:w-[50rem] grid justify-center text-center font-sm mb-4'>I'm a full stack developer based in Nigeria with 
        2 years of experience in the development industry. My core 
        strengths are Frontend development (React), UI/UX(Figma), Graphics 
        Design and illustration (Photoshop). if you' re not here for that, you'll
         probably find me building projects and having fun on Twitter, or networking 
         badly on LinkedIn</p></div>
         <div className='md:grid gap-6 items-center justify-center mx-auto mb-6'>
          <div className='flex gap-12 sm:grid-row-2 mx-[10px] pb-4'>
            <img src={Html} alt='' className='w-[50px] h-[50px]'/>
            <img src={Reacto} alt='' className='w-[50px] h-[50px]'/>
            <img src={Css} alt='' className='w-[50px] h-[50px]'/>
            <img src={Git} alt='' className='w-[50px] h-[50px]'/>
            </div>
            <div className='flex gap-12 sm:grid-row-2 mx-[10px] pb-4'>
            <img src={Github} alt='' className='w-[50px] h-[50px] rounded-full'/>
            <img src={Javascript} alt='' className='w-[50px] h-[50px]'/>
            <img src={Nextjs} alt='' className='w-[50px] h-[50px]'/>
            <img src={Native} alt='' className='w-[50px] h-[50px]'/>
            </div>
             <div className='flex gap-12 sm:grid-row-2 mx-[12px]'>
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
