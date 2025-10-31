import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Menubar from '../Menubar'
import logo from '../Images/logo.jpg'


function Navbar() {

  const navigate = useNavigate()

  return (
    <>

      <div className='  flex  items-center  justify-between w-full'>
        <div className='flex  items-center  '>
          <nav className='cursor-pointer mr-[50px] lg:mr-[80px] flex justify-start m-[4px] '>
            <img src={logo}
              className='max-w-[100px] h-[100px] rounded-[50%] bg-red-400 border' alt="loading.."
              onClick={() => { navigate('/') }} />

          </nav>

          <ul className=' flex gap-[15px] lg:gap-[100px] md:text-[20px] sm:text-[17px]'>
            <li><NavLink to='/'
              className=' hover:shadow-md hover:border-t-[0.3px] border-gray-300  pr-6 pl-6 p-[3px]  rounded-2xl hover:text-orange-600 '
            >Home</NavLink>
            </li>
            <li><NavLink to='/about'
              className='hover:shadow-md hover:border-t-[0.3px] border-gray-300  pr-6 pl-6 p-[3px]  rounded-2xl hover:text-orange-600'
            >About</NavLink></li>
            <li><NavLink to='/contact'
              className=' hover:shadow-md hover:border-t-[0.3px] border-gray-300  pr-6 pl-6 p-[3px]  rounded-2xl hover:text-orange-600 '
            >Contact</NavLink></li>
            <li><NavLink to='/contact'
              className='hidden lg:block hover:shadow-md hover:border-t-[0.3px] border-gray-300  pr-6 pl-6 p-[3px]  rounded-2xl hover:text-orange-600 '
            >Academics</NavLink></li>
            <li><NavLink to='/open'
              className=' hover:text-orange-600 hover:border-t-[0.3px] border-gray-300  pr-6 pl-6 p-[3px]  rounded-2xl'
            >Admissions open</NavLink></li>
          </ul>
        </div>
        <div>

        </div>
        <div className='lg:mr-[60px]'>
          <Menubar />
        </div>
      </div>
    </>



  )
}

export default Navbar
