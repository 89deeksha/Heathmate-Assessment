import React from 'react'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Heading() {
  return (
    <div className='flex gap-70'>
      
       <FaRegArrowAltCircleLeft className="text-blue-600 text-2xl ml-40 mt-6" />
       <div className='flex flex-col text-center mt-2'>
        <h1 className="text-blue-800 text-5xl font-bold ">HealthMate</h1>
       
        <p className='text-white text-2xl'>Al-Powered Personal Healthcare Companion</p>
        </div>
        
    </div>
    
  )
}

export default Heading