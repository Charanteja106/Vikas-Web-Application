import React, { useEffect, useState } from 'react'
import Footer from '../Footer'

function About() {

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
    <>
      <div className='m-6'>

        {/* Head -image */}
        <img className='w-full h-[300px] rounded-2xl'
          src="https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg" />
        {/* About .... */}
        <div className='mt-[40px] '>
          <h1 className='text-3xl text-blue-900 font-bold'>
            About Vikas High School
          </h1>

          <div className='md:flex  lg:flex lg:justify-between 
            lg:m-[40px]'>
            <div className='border w-full h-[250px] mt-[40px] rounded-[15px]
         hover:bg-amber-50 lg:w-[150%] '>
              <div className='flex justify-center items-center cursor-pointer '>
                <img className='w-[50px] mt-[90px] '
                  src='https://cdn2.iconfinder.com/data/icons/social-media-2259/512/youtube-128.png'
                  alt='loading' />
              </div>
            </div>
            <div className='mt-[40px] m-[10px] lg:ml-[70px]  flex justify-center items-center  '>
              <p className='justify-center'>
                Vikas High school reaching the expectations of parents have undergone critical transformations
                with time. Having successfully completed 22 years of imparting quality education,
                Vikas High School  have made a great difference in its Qualitative journey making meaningful
                educational transformation and accomplishing world-class standards of academic excellence.
                Today, children in India are growing in a more challenging and demanding environment.
              </p>
            </div>

          </div>
        </div>
        {/* TypewriterEffect */}
        <div className='flex md:m-[30px] m-[20px] lg:ml-[180px] lg:mr-[180px]
                 lg:mt-[100px] gap-[50px]'>
          <div>
            <img className='md:w-[1500px] md:h-[400px] sm:w-[1000px] sm:h-[400px] w-[200px] border-2 h-[350px]
                 shadow-md shadow-amber-400 lg:w-[600px]'
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
              <span className="text-xl  font-serif tracking-wide">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </div>

          </div>
        </div>

        {/* Principal */}
        <div className='flex lg:justify-center lg:items-center md:m-[10px] m-[20px] lg:mt-[100px] 
                gap-[10px] mt-[100px]'>
          <div>
            <img className='md:w-[1500px] md:h-[400px] sm:w-[200rem] sm:h-[400px] w-[400px] border-2 h-[350px]
                 shadow-md shadow-amber-400 lg:w-[70rem] '
              src="https://images.pexels.com/photos/516927/pexels-photo-516927.jpeg" alt="" />
            <div className='m-5'>
              <h1 className='text-2xl text-red-600'>Dr.Helsanki</h1>
              <b>Principal ,Vikas High School</b>
            </div>
          </div>

          <div>
            <div className='text-[15px] text-justify p-[10px] m-[15px] '>
              <h1 className='text-3xl mb-[20px] text-blue-900'>Principal Message</h1>
              <b>“At VHS we aim to provide personalized and meticulous support to the students to excel in every domain.”</b>
              <br /><br />
              <p >VIKAS HIGH SCHOOL reaching the expectation  of parents have undergone critical
                transformations with time.Having successfully completed 22 years of imparting
                quality education, VHS school have made a great difference in its
                Qualitative journey making meaningful educational transformation and accomplishing
                world-class standards of academic excellence.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur dignissimos et debitis quidem esse amet ducimus, nam cupiditate minus numquam nisi saepe vitae sed vero labore similique ex. Reiciendis aliquam non quae incidunt sint, totam animi aliquid accusamus veniam aut eos similique quo, dolores, debitis quos omnis vel officiis neque?
              </p>
            </div>


          </div>
        </div>

        <section>

          <div className='flex justify-center items-center flex-col gap-[10px]'>
            <h1 className='text-center text-3xl text-blue-900'>
              Board of Directors
            </h1>
            <hr className='mb-5 border-2 w-[150px] text-center text-red-600' />
          </div>

          <div className='md:flex md:justify-center md:gap-[150px] '>
            <div className=' flex justify-center items-center  flex-col'>
              <img className='w-[300px] h-[400px] rounded-[10px]'
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg" alt="" />
              <section className=' text-2xl mt-[10px] md:mt-[60px]' >
                <h1 className='text-red-600'>Lakee Tahoe</h1>
                <b className='m-[20px]'>Director</b>
              </section>
            </div>

            <div className=' m-[40px] flex justify-center items-center  flex-col'>
              <img className='w-[300px] h-[400px] rounded-[10px]'
                src="https://images.pexels.com/photos/1478685/pexels-photo-1478685.jpeg" alt="" />
              <section className='text-2xl mt-[10px] md:mt-[60px]' >
                <h1 className='text-red-600'>Rock Lakee Tahoe</h1>
                <b className='m-[20px]'>Director</b>
              </section>
            </div>
          </div>
        </section>

      </div>

      <div>
        <Footer />
      </div>

    </>


  )
}

export default About
