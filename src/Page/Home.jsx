import React, {useEffect} from 'react'
import { link } from './../data';
import IMG1 from '../Images/picture.png'
import CV from '../Images/resume1.pdf'
import Shape from '../Images/Ellipse 7.png'
import Shapes from '../Images/Ellipse 8.png'
import Anime from '../Images/anime.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'


const Home = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, []);
  
  const navigate = useNavigate();
  return (
    <section className='max-w-[1200px] h-screen mx-auto grid md:grid-cols-2 gap-12 justify-center  overflow-x-y-hidden'>                   
      <div className="md:grid top-[20rem] right-[13rem] sm:absolute flex justify-center mt-[3rem]">
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
      <div onClick={() => navigate("/About")} className='flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
       <img src={IMG1} alt='solve_img' className='w-[50px] rounded-full '/>
       <div className=''>
        <p>Hi, i'm</p>
        <h1 className='md:font-bold text-lg'>VIctor okeke</h1>
       </div>
       </div>
       <div className='md:flex bg-white w-[20rem] py-2 px-5 gap-4 rounded-md' data-aos='zoom-in'>
        <p className='flex text-end text-sm'>A Front-End Developer / UI UXDesigner
                         Graphic Designer</p>
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
