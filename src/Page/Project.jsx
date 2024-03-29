import React, {useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Certvault  from '../Images/project1.png'
import room  from '../Images/project5.png'
import design  from '../Images/project6.png'
import vest  from '../Images/project3.png'
import aviator  from '../Images/project4.png'
import ves  from '../Images/afri-tune.png'
import Kiko  from '../Images/project2.png'
import Ezigbo from '../Images/ezigbo.jpg'
import Auxinbot from '../Images/auxibolt.png'
import nine from '../Images/nine.png'
import Northern from '../Images/1.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";


const Project = () => {
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
         <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={Auxinbot} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Auxibot</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Auxibot is a automatic bot system that allow users to create a task and set reminder 
            for a schedule program or event.it also function as a Ai system that where question between a 
            user and the bot.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>
         <SwiperSlide>
         <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={Northern} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Northern EV</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Northern EV is an app that allow electric vehicle owners find the nearest charging station closes  to him and also allow user book a spot before time . it was designed using figma and developed with react native. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={Ezigbo} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Ezigbo</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Ezigbo is a website that allow users check product condition and expiry date it also save it to the blockchain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>

        <SwiperSlide>
        <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={Certvault} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>
       
       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={design} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Beve Food</h2>
            <p className='font-light text-sm text-center w-[14rem]'>beve Food is  an ecommerce mobile application that allow users to place order for food and also make payment online, to be delievered within 10 to 30 minutes.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={ves} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Afri-tune</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Afri-tune is a mobile application that helps tourist or traveller to learn and communicate with the locals in every part of west africa. it was design with figma and developed with react native.  </p>
          </div>
       </SwiperSlide>
       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={nine} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>90's Fashion</h2>
            <p className='font-light text-sm text-center w-[14rem]'>90's Fashion is an app that allow users find the perfect tailor for him and fashion designer for him and has a market place for the sales of already made cloths. it was made designed using figma. </p>
          </div>
       </SwiperSlide>
       
      
       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={Kiko} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Kiko dashboard</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Took a job and was responsible for the design of admin dashboard and product landing page. it was made using figma </p>
          </div>
       </SwiperSlide>
       
       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={vest} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Smart vest</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Took a full application role at smart vest contract that lasted 2months was responsible for the user interface design design from start to finish</p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={aviator} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Aviator</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Aviator is an app that allow users to track their cargo shipment from  place of departure to the door step delivery. it was made designed using figma. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={room} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Idea Roommate</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Idea Roommate is an app that allow users to find accommodation or a roommate from with the city and outside the country . it was made designed using figma. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
       <div className='w-[16rem]  items-center justify-center text-white text-center border-none bg-[#48587C] p-6 rounded-lg hover:bg-[#9747FF]'>
            <img src={design} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Redesign</h2>
            <p className='font-light text-sm text-center w-[14rem]'>Redesigned a company e-learning website  where user can come and book a class and enroll for a course program and make payment.it was made with react.js and figma. </p>
          </div>
       </SwiperSlide>

      </Swiper>
      </div>
    </section>
  )
}

export default Project
