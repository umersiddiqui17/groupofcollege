import { Merriweather, Montserrat } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

const montserrat = Montserrat({ weight:"700", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function Marquis() {
    const images =[
        {
            img:"/2.png"
        },
        {
            img:"/3.png"
        },
        {
            img:"/4.png"
        },
        {
            img:"/5.png"
        },
        {
            img:"/6.png"
        },
        {
            img:"/7.png"
        },
        {
            img:"/8.png"
        },
        {
            img:"/av Icoon.png"
        },
        {
            img:"/5.png"
        },
        {
            img:"/7.png"
        },
        {
            img:"/8.png"
        },
        {
            img:"/2.png"
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center w-full h-80 mt-64 lg:mt-32'>
             <div className='flex flex-col justify-center items-center w-full mb-10 text-[#262161]'>
               <h1 className={`${merriweather.className} text-4xl mt-10`}>Affiliation</h1>
               <div className='border-t-2 w-14 border-[#262161]'>

               </div>
             </div>
        <Marquee speed={100}  autoFill={true}   className='gap-x-40'>

            {images.map((item,index)=>(
                <Image key={index} src={item.img} alt='' width={200} height={200}/>
            ))}
        </Marquee>
    </div>
  )
}
