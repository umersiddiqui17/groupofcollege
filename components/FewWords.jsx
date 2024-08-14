import React from 'react'
import { Roboto } from "next/font/google";
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";

const roboto = Roboto({ weight:"400", subsets: ["latin"] });

export default function FewWords() {
  return (
    <div className='flex justify-center items-center w-full h-[650px] '>
        <div className='hidden lg:flex justify-center items-center   '> 
            <div className='flex justify-center items-center w-1/2  flex-col'>
                <div className={`flex flex-col justify-start items-start   lg:text-5xl xl:text-5xl font-serif font-medium `}>
                  <p className='text-[#262161]'> About Us</p>
                  <div className=' flex flex-col justify-center  mt-10  w-full'>
                 {/* border line */}
                   <div className='border-t-4 w-16 border-[#262161]'>
                           
                   </div>
                   {/* Paragraph  */}
                       <div className=' text-gray-500  max-w-full xl:max-w-2xl text-base mt-12'>
                       At Ikhlas Group of Colleges, we are dedicated to shaping the future of healthcare through comprehensive education in Nursing, Pharmacy, Physiotherapy, Nutrition and Library Sciences. Our institutes provide a blend of academic excellence and hands-on training to empower our students for a successful career in healthcare.
                       </div>
                       {/* buttons */}
                       <div className='flex justify-start  items-center'>
                        <button className={`${roboto.className} text-lg px-6 py-[10px] flex justify-center items-center border-[#262161] text-[#262161] border-2 mt-8 rounded gap-x-3 hover:text-white hover:bg-[#262161] transition-all duration-300`}>Learn More <FaArrowRight className='w-3 h-3'/>    </button>
                        
                       </div>
                 </div>
                </div>
                 
            </div>
            <div className='flex justify-start items-center w-1/3  '>
             <div className='flex justify-center items-center w-4/5 '>
              <Image src="/about.jpeg" alt=' ' width={900} height={900} className='border-2 border-[#262161] shadow-lg shadow-[#f1592a] rounded-xl object-center object-fill'/>

             </div>
            </div>
        </div>
        {/* mobile view */}
        <div className='flex lg:hidden justify-center items-center w-full flex-col mb-12'>
        <div className='flex justify-center items-center w-4/5 '>
              <Image src="/about.jpeg" alt=' ' width={300} height={300}/>

             </div>
             <div className='flex flex-col justify-center items-center w-full'>
                 <div className='text-2xl flex flex-col justify-center items-center text-center font-serif font-medium w-11/12 mt-10'>
                 <p className='flex justify-center items-center '>About Us</p>
                 {/* border */}
                 <div className='border-t-4 w-16  border-[#0d2d62]'>

                 </div>
                 {/* paragraph */}
                 <div className='flex justify-center items-center w-11/12 text-sm mt-5 text-gray-400'>
                    <p>
                    At Ikhlas Group of Colleges, we are dedicated to shaping the future of healthcare through comprehensive education in Nursing, Pharmacy, Physiotherapy, Nutrition and Library Sciences. Our institutes provide a blend of academic excellence and hands-on training to empower our students for a successful career in healthcare.
                    </p>
                    

                 </div>
                 <div className='flex justify-start  items-center'>
                        <button className={`${roboto.className} text-lg px-6 py-[10px] flex justify-center items-center border-[#0d2d62] text-[#0d2d62] border-2 mt-8 rounded gap-x-3 hover:text-white hover:bg-[#0d2d62] transition-all duration-300`}>Learn More <FaArrowRight className='w-3 h-3'/>    </button>
                        
                       </div>

                 </div>
                 
             </div>
        </div>

    </div>
  )
}
