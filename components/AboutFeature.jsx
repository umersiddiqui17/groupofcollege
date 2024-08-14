import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function AboutFeature() {
  return (
    <div className='flex flex-col justify-center items-center w-full '>
      {/* overview line */}
      <div className='flex justify-center items-center w-full bg-[#262161] h-36  md:h-56'>
            <div className='flex justify-center lg:justify-start items-center w-11/12 lg:w-4/5 xl:w-3/4 '>
                <h1 className={`${montserrat.className} text-3xl md:text-4xl lg:text-5xl text-white`}>
                  Overview
                </h1>
            </div>
      </div>
       <div className='flex flex-col justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4 mt-12 '>
           {/* overview line */}
           <div className='flex flex-col justify-center items-center w-full'>
                <h1 className={`text-4xl ${merriweather.className}`}>About Us</h1>
                <div className='border-t-2 border-[#f1592a] w-12'></div>
           </div>
           {/* text  */}
           <div className='flex flex-col lg:flex-row justify-center items-center w-full mt-10'>
             {/* text */}
             <div className='flex justify-center items-center w-full lg:w-1/2 '>
               <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start w-full'>
                <h1 className={`${merriweather.className} text-3xl text-[#262161]`}>About Ikhlas Group Of Colleges</h1>
                
                <p className='text-sm mt-12 '>At Ikhlas Group of Colleges, we are dedicated to shaping the future of healthcare through comprehensive education in Nursing, Pharmacy, Physiotherapy, Nutrition and Library Sciences. Our institutes provide a blend of academic excellence and hands-on training to empower our students for a successful career in healthcare.</p>
               </div>
                
             </div>
             {/* picture */}
             <div className='w-full lg:w-1/2 flex justify-start items-center  relative h-96 mt-10 lg:mt-0 rounded-xl  '>
               <Image src="/C.png" alt='' fill  className='object-center object-contain lg:px-10 rounded-xl'/>
             </div>
            
           </div>
           
           
          

           {/*  */}
       </div>
    </div>
  )
}
