import React from 'react'
import Image from 'next/image'
import {assets} from '@/assets/assets'

const Contact = () => {
  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
    <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium in odio illum debitis ducimus facilis nulla corrupti vel, eum soluta similique sunt, cum autem atque sequi harum cumque? Unde.</p>

    <form className='max-w-2xl mx-auto'>
        <div className='grid sm:auto-cols-[minmax(200px,1fr)] gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter your name' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' />
        </div>
        <textarea row='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'></textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white} alt="Submit Button" className='w-4' /></button>
    </form>
    </div>
  )
}

export default Contact