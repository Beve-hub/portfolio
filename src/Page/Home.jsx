import React, {useEffect} from 'react'
import { link } from './../data';
import IMG1 from '../Images/picture.png'
import CV from '../Images/tech Resume.pdf'
import Shapes from '../Images/Ellipse 8.png'
import Anime from '../Images/anime.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import {useNavigate} from 'react-router-dom'


const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  
  const navigate = useNavigate();
  return (
    <section className='max-w-[1200px] h-screen mx-auto grid md:grid-cols-2 gap-12 justify-center  overflow-hidden'>                   
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
        <div  className='absolute top-20 right-20  py-2 px-5 gap-4 rounded-md sm:grid hidden' >
        <p className='flex text-end text-sm text-[white]'>FEATURED PROJECT  </p>
        <div onClick={() => navigate("/Project")} className=' bg-white h-[3rem]  w-[10rem] items-center px-5 rounded-md sm:grid hidden' >                 
        <div className="flex justify-between">
        <p className='flex text-end text-sm'>Explore  </p>
        <IoIosArrowRoundForward size='24' className='bg-[#12121220] rounded-2xl'/>
        </div>
        </div>
        </div>

        <div  className='absolute bottom-20  py-2 px-5 gap-4 rounded-md sm:grid hidden' >
        <p className='flex text-end text-sm text-[white]'>CONTACT ME  </p>
         <div onClick={() => navigate("/Contact")} className=' bg-white h-[3rem]  w-[10rem] items-center px-5 rounded-md sm:grid hidden' >                 
        <div className="flex justify-between">
        <p className='flex text-end text-sm'>Hire Me</p>
        <SiMinutemailer size='24' className='bg-[#12121220] rounded-2xl'/>
        </div>
        </div>
        </div>
     
      <div onClick={() => navigate("/About")}  className='flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
       <img src={IMG1} alt='solve_img' className='w-[50px] h-[50px] rounded-full '/>
       <div className=''>
        <p>Hi, i'm</p>
        <h1 className='md:font-bold text-lg'>VIctor okeke</h1>
        </div>
       </div> 

       <div className='md:flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md' onClick={() => navigate("/About")}  data-aos='zoom-in'>
        <p className='flex text-start text-sm'>A Front-End Developer / UI UXDesigner
        Graphic Designer.           </p>
        <div  className="flex justify-between ml-0">
        
        <IoIosArrowRoundForward size='24' className='bg-[#12121220] rounded-2xl'/>
        </div>
        </div>
        
      <div className='md:flex bg-black font-sm text-white text-sm w-[12rem] ml-[8rem] py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
        <p><a href={CV} download >Download Resume</a></p>
      </div>
      </div>


      <div>
      <div className=''>
       <img src={Anime} alt='hero_img' className='md:absolute left-[45rem] w-[25rem] top-[13rem] z-10 sm:grid hidden' data-aos='zoom-in'/>
      </div>
      <img src={Shapes} alt='elip' className='md:absolute w-[40px] bottom-10 left-[40rem] animate-bounce sm:flex hidden ' />
      </div> 
    </div>
    </section>
  )
}

export default Home
