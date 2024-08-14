import AboutFeature from '@/components/AboutFeature'
import AboutVision from '@/components/AboutVision'
import BoxLine from '@/components/BoxLine'
import CEO from '@/components/CEO'
import CoreValue from '@/components/CoreValue'
import Marquis from '@/components/Marquis'
import React from 'react'

export default function page() {
  const data = [
    {
      title1: 'Vision',
      text1: 'At Ikhlas Group of Colleges, we envision pioneering advancements in healthcare education, research, and innovation to foster a healthier, more sustainable future for all.',
      url1:"/vision.png",
      title2: 'Mission',
      text2: 'Our mission is to empower students with comprehensive knowledge, skills, and ethical values essential for excellence in pharmaceutical sciences. We are committed to conducting cutting-edge research, engaging in community service and fostering collaborations to address global healthcare challenges.',
      url2:"/mission.png",
    },
    {
      title1: 'Core Values ',
      text1: 'At Ikhlas Group of Colleges, our core values are the pillars of our dedication to excellence in healthcare education. These values guide our mission and shape our community.',
      url1:"/values.png",
      title2: 'Compassion',
      text2: 'We believe in the power of empathy and compassion. Our goal is to instill these qualities in our students, ensuring they provide patient-centered care that respects every individual dignity.',
      url2:"/compassion.png",
    },
    {
      title1: 'Excellence',
      text1: 'We strive for excellence in all we do. Our commitment to high standards and continuous improvement drives our academic and practical training.',
      url1:"/excellence.png",
      title2: 'Integrity',
      text2: 'Integrity is the cornerstone of our institution. We uphold the highest ethical standards, ensuring honesty and accountability in all our actions.',
      url2:"/integrity.png",
    },
    {
      title1: 'Lifelong Learning',
      text1: 'We promote a passion for lifelong learning, encouraging our students to remain curious and adaptable in the ever-evolving healthcare field.',
      url1:"/lifelong.png",
      title2: 'Service',
      text2: 'A deep sense of service to patients, colleagues, and the community is at our core. We emphasize the importance of making a positive impact through compassionate care and community engagement.',
      url2:"/service.png",
    },
    {
      title1: 'Innovation',
      text1: 'We embrace innovation and creative thinking. By fostering a culture of research and development, we aim to contribute to advancements in healthcare.',
      url1:"/innovation.png",
      title2: 'Collaboration',
      text2: 'We value collaboration and partnerships with healthcare institutions, industry leaders, and the community to enhance learning, research, and service. By upholding these core values, Ikhlas Group of Colleges is committed to shaping future healthcare professionals who lead with compassion, integrity, and excellence.',
      url2:"/collaboration.png",
    }
    
  ]
  return (
    <div className='mt-24 lg:mt-0 mb-16'>
      <AboutFeature/>
      <CEO/>
      <BoxLine data={data[0]}/>
      <BoxLine data={data[1]}/>
      <BoxLine data={data[2]}/>
      <BoxLine data={data[3]}/>
      <BoxLine data={data[4]}/>
      <Marquis/>
    </div>
  )
}
