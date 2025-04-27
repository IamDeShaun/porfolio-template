import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useEffect, useRef, useState}  from 'react'

const navbar = ({IsDark, setIsDark}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect (()=>{
            window.addEventListener('scroll', ()=>{
                if(scrollY > 50) {
                    setIsScroll(true)
                }else {
                    setIsScroll(false)
                }
            })
    }, [])  

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] '>
        <Image src={assets.header_bg_color} alt="Header Background" className='w-full goaway' />
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/40 backdrop-blur-lg shadow-sm darkshadowwhite" : ""}`}>
        <a href="#top">
            <Image src={ IsDark ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt="Brand Logo" />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm darktransparent"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Me</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={()=> setIsDark(prev => !prev)}>
                <Image src={IsDark ? assets.sun_icon : assets.moon_icon} alt="Moon Icon" className='w-6 cursor-pointer' />
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo darkbuttonborder'>Contact <Image src={IsDark ? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt="Arrow Pointer" /></a>
            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={IsDark ? assets.menu_white : assets.menu_black} alt="Menu Black Icon" className='w-6 cursor-pointer' />
            </button>
        </div>

        {/* ----- mobile menu -----*/}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 darkmobilemenu'>

                <div className='absolute right-6 top-6' onClick={closeMenu}>
                    <Image src={IsDark ? assets.close_white : assets.close_black} alt='Menu Close' className='w-5 cursor-pointer' />
                </div>
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
            </ul>
      </nav>
    </>
  )
}

export default navbar