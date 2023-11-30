import React from 'react'
import {useNavigate} from 'react-router-dom'
import IMG1 from '../Images/project1.png'
import IMG2 from '../Images/project2.png'
import IMG3 from '../Images/project3.png'
import IMG4 from '../Images/project4.png'
import IMG5 from '../Images/project5.png'
import IMG6 from '../Images/project6.png'
import IMG7 from '../Images/project1.png'
import IMG8 from '../Images/project1.png'

const Project = () => {

  
  const navigate = useNavigate();

  return (
    <div className='py-[10rem]  max-w-[1640px] md:mx-auto grid-col  grid-cols-2 gap-10 px-20 justify-center w-[80rem]  cursor-pointer '> 
      <h1 className='flex justify-center font-bold text-white text-2xl'>Our Amazing Project</h1>
      <div className='flex gap-10 justify-center m-10'>
        <div className=' bg-black text-white px-8 p-2  flex justify-center  rounded-lg'>
          <p >All</p>
        </div>
        <div onClick={() => navigate("/UIUX")} className='bg-[#48587C]  px-4 p-2 text-white  flex justify-center rounded-lg cursor-pointer'>
          <p >UIUX</p>
        </div>
        <div onClick={() => navigate("/Webdev")} className='bg-[#48587C]  text-white px-4 py-2 flex justify-center  rounded-lg cursor-pointer'>
          <p >WEB Dev</p>
        </div>
      </div>
      <div className='py-[5rem] max-w-[1640px] md:mx-auto grid-col grid-cols-2 gap-10 px-20 justify-center w-[80rem]  cursor-pointer '> 
        <div className='flex gap-20 mb-10'>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG1} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>

          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG2} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>

           <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG3} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>

          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG4} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
        </div>
        <div className='flex gap-20 '>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG5} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>

          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG6} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>

           <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG7} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
          <div className='w-[15rem] items-center text-white text-center border-none bg-[#48587C] p-4 rounded-lg hover:bg-[#9747FF]'>
            <img src={IMG8} alt='hero_img' />
            <h2 className='font-bold my-3 text-lg'>Certvault</h2>
            <p className='font-light text-sm'>Certvault is a website that allow sector to upload and send certificate in bulk and also save it to the block chain cloud using smart contract for the backend.it was made with react.js and figma. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
