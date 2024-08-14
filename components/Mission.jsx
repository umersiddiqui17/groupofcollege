import React from 'react'
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });

export default function Mission() {
  return (
    <>
      <div className={`flex justify-center items-center w-full text-white h-screen md:h-auto`}>
        <div className='h-full xl:w-3/5 lg:w-3/4 md:w-4/5 w-11/12 flex flex-col md:flex-row justify-center items-center'>
          {/* Our Mission */}
          <div className='flex flex-col justify-center md:justify-start items-center md:w-1/2 w-full bg-[#262161] h-full md:h-96 rounded-l-xl'>
            <div className='flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start w-11/12 pt-20'>
              <h1 className={`flex justify-center items-center text-3xl ${merriweather.className}`}>
                Our Mission 
              </h1>
              <p className='mt-4 text-sm'>
              Our mission is to empower students with comprehensive knowledge, skills, and ethical values essential for excellence in pharmaceutical sciences. We are committed to conducting cutting-edge research, engaging in community service and fostering collaborations to address global healthcare challenges.
              </p>
            </div>
          </div>
           
          {/* Our Vision */}
          <div className='flex flex-col justify-center md:justify-start items-center md:w-1/2 w-full bg-[#f1592a] h-full md:h-96 rounded-r-xl'>
            <div className='flex flex-col md:justify-start md:items-start justify-center items-center text-center md:text-start w-11/12 pt-20'>
              <h1 className={`flex justify-center items-center text-3xl ${merriweather.className}`}>
                Our Vision 
              </h1>
              <p className='mt-4 text-sm'>
              At Ikhlas Group of Colleges, we envision pioneering advancements in healthcare education, research, and innovation to foster a healthier, more sustainable future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
