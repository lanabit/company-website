'use client'
import Image from "next/image"
import { useGetTeam } from "~/api/useGetTeam"
import db from "../../../db/db.json"
import Timeline from "~/components/timeline"
import Link from "next/link"
export default async function About() {
  const { onFetchTeam } = useGetTeam()
  let a = await onFetchTeam()
  a = await a.results
  
  return(
    <div className="flex min-h-screen flex-col items-center justify-between z-0 w-full ">
      <div className="h-[100vh] w-full relative">
        <div className="h-[50vh] w-full absolute bg-black/20">

        </div>
        <img
          src="/homepage_hero5.jpg"
          className="h-[65vh] w-full object-cover object-center border-b-2 border-black"
          alt="Hero Image"
        />
        <div className="absolute text-center w-full mt-24 lg:mt-20">
          <div className="text-5xl lg:text-8xl">Get to know us</div>
          <div className="w-[80vw] mx-auto text-lg lg:w-[80vw] lg:text-2xl mt-8">Our history, what we are all about -- we will lay it all out here</div>
        </div>
      </div>

      <div className="w-screen">
        <h1 className="text-center font-medium mb-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          HISTORY </h1>

        <div className="flex flex-col gap-8 my-20">
        <Timeline />
        <p className="text-center font-medium w-[60vw] mx-auto whitespace-pre-line">{`Our journey started with a Spanish bar & restaurant called Casa that nestled in the heart of Kemang. That first endeavour with the culinary industry quickly became a passion that does not seem to ever cease. 
        
        Dedicated to redefining the culinary landscape of Indonesia, we eventually decided to officially run the family of restaurants under the company name of The Union Group in 2014. From our humble beginnings, we envisioned creating exceptional dining experiences that would resonate with discerning palates and celebrate the rich tapestry of global cuisines.
        
        Over the years, we've expanded our footprint across Indonesia, introducing a diverse array of restaurants that have become synonymous with innovation and excellence. From the iconic Union restaurant, where international and Indonesian flavors converge with style, to our latest award-winning bar The Cocktail Club, we've continually pushed boundaries and set new standards in gastronomy. Our commitment to quality, creativity, and creating memorable dining moments has propelled us forward, and today, we stand as a beacon of culinary excellence, cherished by patrons across Indonesia and beyond. As we continue to evolve and grow, our passion for crafting exceptional culinary experiences remains unwavering, driving us to new heights of success and innovation.`}</p>
        </div>
        
        <h1 className="text-center font-medium mt-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          CULTURE & ASPIRATIONS </h1>
        
        <div className="flex flex-col gap-16 my-20">
        <div className="flex flex-col lg:flex-row w-[60vw] mx-auto gap-16 items-center">
          <Image
          src={'/loewy/1.jpg'}
          height={450}
          width={450}
          alt="beyond the plate"
          quality={100}
          className="border-2 border-black"
          ></Image>
          <div className="flex flex-col gap-5 text-center lg:text-left">
            <h2 className="w-full font-bold tracking-wider text-3xl whitespace-pre-line">
            Beyond the palate and the plate
            </h2>
            <p className="font-medium">
            Creativity is our greatest asset. We embrace creativity in our culinary creations, our restaurant concepts, and our approach to hospitality. We are not afraid to push boundaries, experiment with new flavors, and challenge conventional wisdom to deliver fresh and exciting experiences that delight the senses and inspire the imagination.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col-reverse lg:flex-row w-[60vw] mx-auto gap-16 items-center">
          <div className="flex flex-col gap-5 w-[60vw] mx-auto">
            <h2 className="w-full text-center lg:text-right font-bold tracking-wider text-3xl whitespace-pre-line">
              {`Setting the standard for Indonesia’s
              culinary and service industry`}
            </h2>
            <p className="text-right font-medium">
            We strive for excellence in every aspect of our business, from the quality of our ingredients to the service we provide to our guests. We are committed to continuous improvement and innovation, always seeking to exceed expectations and set new standards of excellence in the F&B industry.
            </p>
          </div>
          <Image
          src={'/loewy/4.jpg'}
          height={450}
          width={450}
          alt="beyond the plate"
          quality={100}
          className="border-2 border-black"
          ></Image>
        </div>

        <div className="flex flex-col lg:flex-row w-[60vw] mx-auto gap-16 items-center">
          <div className="relative h-[600px] w-[500px] lg:w-[850px] lg:h-[600px]">
          <Image
          src={'/bar-luca/3.jpg'}
          /* height={450}
          width={450} */
          fill="true"
          alt="beyond the plate"
          quality={100}
          className="border-2 border-black object-cover"
          ></Image>
          </div>
          <div className="flex flex-col gap-5 w-[60vw] text-center lg:text-left mx-auto">
            <h2 className="w-full font-bold tracking-wider text-3xl whitespace-pre-line">
              Every visit an experience
            </h2>
            <p className="font-medium">
            Our mission is to be more than just a restaurant; we aim to be a destination where you can escape the hustle and bustle of everyday life and immerse yourself in a world of culinary delights and heartfelt hospitality. We are not merely in the business of food and beverages; we are in the business of creating moments, memories, and connections.  Let us serve you in the celebration of life, love, and the joy of good food shared with good company.
            </p>
          </div>
        </div>
        </div>

        <h1 className="text-center font-medium text-xl w-[99vw] py-2 border-y-2 border-black">
          TEAM </h1>

        <div className="flex flex-col gap-16 my-20 items-center">
        <p className="text-center font-medium w-[60vw]">
          We value each of the strengths each member of our teams bring to the table. We have some of the best leaders whose competence and ability to make the most of everybody's strength have brought our company to exceed expectations we set for ourselves.
        </p>
        <div className="grid sm:flex sm:flex-wrap gap-10 justify-center">
          {a.map((x,i) => {
            return(
              <div key={i} className="border-2 justify-between border-black flex flex-col">
                <Image
                src={x.picture?.large}
                height={200}
                width={200}
                alt="user"
                quality={100}
                className="border-b-2 border-black"/>
                <div className="font-bold m-2 w-[120px]">{x.name.first} {x.name.last}</div>
                <div className="font-bold m-2 w-[120px]">{x.role.title}</div>
              </div>
            )
          })}
        </div>
        <Link href={'/team'}>
        <button className="bg-white border-2 border-black transition text-black hover:bg-black hover:text-white p-4 group">More about our team</button></Link>
        </div>
      </div>
    </div>
  )
}