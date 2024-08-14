import Image from 'next/image'
import React from 'react'
import { Merriweather } from "next/font/google";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


const merriweather = Merriweather({ weight:"700", subsets: ["latin"] });

export default function Footer() {
  return (
    <>
    {/* footer for pc view */}
    <footer className='flex justify-center items-center w-full h-[900px] md:h-[700px] lg:h-[400px]  lg::h-96 bg-[#262161] shadow-lg z-20 border-t-2 border-[#262161] text-white '>
        <div className='flex flex-col lg:flex-row justify-between items-center w-4/5 '> 
          <div className='flex justify-center items-center'>
            <Image src="/footer.png" alt='' width={300} height={300}/>
          </div>
          <div className='flex flex-col justify-start items-start h-64 '>
              <div className='flex flex-col justify-center items-center md:items-start mt-12 md:mt-0'>
                <h1 className={`${merriweather.className}`}>Quick Links</h1>
                <div className='border-t border-[#f1592a] w-12'></div>

                <div className='mt-10 flex flex-col gap-y-3 justify-center items-start -ml-1 '>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'> <Link href="/"><p> Home</p></Link> </div>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'><Link href="/admission"><p> Admission</p></Link>  </div>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'> <p>   About </p> </div>
                
                     
              </div>
              </div>

              
          </div>
          <div className='flex flex-col justify-start items-start h-64 '>
              <div className='flex flex-col justify-center items-center md:items-start mt-12 md:mt-0'>
                <h1 className={`${merriweather.className}`}>Contact Us</h1>
                <div className='border-t border-[#f1592a] w-12'></div>

                <div className='mt-10 flex flex-col gap-y-3 justify-center items-start -ml-1 transition-all duration-300 '>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'><IoLocationSharp className='w-7 h-7 white '  /> <p> Plot C/99, Block 9, Gulshan-e-Iqbal</p> </div>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'><IoMdCall className='w-7 h-7 ' /> <p> 0345 9599914</p> </div>
                     <div className='flex justify-center items-start gap-x-2 hover:text-[#f1592a]'><MdEmail className='w-7 h-7  ' /> <p>   administration@ikhlasedu.com </p> </div>
                
                     <div className='flex justify-center items-center gap-x-6 w-full md:w-auto'>
                        <Link href="https://www.facebook.com/ikhlasgroupofcolleges/?paipv=0&eav=AfbtsF4ul9EkgR1gvJ-4WnIEKhX8IuFYmqeLyL2kalzBwo1m1f-mtelTGkhdTmt9x5Q&_rdr" target='_blank'>
                       <div className='rounded-full w-[30px] h-[30px]  bg-white hover:text-[#f1592a] transition-all duration-300  flex justify-center items-center'>
                       <FaFacebookF className='w-5 h-5 text-[#262161]'/>                            
                       </div>
                        </Link>
                        <Link href="https://www.instagram.com/ikhlasgroupofcolleges/" target='_blank'>
                       <div className='rounded-full w-[30px] h-[30px]  bg-white hover:text-[#f1592a] transition-all duration-300 flex justify-center items-center'>
                       <FaInstagram  className='w-5 h-5 text-[#262161]'/>                            
                       </div>
                        </Link>
                     </div>
              </div>
              </div>

              
          </div>

          
        </div>
    </footer>
    </>
  )
}
