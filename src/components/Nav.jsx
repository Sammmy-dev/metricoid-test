import React from 'react'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
           {/* <img src={headerLogo} alt="Logo" className='w-[130px] h-[29px]'/> */}
        </a>
        <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden bg-transparent self-end mr-1'>
              <li>
                <a className='font-montserrat leading-normal text-lg text-slate-gray hover:text-[#FF6452] duration-200'>Home</a>
              </li>
        </ul>
        <div className='hidden max-lg:block'>
          <img src="" alt="Hamburger" className='w-[30px] h-[30px]'/>
        </div>
      </nav>
    </header>
  )
}

export default Nav