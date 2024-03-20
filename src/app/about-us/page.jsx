'use client'
import Image from "next/image"
import { useGetTeam } from "~/api/useGetTeam"

export default async function About() {
  const { team, onFetchTeam } = useGetTeam()
  let a = await onFetchTeam()
  a = a.results
  // console.log('a', a)
  console.log(team)
  return(
    <div className="flex min-h-screen flex-col items-center justify-between z-0 w-full">
      <div className="h-[100vh] w-full relative">
        <h1 className="absolute text-white text-8xl h-[90vh] ml-32 drop-shadow-lg mt-[50vh]">
          What UNION is about
        </h1>
        <img
          src="/homepage_hero5.jpg"
          className="h-[100vh] w-full object-cover object-center"
          alt="Hero Image"
        />
      </div>

      <div className="w-[full] mt-24">
        <h1 className="text-center font-medium mb-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          HISTORY </h1>

        <p className="text-center font-medium w-[60vw] mx-auto">Since our founding in 2007, we at The Union Group have embarked on a remarkable journey dedicated to redefining the culinary landscape of Indonesia. From our humble beginnings, we envisioned creating exceptional dining experiences that would resonate with discerning palates and celebrate the rich tapestry of global cuisines. Over the years, we've expanded our footprint across Indonesia, introducing a diverse array of restaurants that have become synonymous with innovation and excellence. From the iconic Union restaurant, where international and Indonesian flavors converge with style, to our latest award-winning bar The Cocktail Club, we've continually pushed boundaries and set new standards in gastronomy. Our commitment to quality, creativity, and creating memorable dining moments has propelled us forward, and today, we stand as a beacon of culinary excellence, cherished by patrons across Indonesia and beyond. As we continue to evolve and grow, our passion for crafting exceptional culinary experiences remains unwavering, driving us to new heights of success and innovation.</p>
        
        <h1 className="text-center font-medium mt-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          CULTURE & ASPIRATIONS </h1>
        
        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
          Beyond the palate and the plate
          </h2>
          <p className="text-center font-medium">
          Creativity is our greatest asset. We embrace creativity in our culinary creations, our restaurant concepts, and our approach to hospitality. We are not afraid to push boundaries, experiment with new flavors, and challenge conventional wisdom to deliver fresh and exciting experiences that delight the senses and inspire the imagination.
          </p>
        </div>

        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
            {`Setting the standard for Indonesia’s
            culinary and service industry`}
          </h2>
          <p className="text-center font-medium">
          We strive for excellence in every aspect of our business, from the quality of our ingredients to the service we provide to our guests. We are committed to continuous improvement and innovation, always seeking to exceed expectations and set new standards of excellence in the F&B industry.
          </p>
        </div>

        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
            Every visit an experience
          </h2>
          <p className="text-center font-medium">
          Our mission is to be more than just a restaurant; we aim to be a destination where you can escape the hustle and bustle of everyday life and immerse yourself in a world of culinary delights and heartfelt hospitality. We are not merely in the business of food and beverages; we are in the business of creating moments, memories, and connections.  Let us serve you in the celebration of life, love, and the joy of good food shared with good company.
          </p>
        </div>

        <h1 className="text-center font-medium mt-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          TEAM </h1>

        <div className="flex flex-wrap justify-center">
          {a.map((x,i) => {
            return(
              <div key={i} className="m-8 border-2 justify-between border-black flex flex-col">
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
      </div>
    </div>
  )
}