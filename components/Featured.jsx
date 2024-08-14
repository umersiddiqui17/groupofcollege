import Image from 'next/image'
import React from 'react'
import { Roboto } from "next/font/google";
import { MdBattery4Bar } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import { MdOutlineStar } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });




const roboto = Roboto({ weight:"400", subsets: ["latin"] });

export default function Featured() {


  const data =[
    {
      img:"/analytics.jpg",
      title:"Financial Analyst Course",
      teacher:"Charles Banks",
      date:"June 3, 2018",
      parttime:true,
      certefied:true,
      faculty:false,
      online:true,
    },
    {
      img:"/digital.jpg",
      title:"Digital Marketing Course",
      teacher:"Maria Howard",
      date:"June 10, 2018",
      parttime:false,
      certefied:true,
      faculty:true,
      online:false,
    },
    {
      img:"/graphics.jpg",
      title:"Graphic Design Course",
      teacher:"Steven Carter",
      date:"June 17, 2018",
      parttime:false,
      certefied:true,
      faculty:true,
      online:true,
    }
  ]
  return (
    <div className='flex justify-center items-center h-[800px] xl:h-screen'>
      <div className='hidden lg:flex justify-center relative items-center w-1/2 h-[800px] xl:h-screen'>
          <Image src="/thumbs.jpeg" alt='' fill className='object-center object-cover' />
      </div>
      <div className='flex justify-center items-center w-full lg:w-1/2 bg-[#0d2d62] h-[800px] xl:h-screen '>
            <div className='flex flex-col justify-start items-center font-serif text-3xl lg:text-5xl w-11/12 lg:w-4/5  '>
                <div className='flex justify-start items-center w-full text-white'>
                <h1 className=''>Our Featured Courses</h1>
                </div>
                <div className='flex justify-start items-center w-full'>
                  <div className='border-t-4 w-16 mt-10 border-[white]'>

                  </div>
                </div>
                <div className='text-sm lg:text-base mt-5 lg:mt-12  w-full flex justify-start items-center text-white'>
                    <p className='w-4/5'>Our Featured Courses are selected through a rigorous process and uniquely created for each semester.</p>
                </div>
                <div className='flex flex-col justify-start items-start w-full  gap-y-3 mt-8'>
                  {/* list */}
                  {data.map((item,index)=>(

                  <div key={index} className={`bg-white h-24 md:h-28 w-full lg:w-4/5 flex justify-center items-center ${roboto.className} rounded-md cursor-pointer`}> 
                     <div className='flex justify-center items-center w-2/5  relative h-24 md:h-28 object-center object-cover '>
                         <Image src={item.img} alt='' fill className='rounded-l-md'/> 
                     </div>
                     <div className='w-full flex justify-center items-center  h-24 md:h-28'>
                            <div className='flex flex-col justify-start items-start w-11/12 gap-y-2 '>
                                 <h2 className={`text-base lg:text-xl font-semibold font-serif text-[#b80924] ${merriweather.className}`}>{item.title}</h2>
                                 <p className='text-sm font-medium text-black'>{item.teacher}</p>
                                 <div className='flex justify-between items-center w-full'>
                                  {/* date */}
                                  <div className={`text-sm text-gray-500  w-1/2`}>
                                     {item.date}
                                  </div>
                                  {/* options */}
                                  <ul className='w-1/2 flex justify-end items-center  gap-x-4'>
                                    {item.faculty?(<li><MdBattery4Bar className='w-4 h-4' /></li>):(<li className='hidden'></li>)}
                                    {item.parttime?(<li><CgSandClock  className='w-4 h-4' /></li>):(<li className='hidden'></li>)}
                                    {item.certefied?(<li><MdOutlineStar  className='w-4 h-4' /></li>):(<li className='hidden'></li>)}
                                    {item.online?(<li><FaLaptop  className='w-4 h-4' /></li>):(<li className='hidden'></li>)}
                                  </ul>
       
                                 </div>
                            </div> 
                     </div>
                     
                  </div>

                  ))}

                  <div className={`flex justify-start items-start w-full ${roboto.className} mt-10`}>
                    <button className='text-base text-white bg-[#b80924] px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-[#b80924] transition-all duration-300'>View All Courses</button>
                  </div>
                </div>
                
            </div>
      </div>
    </div>
  )
}
