"use client"
import React, { useEffect, useState } from 'react'
import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image';
import axios from 'axios';


const montserrat = Montserrat({ weight:"600", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function Faculty({data}) {
  const [content,setconent] = useState([])
  console.log(data)
  const getData=async()=>{
    const res = await axios.get(`https://dev.ikhlasedu.com/wp-json/wp/v2/posts?_embed`)
    console.log(res.data)
    const filterData = res.data.filter(post => post.acf && post.acf.faculty_type === `${data}`);

    console.log(filterData)
    setconent(filterData)
  }
  useEffect(()=>{
    getData()
  },[!content])

  return (
    <div className='flex justify-center items-center w-full mt-32 md:mt-12 mb-16'>
        <div className='flex flex-col justify-center items-center w-11/12 lg:w-4/5 xl:w-3/4'>
          {/* main heading */}
          <div className='flex justify-center items-center w-full lg:w-1/2 '>
            <div className='flex flex-col justify-center items-center w-full'>
              
              
             

             <h2 className={`mt-12 text-2xl md:text-3xl lg:text-4xl ${montserrat.className} `}>{data} Faculty</h2>
             <div className='border-t-2 w-12 border-[#262161]'></div>
            </div>

            
            
          </div>
          {/* grid */}
          <div className='flex justify-center items-center w-full '>
          <div className='mt-24 md:mt-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-5 lg:gap-x-10 gap-y-10   '>
              {/* faculty box */}
              {content.map((item,index)=>(
              <div key={index} className={`flex flex-col justify-center items-center hover:shadow-lg ${data ==='Permanent'?"hover:shadow-[#262161]":"hover:shadow-[#f1592a]"} hover:shadow-[#262161] rounded-b-xl transition-all duration-300`}>
              <div className='flex justify-center items-center w-72   aspect-square  relative rounded-xl'>
                  <Image src={item._embedded['wp:featuredmedia'][0]['source_url']} alt='' priority fill className='object-cover object-center rounded-xl'/>
              </div>

              <div className={`flex flex-col justify-start items-start text-sm w-72 h-24 px-2  ${montserrat.className}`}>
                <h1 className='text-base mt-2'>Name of professor</h1>
                <h1>What he teaches</h1>
                <h1>designation</h1>
              </div>

              </div>

              ))}
              
              
          </div>

          </div>
        </div>
    </div>
  )
}
