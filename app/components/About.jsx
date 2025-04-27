import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { infoList } from '@/assets/assets'
import { toolsData } from '@/assets/assets'

const About = ({isDark}) => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='User Image' className='w-full rounded-3xl' />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo dark-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil fugiat ad cupiditate ea minus, amet deserunt ipsa placeat velit? Ratione debitis nobis earum cum quo neque ipsum officiis temporibus ipsa.
                </p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl servicedarktext'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <li className='border-[0.5px] border-gray-400 rounded-xl aboutcard p-6 cursor-pointer hover:bg-blue-100 dark:border-white dark:hover:shadow-white dark:hover:bg-gray-900  hover:-translate-y-1 duration-500 hover:shadow-xl' key={index}>
                            <Image src={isDark ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                            <h3 className='my-4 font-semibold text-gray-700 '>{title}</h3>
                            <p className='text-sm dark-text'>{description}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='my-6 text-gray-700 font-Ovo darkmodecopy'>Tools I Use</h4>
                <ul className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                       <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                       </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About