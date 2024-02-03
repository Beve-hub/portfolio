import React, {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import room  from '../Images/project5.png'
import design  from '../Images/Frame 118.jpg'
import vest  from '../Images/afri-tune.png'
import Northern from '../Images/1.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";


const Mobile = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex px-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 pb-[20rem] justify-center  cursor-pointer mt-[16rem]'> 
      <div  className='absolute top-10 right-20  items-center px-5 rounded-md sm:grid hidden' >  
                  
      <div className="flex justify-between gap-6">
        < GrHomeRounded onClick={() => navigate("/")} size='22' className='bg-[white] rounded-2xl p-1'/>  
        <IoIosArrowRoundBack onClick={() => navigate("/About")} size='24' className='bg-[white] rounded-2xl'/>
        <IoIosArrowRoundForward onClick={() => navigate("/Contact")} size='24' className='bg-[white] rounded-2xl'/>
        </div>
        </div>
        
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-6 justify-center my-8'>
        <div onClick={() => navigate("/Project")} className='bg-[#48587C]   text-white px-8 p-2  flex justify-center  rounded-lg'>
          <p >UIUX</p>
        </div>
        <div onClick={() => navigate("/Web")} className='bg-[#48587C]  px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
          <p >WEB Dev</p>
        </div>
        <div  className=' bg-black text-white  px-4 py-2 flex justify-center  rounded-lg cursor-pointer'>
          <p >Mobile Dev</p>
        </div> 
      </div>

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
            <img src={Northern} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Northern EV</h2>
            <p className='font-light text-sm'>Northern EV is an app that allow electric vehicle owners find the nearest charging station closes  to him and also allow user book a spot before time . it was designed using figma and developed with react native. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={vest} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Afri-tune</h2>
            <p className='font-light text-sm'>Afri-tune is a mobile application that helps tourist or traveller to learn and communicate with the locals in every part of west africa. it was design with figma and developed with react native.  </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={room} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Idea Roommate</h2>
            <p className='font-light text-sm'>Idea Roommate is an app that allow users to find accommodation or a roommate from with the city and outside the country . it was made designed using figma. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={design} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Beve Food</h2>
            <p className='font-light text-sm'>beve Food is  an ecommerce mobile application that allow users to place order for food and also make payment online, to be delievered within 10 to 30 minutes.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>

      </Swiper>
      </div>
    </section>
  )
}

export default Mobile
