import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Contact() {
  return(
    <div className="mb-80 md:mb-60 lg:mb-5">
      <div className="h-[100vh] w-[100vw]">
        <img
          src="/homepage_hero7.jpg"
          className="h-[65vh] w-full object-cover object-center border-b-2 border-black"
          alt="Hero Image"
        />
        <div className="absolute flex flex-col lg:grid lg:grid-cols-3 justify-items-center mt-14 ml-32 gap-16">
          <h1 className="text-5xl lg:text-8xl">
          Let's get in touch
          </h1>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-bold">The Union Group HQ</p>
            <div>
              <p>Plaza Mutiara Lt. 5 Suite 503</p>
              <p>Jl. Dr. Ide Anak Agung Gde Agung Kav. 1-2 No. 1 & 2</p>
              <p>Jakarta Selatan 12950</p>
            </div>
            
            <p>info@uniongroupjakarta.com</p>
            <p>+6221 2510191</p>
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <p className="underline">For career opportunities</p>
              <p>recruitment@uniongroupjakarta.com</p>
            </div>
            <div className="">
              <div className="flex text-3xl gap-2">
              <FaInstagram/>
              <FaLinkedin></FaLinkedin>
              <FaTwitter></FaTwitter>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}