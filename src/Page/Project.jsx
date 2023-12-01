import React, {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Certvault  from '../Images/project1.png'
import room  from '../Images/project5.png'
import design  from '../Images/project6.png'
import vest  from '../Images/project3.png'
import aviator  from '../Images/project4.png'
import Kiko  from '../Images/project2.png'
import Ezigbo from '../Images/ezigbo.jpg'
import nine from '../Images/nine.png'
import Northern from '../Images/1.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';

const Project = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex px-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 pb-[10rem] justify-center  cursor-pointer '> 
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-6 justify-center my-12'>
        <div className=' bg-black text-white px-8 p-2  flex justify-center  rounded-lg'>
          <p >UIUX</p>
        </div>
        <div onClick={() => navigate("/Web")} className='bg-[#48587C]  px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
          <p >WEB Dev</p>
        </div>
        <div onClick={() => navigate("/Mobile")} className='bg-[#48587C]  text-white px-4 py-2 flex justify-center  rounded-lg cursor-pointer'>
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
            <p className='font-light text-sm'>Northern EV is an app that allow electric vehicle owners find the nearest charging station closes  to him with an integrated mapping systemt. it was made designed using figma. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={Ezigbo} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Ezigbo</h2>
            <p className='font-light text-sm'>Ezigbo is a website that allow users check product condition and expiry date it also save it to the blockchain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>

        <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={Certvault} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>
       

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={nine} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>90's Fashion</h2>
            <p className='font-light text-sm'>90's Fashion is an app that allow users find the perfect tailor for him and fashion designer for him and has a market place for the sales of already made cloths. it was made designed using figma. </p>
          </div>
       </SwiperSlide>
       
      
       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={Kiko} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Kiko dashboard</h2>
            <p className='font-light text-sm'>Took a job and was responsible for the design of admin dashboard and product landing page. it was made using figma </p>
          </div>
       </SwiperSlide>
       
       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={vest} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Smart vest</h2>
            <p className='font-light text-sm'>Took a full application role at smart vest contract that lasted 2months was responsible for the user interface design design from start to finish</p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={aviator} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Aviator</h2>
            <p className='font-light text-sm'>Aviator is an app that allow users to track their cargo shipment from  place of departure to the door step delivery. it was made designed using figma. </p>
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
            <h2 className='font-bold my-3 text-lg'>Redesign</h2>
            <p className='font-light text-sm'>Redesigned a company e-learning website  where user can come and book a class and enroll for a course program and make payment.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>

      </Swiper>
      </div>
    </section>
  )
}

export default Project
