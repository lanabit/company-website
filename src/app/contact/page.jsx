import Image from "next/image"

export default function Contact() {
  return(
    <div>
      <div className="relative h-[100vh] w-[100vw]">
        <div className="bg-gradient-to-b h-full w-full absolute from-black/40 to-transparent">
        </div>
        <div className="absolute text-white ml-32 w-[80vw] mt-[40vh]">
          <h1 className="text-8xl">
          Let's get in touch
          </h1>
          <p>The Union Group HQ</p>
          <p>Plaza Mutiara Lt. 5 Suite 503. Jl.Dr. Ide Anak Agung Gde Agung Kav. 1-2 No. 1 & 2 Jakarta Selatan 12950</p>
          <p>info@uniongroupjakarta.com</p>
          <p>+6221 2510191</p>
          <p>For career opportunities</p>
          <p>recruitment@uniongroupjakarta.com</p>
        </div>
        <img
          src="/homepage_hero7.jpg"
          className="h-[100vh] w-[100vw] object-cover object bottom"
          alt="Hero Image"
        />
      </div>
    </div>
  )
}