import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Certvault  from '../Images/project1.png'
import design  from '../Images/project6.png'
import Ezigbo from '../Images/ezigbo.jpg'
import Auxinbot from '../Images/auxibolt.png'

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { GrHomeRounded } from "react-icons/gr";


const Web = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex px-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
      <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 pb-[10rem] justify-center  cursor-pointer mt-[16rem]'> 
      <div  className='absolute top-10 right-20  items-center px-5 rounded-md sm:grid hidden' >  
                  
      <div className="flex justify-between gap-6">
        < GrHomeRounded onClick={() => navigate("/")} size='22' className='bg-[white] rounded-2xl p-1'/>  
        <IoIosArrowRoundBack onClick={() => navigate("/About")} size='24' className='bg-[white] rounded-2xl'/>
        <IoIosArrowRoundForward onClick={() => navigate("/Contact")} size='24' className='bg-[white] rounded-2xl'/>
        </div>
        </div>
     
        
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-6 justify-center my-14'>
        <div onClick={() => navigate("/Project")} className='bg-[#48587C]  px-8 p-2  flex justify-center  rounded-lg'>
          <p >UIUX</p>
        </div>
        <div  className=' bg-black text-white   px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
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
            <img src={Auxinbot} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Auxibot</h2>
            <p className='font-light text-sm'>Auxibot is a automatic bot system that allow users to create a task and set reminder for a schedule program or event.it also function as a Ai system that where question can be asked and interraction between a user and the bot.it was made with react.js and figma. </p>
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

export default Web
