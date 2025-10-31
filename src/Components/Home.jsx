import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer';


function Home() {

  const navigate = useNavigate();

  //  TypewriterEffect
  const [text, setText] = useState('');
  const fulltext = 'CHARAN TEJA PANCHAGIRI..';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fulltext.length) {
      const timeout = setTimeout(() => {

        setText(fulltext.slice(0, index + 1));
        setIndex(index + 1)
      }, 100);

    }
  }, [index, fulltext])

  return (


      <div>

        <img src="https://nsrschools.ac.in//assets/img/banners/nsrbanner1.png" alt="" />

        <div className='border  p-[5px] rounded-l-[50px] bg-lime-200 text-center
                      h-[70px] ml-4 md:ml-[35%] overflow-y-scroll  '>
          <p className='m-[10px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, soluta. Quia eius rem, ut sequi dignissimos a suscipit provident magnam temporibus blanditiis sit iure aliquam, harum sunt reprehenderit rerum maxime, explicabo minima? Obcaecati vitae incidunt tenetur eaque itaque, non cupiditate libero aliquam quam reprehenderit sed blanditiis laboriosam illum corrupti. Quod, quia corrupti. Aspernatur labore, eum odit vel debitis possimus? Tempore neque facere consequuntur esse animi, unde beatae nostrum repellendus. Quasi quo dignissimos ipsam facere animi sequi fugit repellat eveniet ab eum adipisci tenetur quod repellendus perferendis debitis veritatis corporis possimus, incidunt ex illo molestias reprehenderit corrupti neque quisquam! Nostrum, accusamus!</p>
        </div>

        {/* This is About  */}
        <div className='m-5 mt-[50px]  md:flex gap-[50px]'>

          <div className='text-center'>
            <div>
              <h1 className='text-blue-900 text-[50px]  font-bold'>WELCOME TO</h1>
              <b className='text-[22px]'>VIKAS HIGH SCHOOL</b>
              <div className='mt-[40px]  p-1 text-[15px] bg-amber-100 rounded-3xl'>
                <p> Bring your child to a school called progress</p>
              </div>
            </div>
            {/* Para */}
            <div className='mt-[20px] text-justify '>
              Vikas High School reaching the expectations of parents
              have undergone critical transformations with time. Having
              successfully completed 22 years of imparting quality education,
              Vikas High School have made a great difference in its
              Qualitative journey making meaningful educational transformation
              and accomplishing world-class standards of academic excellence. Today,
              children in India are growing in a more challenging and demanding environment.
            </div>
            <div className='rounded-2xl m-6 p-[5px] md:w-[300px]
           bg-blue-600  hover:bg-white hover:text-black   border-2 border-black cursor-pointer
           transition-all 2s ease text-white'>

              <b onClick={() => {
                navigate('/about')
              }}>Learn More About Our School</b>
            </div>
          </div>

          <div className='flex '>
            <div>
              <img className='md:w-[1500px] md:h-[400px] sm:w-[1000px] sm:h-[400px] w-[200px] border-2 h-[350px] shadow-md shadow-amber-400'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGtB7uJ5XAu-Ad2EpczcAbJy-0UUD6-oneQ&s" alt="" />
            </div>

            <div>
              <div className='text-[15px] text-justify p-[10px] m-[15px] '>
                <h1 className='text-3xl mb-[40px]  '>Message from the <br /> Chairman’s Desk</h1>

                <p >VIKAS HIGH SCHOOL reaching the expectation  of parents have undergone critical
                  transformations with time.Having successfully completed 22 years of imparting
                  quality education, VHS school have made a great difference in its
                  Qualitative journey making meaningful educational transformation and accomplishing
                  world-class standards of academic excellence. </p>
              </div>
              {/* TypewriterEffect */}
              <div className=" m-[10px] border-2 border-amber-600 bg-amber-700 text-white
                             p-[10px] rounded-lg shadow-lg min-h-16 
                             flex items-center justify-center md:p-6 md:bg-blue-700">
                <span className="text-xl font-mono font-bold tracking-wide">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* About  VHS */}

        <div className='m-3'>

          <div className='flex justify-center '>
            <section className='border absolute mr-[410px] p-[25px] 
                     bg-amber-400 font-serif text-[20px]' >
              <p className='ml-[35px] mb-[10px]'>ABOUT</p>
              <b>VIKAS <br /> HIGH  SCHOOL</b>
              <hr />
              <b>Ladella</b>
            </section>
            <img className='w-[200px] border' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_V8oOru9-G2t07254HmbOCx_QdmbtF6iUg&s" alt="" />
          </div>

          <section className=' flex justify-center'>
            <img className='ml-[60px]  w-[420px] h-[200px]' src='https://images.pexels.com/photos/3768129/pexels-photo-3768129.jpeg' alt="" />
          </section>

          <div className=' m-[10px]'>
            <b className='m-[15px] text-[20px]'>We are a caring community school focusing on nurturing the child.</b>
            <p className='mt-[10px]'>
              We at VHS  believe that a journey that involves identifying strengths, nourishing them and then reaching out to excelling in it, helps to achieve success.

              Being passionate about what we choose to do will naturally bring in the required efforts, and achievement will just follow in the process.
            </p>
            <div className='m-7 mb-[50px] '>
              <button className='border rounded-4xl p-[10px] pl-[20px] pr-[20px] 
                    mr-[20px] bg-blue-900 cursor-pointer text-white
                     hover:bg-white hover:text-black'>Learn about our values</button>
              <button className='border rounded-4xl p-[10px] pl-[20px] pr-[20px]
                     hover:bg-blue-900 cursor-pointer hover:text-white'>Download E-Brochure</button>
            </div>
          </div>
        </div>

        {/* Academics ..............*/}
        <div >
          <h1 className='text-2xl font-bold text-center font-serif ' >
            ACADEMICS & PROGRAMS
          </h1>
          <div className='border-2 border-red-500  w-[120px] ml-[45%] '>
            <hr className=' w-[120px] text-center text-red-600' />
          </div>
          <div className=' flex justify-center items-center mt-[250px] mb-[100px] sm:p-[40px]'>
            <div className='flex gap-[40px] absolute m-[40px]'>


              <section className=' border rounded-[6px] w-[350px] h-[380px] hover:bg-amber-400 cursor-pointer p-[10px] '>
                <img className='p-[20px]' src="https://images.pexels.com/photos/5211463/pexels-photo-5211463.jpeg" alt="" />
                <div className='p-[10px] m-[5px] '>
                  <b>Early Childhood Care <br /> (Age: 1 to 5 years)</b>
                  <p >
                    Developmental Milestone is a Checklist tracker for children from birth
                    to age 5, tracking how kids play, learn, speak, act..
                  </p>
                </div >
              </section>
              <section className=' border rounded-[6px] w-[350px] h-[380px] hover:bg-amber-400 cursor-pointer p-[10px] '>
                <img className='p-[20px]' src="https://images.pexels.com/photos/5211463/pexels-photo-5211463.jpeg" alt="" />
                <div className='p-[10px] m-[5px] '>
                  <b>Early Childhood Care <br /> (Age: 1 to 5 years)</b>
                  <p >
                    Developmental Milestone is a Checklist tracker for children from birth
                    to age 5, tracking how kids play, learn, speak, act..
                  </p>
                </div >
              </section>

            

              <section className=' sm:hidden md:hidden lg:block  hover:bg-amber-400 cursor-pointer '>
                <div className='border w-[350px] h-[380px] rounded-[6px] '>
                  <img className='p-[20px]' src="https://images.pexels.com/photos/5211463/pexels-photo-5211463.jpeg" alt="" />
                  <div className='p-[10px] m-[5px] '>
                    <b>Early Childhood Care <br /> (Age: 1 to 5 years)</b>
                    <p >
                      Developmental Milestone is a Checklist tracker for children from birth
                      to age 5, tracking how kids play, learn, speak, act..
                    </p>
                  </div >
                </div>
              </section>

            </div>
          </div>
          <section>
            <img className='w-full' src="https://nsrschools.ac.in//assets/img/home/academics4.png" alt="" />
          </section>
        </div>

        {/* Faciliteies .............. */}

        <div className=' mt-[60px]  '>

          <header className='text-center mb-[100px]'>
            <h1 className='text-2xl text-blue-900'>FACILITIES ON CAMPUS</h1>
            <p>State of the Art Facilities and Security Features for a 21st Century School</p>
          </header>

          {/* Faciliteies sections */}
          <div className='flex flex-wrap gap-[80px] w-[full] m-[10px] '>

            {/* 11... */}
            <div className='cursor-pointer '>
              <div className='shadow-lg shadow-gray-500 w-[300px] 
                         p-[20px] flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </div>
            {/* 22... */}
            <div className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </div>
            {/* 33.. */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 44... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 55... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 66.. */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 77... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 88.. */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 99.... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 10.... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 11.... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>
            {/* 12.... */}
            <section className='cursor-pointer'>
              <div className='shadow-lg shadow-gray-500 w-[300px] p-[20px] 
                           flex justify-between items-center 
                   hover:bg-blue-900 hover:p-[20px] hover:text-white '>
                <p className='p-[10px] text-5xl '>
                  <i className="fa-solid fa-flask"></i>
                </p>
                <h1>ATAL TINKERING <p className='ml-[20px]'> LAB on Campus</p></h1>
              </div>
            </section>

          </div>
        </div>
        {/* Parents  Encourages...... */}
        <div className='m-[100px] flex justify-center items-center flex-col'>
          <div className='text-center mb-[45px]'>
            <h1 className='text-3xl text-blue-900'>WHAT PARENTS HAVE TO SAY</h1>
            <p>Words from satisfied parents that encourages us</p>
          </div>
          <div className='flex flex-wrap gap-[90px]  '>

            <div className='border-2 rounded-2xl h-[300px] w-[500px] flex justify-center cursor-pointer '>
              <img className='w-[400px] h-[280px]  rounded-[50px] m-[10px]'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxZ1qviQtEFn1yRZE_ajr0_xU6MhDdwV71Rgg9G2IR4KgMoHDBX1D_Ww&s" alt="" />
            </div>
            <div className='border-2 rounded-2xl h-[300px] w-[500px] flex justify-center cursor-pointer '>
              <img className='w-[400px] h-[280px]   rounded-[50px] m-[10px]'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxZ1qviQtEFn1yRZE_ajr0_xU6MhDdwV71Rgg9G2IR4KgMoHDBX1D_Ww&s" alt="" />
            </div>
                
          </div>

        </div>

        <Footer />

      </div>
    
  )
}

export default Home
