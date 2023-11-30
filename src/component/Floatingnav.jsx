import React, {useState} from "react";
import {float} from '../data.js';
import { NavLink} from 'react-router-dom';


const Floatingnav = () => {
    const [active, setActive] = useState(0);
    return (
     <div className='absolute bottom-0 w-full mx-3 md:hidden sm:backdrop-opacity-10 py-2 bg-[#142149] backdrop-opacity-30 px-6 '>
        <ul className=' flex justify-around items-center' >
            {float.map(({name,path,icon},index) => {
          return (
            <li key={index}  className='grid justify-center '>
                <NavLink to={path} onClick={() => setActive(index)} className='grid justify-center ' >
                   <span  className={`flex justify-center cursor-pointer duration-500 ${index === active && "bg-[royalblue] border-4 border-[#2B3752] p-4 -mt-10 rounded-full"}`}>{icon}</span>
                    <span className={`${active === index ? "translate-y-2 flex justify-center text-md font-regular duration-700 opacity-100" : "opacity-0 translate-y-10"}`}>{name}</span>
                </NavLink>
            </li>
          );
        })}
      </ul>
     </div>
    )
};

export default Floatingnav;