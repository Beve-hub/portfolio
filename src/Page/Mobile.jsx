import {useNavigate} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import IMG1 from '../Images/learn.png'
import Afritune from '../Images/afri-tune.png'
import beve from '../Images/beve-food.png'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './Style.css';

const Mobile = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex p-10 md:flex-row grid-col-2 items-center justify-center overflow-hidden">
        <div  className=' max-w-[1640px] md:mx-auto grid-cols-2 gap-6 px-20 pb-[10rem] justify-center  cursor-pointer mt-[16rem]'> 
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-6 justify-center my-10'>
        <div className=' bg-[#48587C] text-white px-8 p-2  flex justify-center  rounded-lg'  onClick={() => navigate("/Project")}>
          <p >UIUX</p>
        </div>
        <div onClick={() => navigate("/Web")} className='bg-[#48587C]  px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
          <p >WEB Dev</p>
        </div>
        <div  className='bg-black  text-white px-4 py-2 flex justify-center  rounded-lg cursor-pointer'>
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
            <img src={Afritune} alt='hero_img' className='h-[30]' />
            <h2 className='font-bold my-3 text-lg'>AFri-Tone</h2>
            <p className='font-light text-sm'>Afri-tone is a mobile app that help foreigners and tourist who are interested in coming to west africa to learn and  speak their language and also communicate with the locals around the area easly.it was designed using figma and reactNative. </p>
          </div>
       </SwiperSlide>

       <SwiperSlide>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={beve} alt='hero_img' className='h-[30]' />
            <h2 className='font-bold my-3 text-lg'>Beve Food</h2>
            <p className='font-light text-sm'>beve food is a an ecommerce app that helps users place and order food from the comfort of his home and get delivered to him/her within a short period of time.it was designed using figma and reactNative. </p>
          </div>
       </SwiperSlide>
      <SwiperSlide>
        
        <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
           <img src={IMG1} alt='hero_img' />
            <p className='font-light text-sm'> Still learning </p>
          </div>
      </SwiperSlide>

      </Swiper>
      </div>
    </section>
  )
}

export default Mobile
