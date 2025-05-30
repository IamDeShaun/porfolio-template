import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
         <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
         <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
         <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officia commodi placeat ipsa error aspernatur, laboriosam adipisci enim labore ullam? Minima dignissimos soluta explicabo, laborum consequuntur quasi neque ipsum nemo.</p>

         <div className='grid sm:auto-cols-[minmax(200px,1fr)] lg:grid-cols-4 gap-6 my-10'>
              {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-xl cursor-pointer darkmodecardhover hover:bg-blue-100 hover:-translate-y-1 duration-500 darkmodecopy'>
                      <Image src={icon} alt='Icon Title' className='w-10' />
                      <h3 className='text-lg my-4 text-gray-700 darkmodecopy'>{title}</h3>
                      <p className='darkmodecopy text-sm text-gray-600 leading-5'>
                        {description}
                      </p>
                      <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image src={assets.right_arrow} className='w-4' alt="Right Arrow" />
                      </a>
                </div>
              ))}
         </div>
    </div>
  )
}

export default Services
