import React from 'react'
import { links } from '../data';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[5rem] bg-[--primary-color] sm:flex hidden '>
      <ul className='  py-6 px-12 gap-14 items-center md:flex hidden text-md  '>
        {links.map(({name,path},index) => {
          return (
            <li key={index} className=' hover:bg-white w-10 h-1 rounded ' >
                <NavLink to={path} >
                    {name}
                </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Navbar
