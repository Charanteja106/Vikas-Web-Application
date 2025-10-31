import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Menubar() {
  const navigate2 = useNavigate()

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-blue-500 hover:bg-blue-600 
        rounded-lg flex flex-col justify-center items-center 
        gap-1 transition-colors duration-200" >
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'
            }`}
        />
        <div
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
        />
      </button>

      {isOpen && (
        <div className=" border bg-blue-900 text-amber-50 rounded-lg shadow-lg w-60 h-[600px]
         absolute mt-[750px] mr-[220px] ">
          <ul className="space-y-2   text-[20px] flex justify-center items-center flex-col text-center  mt-[10px]  ">
            <li className="px-10 py-2  hover:shadow-xl/85 hover:underline hover:decoration-black  rounded-3xl cursor-pointer"
              onClick={() => { navigate2('/') }} >
                Home
                </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black    rounded-3xl cursor-pointer"
              onClick={() => { navigate2('/about') }}>
                About
                </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                onClick={()=>{navigate2('/facilities')}}>Facilities</li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                 onClick={()=>{navigate2('/academics')}}>Academics </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                 onClick={()=>{navigate2('/faculty')}}>Faculty</li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                 onClick={()=>{navigate2('/achievements')}}>Achievements </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                 onClick={()=>{navigate2('/')}}>Mandatory Disclosures </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
                 onClick={()=>{navigate2('/gallery')}}>Gallery </li>
            <li className="px-10 py-2 hover:shadow-xl/85 hover:underline  hover:decoration-black  rounded-3xl cursor-pointer"
              onClick={() => { navigate2('/contact') }}>Contact</li>
          </ul>
        </div>
      ) }

      
    </div>
  );
};


export default Menubar;