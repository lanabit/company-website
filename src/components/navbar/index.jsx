import Image from "next/image"
import Link from "next/link"
export default function Navbar() {
  return(
    <div className="flex flex-col fixed top-0 z-50 w-full">
      <div className="flex justify-center w-[100%] bg-white w-full">
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
      <div className="w-[100%] flex justify-center" fill="transparent">
      <div className="border-b-[2px] border-white w-full flex justify-around w-[600px] text-sm font-bold text-white tracking-widest uppercase">
        <Link href={'/about-us'}><p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap hover:[text-shadow:_0_0_0_rgb(0_0_0_/0%)]">About Us</p></Link>
        <p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Brands</p>
        <p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Loyalty Program</p>
        <p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Team</p>
        <p className="p-2 px-16 hover:bg-white hover:text-black text-nowrap">Contact</p>
      </div>
      </div>
    </div>
    
  )
}