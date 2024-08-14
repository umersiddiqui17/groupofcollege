import React from 'react'
import { Merriweather } from "next/font/google";
import Image from 'next/image';
import { IoCalendar } from "react-icons/io5";

const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });

export default function LatestNews() {
    const data =[
        {
            img:"/img1.jpg",
            title:"Liberal Arts Colleges Rankings",
            date:"2 days ago",
            description:"Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study."
        },
        {
            img:"/img2.jpg",
            title:"10 Law Schools Where the Most Accepted Students Enroll",
            date:"3 days ago",
            description:"At these schools, at least 42 percent of accepted students enrolled in fall 2015, U.S. News data show."
        },
        {
            img:"/img3.jpg",
            title:"5 Ways to Pay for Community College",
            date:"3 days ago",
            description:"Many community colleges offer promise programs, which offer tuition-free awards to eligible students – mainly to students with Pell grant eligibility."
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center w-full mb-10'>
         {/* heading */}
         <div className='flex flex-col justify-center items-center mt-28'>
             <h1 className={`${merriweather.className} text-5xl`}>Latest News</h1>
             {/* border */}
             <div className='w-12 border-t-[3px] border-[#0d2d62] mt-8'></div>

         </div>
         <div className=''>

         </div>
         
         {/* grids */}
         <div className='flex justify-center items-center  w-full md:w-11/12 xl:w-11/12'>
         <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  mt-12 mb-12 gap-x-5 gap-y-5'>
           {data.map((item,index)=>(
           <div key={index} className='flex flex-col justify-center items-center aspect-square h-96 w-80 xl:w-auto shadow-lg'>
               {/* image */}
               <div className='h-60  bg-gray-400 w-full relative'>
                <Image src={item.img} alt='' fill className='object-center object-cover'/>
                      
               </div>
            {/* the text part */}
               <div className='h-36  w-full flex flex-col justify-center items-center'>
                <div className='w-11/12 flex flex-col justify-start items-start '>
                       <h2 className={`text-[#b80924] text-start ${merriweather.className} text-lg line-clamp-1`}>{item.title}</h2>
                       <p className='text-gray-500 text-start text-sm mt-2 line-clamp-2'>{item.description}</p>
                       <p className='mt-4 flex justify-center items-center text-[#0d2d62]'><IoCalendar className='w-6 h-6 mr-2 ' />               {item.date}       </p>
                </div>
               </div>
           </div>

           ))}

         </div>

         </div>
         <div className='flex justify-center items-center px-6 py-3 bg-[#b80924] rounded-md text-white font-medium  hover:bg-[#0d2d62] transition-all duration-300'>
            View All New Post
         </div>

    </div>
  )
}
