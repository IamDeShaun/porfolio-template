import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = ({IsDark}) => {
  return (
    <div id="work" className='w-full px-[12%] py-10 scroll-mt-20'> 
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
    <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
    <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laudantium in odio illum debitis ducimus facilis nulla corrupti vel, eum soluta similique sunt, cum autem atque sequi harum cumque? Unde.</p>
    <div className='grid sm:auto-cols-[minmax(200px,1fr)] lg:grid-cols-4 my-10 gap-5'>
        {workData.map((project, index)=>(
           <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
            key={index} style={{backgroundImage: `url(${project.bgImage})`}}>
                <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold darkservicetext'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-100 transition'>
                            <Image src={assets.send_icon}  alt='send icon' className='w-5'/>
                        </div>
                </div>
           </div> 
        ))}
    </div>
    <a href="" className='darkmodebtn w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-100 duration-500'>
        Show more <Image src={IsDark ? assets.right_arrow_white : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
    </a>
</div>
  )
}

export default Work