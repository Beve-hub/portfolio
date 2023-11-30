import React from 'react'
import { links } from '../data';
import { NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='fixed w-full h-[5rem] bg-[--primary-color] flex justify-center sm:grid hidden '>
      <ul className='  py-6 px-12  items-center gap-14 md:flex hidden text-md  '>
        {links.map(({name,path},index) => {
          return (
            <li key={index} className='' >
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
