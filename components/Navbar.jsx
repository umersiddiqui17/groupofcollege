"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Merriweather } from "next/font/google";
import { usePathname } from 'next/navigation';
const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });
import { animate, motion } from 'framer-motion';
import { IoClose, IoMenuOutline } from 'react-icons/io5';
import Link from 'next/link';
export default function Navbar() {
    const [path,setpath] = useState('')
    const [menu,setmenu] = useState('')
    const pathname = usePathname()

    useEffect(()=>{
        setpath(pathname)  
        console.log(pathname) 
      },[pathname])
      
    
  return (
    <>
    <header className=' hidden md:flex justify-center items-center w-full bg-white border-b z-20 shadow-md '>
        <nav className='h-24 w-full flex justify-between items-center'>
            {/* logo */}
            <div className='flex justify-center items-center gap-x-2 px-10'>
              <Link href="/">
              <Image src="/logo1.png" alt='' width={200} height={200}/>
              </Link>
              <h1 className={`${merriweather.className} text-[#0d2d62]`}></h1>
            </div>
            {/* navigation links */}
            <ul className={`flex justify-center items-center text-[#262161] gap-x-8 px-10 transition-all duration-300 cursor-pointer ${merriweather.className}`}>
                 <Link href="/">
                <li className={`flex justify-center items-center hover:text-[#f1592a] transition-all duration-300 ${path==="/"?"text-[#f1592a]":"text-[#262161]"}`}>
                    Home
                </li>
                 </Link>
                 <Link href="/about">
                <li className={`flex justify-center items-center hover:text-[#f1592a] transition-all duration-300 ${path==="/about"?"text-[#f1592a]":"text-[#262161]"}`}>
                  About 
                </li>
                 </Link>
                 <Link href="/admission">
                <li className={`flex justify-center items-center hover:text-[#f1592a] transition-all duration-300 ${path==="/admission"?"text-[#f1592a]":"text-[#262161]"}`}>
                  Admissions 
                </li>
                 </Link>
                 <Link href="/faculty">
                <li className={`flex justify-center items-center hover:text-[#f1592a] transition-all duration-300 ${path==="/faculty"?"text-[#f1592a]":"text-[#262161]"}`}>
                  Faculty 
                </li>
                 </Link>
            </ul>
        </nav>

    </header>
    {/* mobile view*/}
    <header className='md:hidden flex fixed justify-center items-center w-full z-50 top-0 bg-white'>
        <nav className='h-24 w-full flex justify-between items-center shadow-md'>
            {/* logo */}
            <div className='flex justify-center items-center gap-x-2 px-2'>
              <Link href="/">
              <Image src="/logo1.png" alt='' width={150} height={150}/>
              </Link>
              <h1 className={`${merriweather.className} text-[#0d2d62]`}></h1>
            </div>
            <ul onClick={()=>setmenu(!menu)}  className="flex space-x-4 px-4 text-white">
          {menu?<motion.li initial={{x:0,opacity:1}} animate={{rotate:menu?90:0}}><IoClose className='w-8 h-8 text-black '/></motion.li>:<motion.li animate={{rotate:menu?90:0}}><IoMenuOutline className='w-8 h-8 text-black '/></motion.li>}
          </ul>
          <motion.div
         initial={{x:600, opacity:0}} animate={{x:menu?0:600 ,opacity:1, transition:{type:"just", stiffness:60}}}
         className={`lg:hidden   bg-white text-black   top-24 right-0  flex justify-center  items-start w-2/3 h-screen fixed text-center z-50 shadow-md`}>
              {menu?(
                <motion.ul initial={{y:-10,opacity:0}} animate={{opacity:menu?[0.2,0.4,0.6,0.8,1]:0,y:menu?[10,8,6,4,2,0]:-10}} transition={{type:"spring", stiffness:90}} className='flex flex-col justify-center items-center mt-20 text-lg'>
                   <Link href="/">
                   <li className='flex flex-col justify-center items-center'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:menu?[0.2,0.4,0.6,0.8,1]:0}} transition={{type:"spring", stiffness:90 ,delay:0.4}}  className={`${path==="/" ? 'text-[#f1592a]' : ''}  rounded-full `}  >Home</motion.h1>
                
              </li>
                   </Link>
                   <Link href="/about">
              <li className='flex flex-col justify-center items-center'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:menu?[0.2,0.4,0.6,0.8,1]:0}} transition={{type:"spring", stiffness:90 ,delay:0.6}} className={`${path==="/about" ? 'text-[#f1592a]' : ''}  rounded-full`}  >About</motion.h1>
              
              </li>
              
              </Link>
              <Link href="/admission">
              <li className='flex flex-col justify-center items-center'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:menu?[0.2,0.4,0.6,0.8,1]:0}} transition={{type:"spring", stiffness:90 ,delay:0.6}} className={`${path==="/admission" ? 'text-[#f1592a]' : ''}  rounded-full`}  >Admission</motion.h1>
              
              </li>
              
              </Link>
              <Link href="/faculty">
              <li className='flex flex-col justify-center items-center'>
                <motion.h1 initial={{opacity:0}} animate={{opacity:menu?[0.2,0.4,0.6,0.8,1]:0}} transition={{type:"spring", stiffness:90 ,delay:0.6}} className={`${path==="/faculty" ? 'text-[#f1592a]' : ''}  rounded-full`}  >Faculty</motion.h1>
              
              </li>
              
              </Link>
              
              
              
              
                </motion.ul>
              ):(
                <ul>
                
                </ul>
              )}
         </motion.div>

        </nav>
    </header>
    </>
  )
}
