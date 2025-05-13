import React from 'react'
import {headerLogo} from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
           <img src={headerLogo} alt="Logo" className='w-[130px] h-[29px]'/>
        </a>
        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden bg-transparent self-end mr-1'>
           {navLinks.map((items)=>{
            return(
              <li key={items.label}>
                <a href={items.href} className='font-montserrat leading-normal text-lg text-slate-gray hover:text-[#FF6452] duration-200'>{items.label}</a>
              </li>
            )
           })}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt="Hamburger" className='w-[30px] h-[30px]'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav