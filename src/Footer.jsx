import React from 'react'
import logo from './Images/logo.jpg'
import { useNavigate } from 'react-router-dom'


function Footer() {
      const navigate = useNavigate()
    return (
        <>

            <footer className='bg-blue-50 flex flex-wrap justify-center items-center w-[100%] '>

                <div className='cursor-pointer  m-[20px] p-[20px] '>
                    <div className='flex items-center text-center'>
                        <img className='max-w-[100px] h-[100px]  m-[20px] rounded-[50%] bg-red-400 border'
                            src={logo}  alt="loading.."
                             onClick={()=>{navigate('/')}} />
                        <h1 className='text-3xl font-bold'>
                            VIKAS <br /> HIGH SCHOOL
                        </h1>
                    </div>
                    <div className='flex gap-[20px] ml-[35px] mt-[30px]'>
                        <div className='text-6xl  text-blue-900'>

                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <p>VIKAS HIGH SCHOOL, <br />
                            <p>Ladella,Damera Mandal,</p>
                            <p>Warangal-506006</p>
                        </p>

                    </div>
                </div>
                {/* Quick Connects */}
                <div className=' m-[20px] p-[20px] w-[400px] h-[280px] lg:mt-[100px] '>
                    <h1 className='text-[20px] text-blue-600 ml-[40px]'>Quick Connects</h1>
                    <hr className='border-[1.5px] text-blue-950 w-[140px] ml-[40px]' />
                    <div className='flex justify items-center ml-7' >
                        <img className='w-[50px] m-[10px]'
                            src="https://cdn4.iconfinder.com/data/icons/picons-social/57/23-whatsapp-2-1024.png" alt="" />
                        <p className='text-[20px]'>1234567890</p>
                    </div>
                    <div className=' flex justify-center items-center  m-[20px] text-2xl'>
                        <p className='m-[10px] text-4xl'>
                            <i className="fa-solid fa-envelope"></i>
                        </p>
                        <p>vhschool@gmail.com</p>
                    </div>
                </div>

                {/* Social Media....... */}
                <div className=' m-[20px] p-[40px]  '>
                    <h1 className='text-2xl text-blue-600'>Follow Us</h1>
                    <hr className='border-[1.5px] text-blue-950 w-[100px]' />
                    <div className='flex m-[10px] mt-[30px] gap-[10px]'>
                        <div className='border p-[4px] rounded-[5px] cursor-pointer' >
                            <img className='w-[30px]' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-128.png" alt="" />
                        </div>
                        <div className='border p-[4px] rounded-[5px] cursor-pointer'>
                            <img className='w-[30px]' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" alt="" />
                        </div>
                        <div className='border p-[4px] rounded-[5px] cursor-pointer'>
                            <img className='w-[30px]' src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-128.png" alt="" />
                        </div>
                        <div className='border p-[4px] rounded-[5px] cursor-pointer'>
                            <img className='w-[30px]' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="" />
                        </div>
                        <div className='border p-[4px] rounded-[5px] cursor-pointer'>
                            <img className='w-[30px]' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-128.png" alt="" />
                        </div>

                    </div>
                </div>


            </footer>

            {/* last Footer ...*/}
            <footer className='border text-white  bg-blue-800 p-[10px] w-full'>
                <div className='ml-[30px] mr-[30px] flex  justify-between items-center'>
                    <p>Copyright © 2025 .
                        <p className='ml-[40px]'>Vikas high School</p>
                    </p>

                    <div>
                        <p>Designed & Developed by Charan Teja</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
