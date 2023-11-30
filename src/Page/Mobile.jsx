import React, {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from '../Images/project1.png'
import IMG2 from '../Images/project2.png'
import IMG3 from '../Images/project3.png'
import IMG4 from '../Images/project4.png'
import IMG5 from '../Images/project5.png'
import IMG6 from '../Images/project6.png'
import IMG7 from '../Images/project1.png'
import IMG8 from '../Images/project1.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';

const Mobile = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex p-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 justify-center  cursor-pointer '> 
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-6 justify-center m-10'>
        <div onClick={() => navigate("/Project")} className=' bg-[#48587C] text-white px-8 p-2  flex justify-center  rounded-lg'>
          <p >UIUX</p>
        </div>
        <div onClick={() => navigate("/Web")} className='bg-[#48587C]  px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
          <p >WEB Dev</p>
        </div>
        <div  className='bg-black  text-white px-4 py-2 flex justify-center  rounded-lg cursor-pointer'>
          <p >Mobile Dev</p>
        </div> 
      </div>

      <div className=' max-w-[1640px] md:mx-auto grid-col grid-cols-2 gap-10 px-20 justify-center w-[80rem]  cursor-pointer '> 
       
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG1} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            
          </div>
       </SwiperSlide>
      </Swiper>
        
      </div>
      </div>
    </section>
  )
}

export default Mobile
