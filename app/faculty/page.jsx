import Faculty from '@/components/Faculty';
import { Merriweather, Montserrat } from 'next/font/google';
import React from 'react'

const montserrat = Montserrat({ weight:"600", subsets: ["latin"] });
const merriweather = Merriweather({ weight: "700", subsets: ["latin"] });
export default function page() {
   const permanent = 'Permanent'
   const visiting = 'Visiting'
  return (
    <div>
        <Faculty data={permanent}/>
        <Faculty data={visiting}/>
    </div>
  )
}
