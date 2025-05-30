import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'


const Footer = ({isDark}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDark ? assets.logo_dark : assets.logo} alt='Logo' className='w-36 mx-auto mb-2' />

            <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={isDark ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
                addemailhere@gmail.com 
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 ADD SITE BRAND HERE. All rights reserved.</p>
            <ul className='flex items-center gap-10'>
                <li><a target='_blank' href="#">GitHub</a></li>
                <li><a target='_blank' href="#">LinkedIn</a></li>

            </ul>
        </div>
    </div>
  )
}

export default Footer