import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Aopen from '../Components/Aopen'
import Navbar from './Navbar'
import Facilities from '../MenuComponents/Facilities'
import Academics from '../MenuComponents/Academics'
import Faculty from '../MenuComponents/Faculty'
import Achievements from '../MenuComponents/Achievements'
import Gallery from '../MenuComponents/Gallery'


function Mainnav() {
  return (
    <div>
        <BrowserRouter>
        <Navbar />
          
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/open' element={<Aopen />} />
            <Route path='/facilities' element={<Facilities />}/>

            <Route path='/faculty' element={<Faculty />} />
            <Route path='/achievements' element={<Achievements />}  />
            <Route path='/gallery' element={<Gallery />}  />
            <Route path='/academics' element={<Academics/>}  />
            {/* <Route path='' element={}  /> */}
           </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Mainnav
