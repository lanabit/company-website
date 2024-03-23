'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'

export default function Navbar() {
  let pathname = usePathname()
  // pathname = pathname.split('/')
  let regex = /^\/brands(?:\/|$)/

  const [ navbar, setNavbar ] = useState(false)
  
  const pageScrolled = () => {
    setNavbar(false)
    if(window.scrollY > 80){
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    if(regex.test(pathname)){
      setNavbar(true)} 
    else{
      setNavbar(false)
      window.addEventListener('scroll',pageScrolled)
    }

    return () => {
      window.removeEventListener('scroll', pageScrolled);
    }
  },[pathname])

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
      
      <div className="w-[100%] flex justify-center">
      <div className="border-b-[2px] border-black w-full grid text-center grid-cols-4 w-[600px] text-sm font-bold text-black bg-white tracking-widest uppercase">
        <Link href={'/about-us'}><p className="p-2 px-16 hover:bg-black hover:text-white text-nowrap hover:[text-shadow:_0_0_0_rgb(0_0_0_/0%)]">About Us</p></Link>
        <Link href={'/brands'}><p className="p-2 px-16 hover:bg-black hover:text-white text-nowrap">Brands</p></Link>
        <Link href={'/team'}><p className="p-2 px-16 hover:bg-black hover:text-white text-nowrap">Team</p></Link>
        <Link href={'/contact'}><p className="p-2 px-16 hover:bg-black hover:text-white text-nowrap">Contact</p></Link>
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