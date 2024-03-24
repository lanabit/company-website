'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export default function Navbar() {
  let pathname = usePathname()
  // pathname = pathname.split('/')
  let regex = /^\/brands(?:\/|$)/

  const [ navbar, setNavbar ] = useState(false)
  const [ windowWidth, setWindowWidth ] = useState(0)
  const [ mobile, setMobile ] = useState(false)
  const pageScrolled = () => {
    setNavbar(false)
    if(window.scrollY > 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const pageResized = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', pageResized)
    if(regex.test(pathname) || windowWidth < 769){
      setNavbar(true)} 
    else{
      setNavbar(false)
      window.addEventListener('scroll',pageScrolled)
    }

    return () => {
      window.removeEventListener('scroll', pageScrolled);
      window.removeEventListener('resize',pageResized)
    }
  },[pathname, windowWidth])

  return(
    <div className="flex flex-col fixed top-0 z-50 w-screen">
      { navbar ? 
      <div>
      <div className="border-b-[2px] border-black flex justify-center transition bg-white w-[100%] w-full">
        <Link href={'/'}>
        <Image 
          src="/logo.png"
          alt="Union Group Logo"
          width={100} 
          height={100} 
          className="py-3"
        />
        </Link>
      </div> 
      
      <div className="w-[100%] flex flex-col justify-center">
        <div className={`md:hidden text-black font-bold bg-white flex gap-2 justify-center border-b-2 border-black items-center uppercase tracking-widest text-sm py-2 w-full cursor-pointer`} onClick={() => setMobile(!mobile)}>Menu { mobile ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        <div className={`${mobile ? "block transition-all ease-in duration-100" : "hidden"}  md:border-b-2 md:border-black w-full text-center bg-white md:grid md:grid-cols-4 text-sm font-bold text-black tracking-widest uppercase`}>
          <Link href={'/about-us'}><p className="py-8 border-b-2 border-black md:border-none md:py-2 px-16 hover:bg-black hover:text-white text-nowrap hover:[text-shadow:_0_0_0_rgb(0_0_0_/0%)]">About Us</p></Link>
          <Link href={'/brands'}><p className="py-8 border-b-2 border-black md:border-none md:py-2 px-16 hover:bg-black hover:text-white text-nowrap">Brands</p></Link>
          <Link href={'/team'}><p className="py-8 border-b-2 border-black md:border-none md:py-2 px-16 hover:bg-black hover:text-white text-nowrap">Team</p></Link>
          <Link href={'/contact'}><p className="py-8 border-b-2 border-black md:border-none md:py-2 px-16 hover:bg-black hover:text-white text-nowrap">Contact</p></Link>
        </div>
      </div>
      </div>
      : 
      <div>
      <div className="border-b-[2px] border-white flex justify-center w-[100%] w-full">
        <Link href={'/'}>
        <Image 
          src="/logo-white.png"
          alt="Union Group Logo"
          width={100} 
          height={100} 
          className="py-3"
        />
        </Link>
      </div>
      <div className="w-[100%] flex justify-center">
      <div className="border-b-[2px] border-white w-full grid text-center grid-cols-4 w-[600px] text-sm font-bold text-white tracking-widest uppercase">
        <Link href={'/about-us'}><p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap hover:[text-shadow:_0_0_0_rgb(0_0_0_/0%)]">About Us</p></Link>
        <Link href={'/brands'}><p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Brands</p></Link>
        <Link href={'/team'}><p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Team</p></Link>
        <Link href={'/contact'}><p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Contact</p></Link>
      </div>
      </div>
      </div>
      }
      
      
      
    </div>
    
  )
}