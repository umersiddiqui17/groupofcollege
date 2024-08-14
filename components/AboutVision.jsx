import { Merriweather, Montserrat } from 'next/font/google';
import React from 'react'
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function AboutVision() {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4 mt-12 '>
        <div className='flex flex-col justify-center items-center w-full mt-10 '>
             <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/2 w-full bg-red-600'>
                <h1 className={`${merriweather.className} text-3xl text-[#262161]`}>Vision</h1>
                <p className='text-sm mt-12 '>At Ikhlas Group of Colleges, we envision pioneering advancements in healthcare education, research, and innovation to foster a healthier, more sustainable future for all.</p>
             </div>
             <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:w-1/2 w-full'>
                <h1 className={`${merriweather.className} text-3xl text-[#262161]`}>Vision</h1>
                <p className='text-sm mt-12 '>At Ikhlas Group of Colleges, we envision pioneering advancements in healthcare education, research, and innovation to foster a healthier, more sustainable future for all.</p>
             </div>
           </div>
           
           {/* our vision */}
           <div className='flex justify-center items-center w-full mt-10'>
             <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start w-full'>
                <h1 className={`${merriweather.className} text-3xl text-[#262161]`}>Mission</h1>
                <p className='text-sm mt-12 '>Our mission is to empower students with comprehensive knowledge, skills, and ethical values essential for excellence in pharmaceutical sciences. We are committed to conducting cutting-edge research, engaging in community service, and fostering collaborations to address global healthcare challenges.</p>
             </div>
           </div>
        </div>

    </div>
  )
}
