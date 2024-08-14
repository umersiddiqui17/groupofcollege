import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image'
import React from 'react'
import { FaCheck } from "react-icons/fa6";
const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });


const list =[
    {
        name:'Anatomy lab'
    },
    {
        name:'Physiology Lab'
    },
    {
        name:'Kinesiology lab'
    },
    {
        name:'Gymnasium'
    },
    {
        name:'Medical Physics lab'
    },
    {
        name:'Science lab'
    },
    {
        name:'Skill lab'
    },
    {
        name:'Computer lab'
    },
    {
        name:'Central Library'
    },
    {
        name:'Cafeteria'
    }
]

export default function Facility() {
  return (
    <div className='flex justify-center items-center w-full mt-12 mb-12 text-white rounded-lg'>
      <div className='flex flex-col lg:flex-row relative justify-start items-center w-11/12 md:w-10/12 lg:w-3/5 h-[510px]  md:h-[600px] lg:h-[640px] rounded-lg '>
          <div className='relative flex justify-start items-start w-full lg:w-2/3  h-[500px]   ronded-t-xl lg:rounded-l-xl'>
           <Image src="/campus.png" alt='' fill quality={100} className='object-center  object-fill rounded-t-xl lg:rounded-l-xl'/>
          </div>
          <div className='flex w-full lg:w-1/3 justify-end items-center  lg:h-[500px] bg-[#262161] rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl'>
                      <div className='flex justify-center items-center w-full   '>
                            <div className='flex flex-col justify-center items-center w-full'>
                                <div className='flex justify-center items-center w-11/12 mt-10  '>
                                    <h1 className={`${merriweather.className} text-2xl text-white`}>Campus Facilities</h1>
                                </div>
                                <div className='flex flex-col justify-start items-start w-2/3 lg:w-1/2  ml-5   mt-5 mb-10 '>
                                <ul className='ml-2'>
                                    {list.map((item,index)=>(
                                    <li className='flex justify-start items-center text-sm' key={index}>
                                        <FaCheck className='mr-1'/>
                                        {item.name}
                                    </li>
                                    ))}

                                </ul>
                                </div>
                            </div>
                      </div>
          </div>
      </div>
    </div>
  )
}
