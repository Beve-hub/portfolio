import React from 'react'
import { links } from '../data';
import { NavLink} from 'react-router-dom';
import Logo from '../Images/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[5rem] top-5  justify-center z-99 sm:grid hidden '>
     <div className=' flex my-6 items-center justify-between bg-slate-500 rounded-full'>
     <a href='/' className='p-2 bg-slate-900 rounded-full border-r-4 shadow-slate-50'>
        <img src={Logo} alt='' className='h-[4rem] w-[4rem] '/>
      </a>
      <div className="">
      <ul className='  py-6 px-12  items-center gap-8 md:flex hidden text-md  '>
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
    
     </div>      
    </div>
  )
}

export default Navbar
