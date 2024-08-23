import React from 'react'
import { data } from '../utils/data';


const Mobile = () => {
  return (
    <div className='grid md:grid-cols-4 gap-3 '>
    {data.map((item, index) => (
      <div key={index} className=' bg-slate-500 rounded-lg p-3 hover:bg-[#9747FF]'>
        <div >
        <img src={item.image} alt='' className='w-[15rem] h-[10rem]'/>
       <h3 className='font-bold my-3 text-xl text-[#ffffff100]'>{item.title}</h3>
       <p className='w-[15rem] text-[#121212e6] text-sm'>{item.description}</p>
       <div className='  flex gap-4 mt-2'> 
        <p className='bg-[#09349a]   text-white px-8 p-2  flex justify-center  rounded-lg hover:bg-[#4791ff]   '>
        <a href={item.behanceURL}> Behance </a></p> 
        <p className='bg-[#0f131c]   text-white px-8 p-2  flex justify-center  rounded-lg hover:bg-[#322e35] '>
         <a href={item.URL} > URL </a>
        </p>   
       </div>  
       </div>        
      </div>
    ))}
   
  </div>
  )
}

export default Mobile
