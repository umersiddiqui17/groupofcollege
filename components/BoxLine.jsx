import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
export default function BoxLine({data}) {
  return (
    <div className='flex justify-center items-center w-full'>
        <div className='flex justify-center lg:justify-start items-center w-11/12 lg:w-3/4 xl:w-2/3 '>
            <div className='flex justify-center items-center w-full'>
              {/* vision */}
              <div className='flex justify-center items-center flex-col w-full gap-y-5 mb-5 lg:mb-0 lg:gap-y-0'>
                <div className='flex justify-center items-center lg:justify-start lg:items-start w-full'>
                  <div className=' w-11/12 lg:w-1/2 aspect-square bg-[#262161] flex justify-center items-center rounded-xl '>
                     <div className='flex flex-col justify-center items-center h-5/6 w-full lg:px-12 py-12 '>
                        <h1 className={`${montserrat.className} flex text-4xl text-white text-center`}>{data.title1}</h1>
                          <p className='w-11/12 text-sm md:text-base lg:w-4/5 flex justify-center items-center text-center mt-8 text-gray-300'>{data.text1}</p>
                     </div>
                  </div>
                  <div className='w-1/2 aspect-square hidden lg:flex justify-center items-center'>
                     <Image src={data.url1} alt='' width={400} height={400} className='object-center'/>
                  </div>
                </div>

                <div className='flex justify-center items-center lg:justify-start lg:items-start w-full'>
                <div className='w-1/2 aspect-square hidden lg:flex justify-center items-center'>
                       <Image src={data.url2} alt='' width={400} height={400} className='object-center'/>
                </div>
                
                <div className='w-11/12 lg:w-1/2 aspect-square bg-[#f1592a] flex justify-center items-center rounded-xl'>
                <div className='flex flex-col justify-center items-center h-5/6 w-full lg:px-12 py-12 '>
                        <h1 className={`${montserrat.className} flex text-4xl text-white`}>{data.title2}</h1>
                          <p className='w-11/12 text-sm md:text-base lg:w-4/5 flex justify-center items-center text-center mt-8 text-white'>{data.text2}</p>
                     </div>
                </div>
                
                </div>
              </div>

            </div>
        </div>

    </div>
  )
}
