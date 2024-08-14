import { Merriweather, Montserrat } from 'next/font/google';
import React from 'react'
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function CoreValue() {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex flex-col justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4 mt-12 '>
           {/* main heading */}
           <div className='flex flex-col justify-center items-center w-full'>
                <h1 className={`text-4xl ${merriweather.className}`}>Core Values</h1>
                <div className='border-t-2 border-[#f1592a] w-12'></div>
           </div>

        </div>

    </div>
  )
}
