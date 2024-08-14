import React from 'react'
import { Merriweather } from "next/font/google";
import { FaWifi } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { GiElectric } from "react-icons/gi";
import { FaBottleWater } from "react-icons/fa6";
import { MdCleaningServices } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa";


const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });


export default function CampusFacility() {
  return (
    <div className='flex flex-col justify-center items-center w-full mt-12 mb-12'>
        <div className='flex flex-col justify-center items-center w-full'> 
             <h1 className={`text-[#262161] ${merriweather.className} text-2xl lg:text-4xl`}>
              Campus Facilities
             </h1>
             {/* border */}
             <div className='border-t-2 border-[#262161] w-12 mt-8'>
                
             </div>
        </div>

        <div className='flex justify-center items-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-5'>


             <div className='flex flex-col justify-center items-center aspect-square w-56  lg:w-64 xl:w-96 '>
                <FaWifi className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Internet</h1>
                  <p className='text-xs'>Our campus is equipped with a high-speed internet facility that ensures seamless connectivity for all students, faculty, and staff.</p>
                </div>
             </div>
            
             <div className='flex flex-col justify-center items-center aspect-square w-56 lg:w-64 xl:w-96 '>
                <MdOutlineSecurity className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Security</h1>
                  <p className='text-xs'>Our campus is safeguarded with 24/7 security personnel, CCTV surveillance, and controlled access points.</p>
                </div>
             </div>

             <div className='flex flex-col justify-center items-center aspect-square w-56  lg:w-64 xl:w-96 '>
                <GiElectric className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Stand-by generator</h1>
                  <p className='text-xs'>Our campus is equipped with a stand-by generator that ensures uninterrupted power supply during outages.</p>
                </div>
             </div>

             <div className='flex flex-col justify-center items-center aspect-square w-56  lg:w-64 xl:w-96 '>
                <FaBottleWater  className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Mineral Water</h1>
                  <p className='text-xs'>Our campus offers clean, mineral water at various spots for easy access to safe drinking water.</p>
                </div>
             </div>


             <div className='flex flex-col justify-center items-center aspect-square w-56  lg:w-64 xl:w-96 '>
                <MdCleaningServices   className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Maid for cleaning</h1>
                  <p className='text-xs'>Our campus offers clean, mineral water at various spots for easy access to safe drinking water.</p>
                </div>
             </div>

             <div className='flex flex-col justify-center items-center aspect-square w-56  lg:w-64 xl:w-96 '>
                <FaRegSnowflake    className='w-12 h-12 text-[#262161]' />
                <div className='flex flex-col justify-center items-center text-center gap-y-3'>
                  <h1 className={`text-xl ${merriweather.className} `}>Air-conditioned Rooms</h1>
                  <p className='text-xs'>Our campus offers clean, mineral water at various spots for easy access to safe drinking water.</p>
                </div>
             </div>
          </div>
             
        </div>
    </div>
  )
}
