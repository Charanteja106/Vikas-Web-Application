import React from 'react'
import firstbatch from '../Images/firstbatch.jpg'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'


function Contact() {

  const navigate = useNavigate()


  return (
    <div>
      <div className='lg:m-16'>
        <img className='sm:h-[300px] w-full rounded-2xl rounded-b-[50px] md:h-[500px] '
          src={firstbatch} alt="Loading.." />
        <div className='text-center m-8'>
          <h1 className='text-3xl text-blue-700 m-4'>All your quaries answered</h1>
          <p className='text-gray-600'>As a parent, it's apparent to have quaries on various aspects of a school
            we're here to help you to understand about our school in all ways</p>
        </div>
      </div>

      {/* details */}
      <div className='lg:flex lg:justify-around lg:items-center m-[30px] md:ml-[10%] lg:ml-0'>
        <div className='  text-[20px] m-[20px]'>
          <section className='flex flex-col gap-5  sm:ml-[200px]'>
            <nav>
              <h1 className='text-3xl  text-red-600'>Vikas High School</h1>
              <hr className='w-[250px] border-2 border-amber-700 ' />
            </nav>
            <p>I to X (E/M, Day School)</p>
            <address>Vikas High School,Ladella,Warangal -506006</address>
            <section className=''>
              <label>Mobile: <b>1234567890</b> </label><br />
              <label>Office: <b>9812345670</b> </label> <br />
              <label>Mail: <b>VHSchools@gmail.com</b> </label>
            </section>
          </section>
        </div>
        <div className='border-3 border-dashed border-red-500 w-[600px] ml-[40px]'>
          <div className=' flex justify-between items-center flex-col gap-[30px] mt-[20px] p-[20px] '>
            <h1 className='text-3xl text-blue-900 '>Get in Touch</h1>
            <input className='border w-[350px] p-[10px] rounded-[10px] hover:border-3 hover:border-blue-500' type="text" placeholder='Name *' />
            <input className='border w-[350px] p-[10px] rounded-[10px] hover:border-3  hover:border-blue-500' type="email" placeholder='Email *' />
            <input className='border w-[350px] p-[10px] rounded-[10px] hover:border-3  hover:border-blue-500' type="number" placeholder='Mobile Number *' />
            <input className='border w-[350px] p-[10px] rounded-[10px] hover:border-3  hover:border-blue-500' type="number" placeholder='Alternate Mobile Number *' />
            {/* <label >Message</label> */}
            <textarea className='border-2  w-[350px] p-2' placeholder='Message'></textarea>
            <button className='border-2 w-[350px] text-[20px] cursor-pointer
                 rounded-2xl p-[5px] bg-green-700 text-white hover:bg-blue-500 '>Submit</button>
          </div>
        </div>

      </div>
            <button onClick={()=>{navigate('/open')}}
              className='m-[20px] ml-0 border-2 w-[350px] text-[20px] cursor-pointer
                 rounded-2xl p-[5px] bg-blue-500 '>Admission Process</button>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Contact
