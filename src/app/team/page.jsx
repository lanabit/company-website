'use client'
import Image from "next/image"
import { useGetTeam } from "~/api/useGetTeam"
export default async function Team() {
  const { onFetchTeam, team } = useGetTeam()
  let a = await onFetchTeam()
  a = a.results

  return(
    <div>
      <div className="relative h-[100vh] w-[100vw]">
        <div className="bg-gradient-to-b h-[65vh] w-full absolute from-black/40 to-transparent">
        </div>
        <div className="h-[65vh] w-full relative"> 
          <Image
            src={"/homepage_hero4.jpg"}
            fill="true"
            className="object-cover object-center border-b-2 border-black"
            alt="Hero Image"
            quality={100}
          />
        </div>
        <div className="absolute text-center w-full mt-24 lg:mt-20">
          <div className="text-3xl lg:text-5xl">The team behind <span className="font-bold tracking-widest">UNION</span></div>
          <div className="w-[80vw] mx-auto text-base lg:w-[70vw] lg:text-xl mt-8">Our company is run by dozens upon dozens of talented and hard working individuals. To make sure these people move in harmony to achive their best potentials, we need exceptional conductors. Here are our exceptional conductors.</div>
        </div>
      </div>

      <div className="hidden lg:flex mb-16 w-[100vw] gap-6 justify-center">
      {a.map((x,i) => {
      return(
          <div key={i} className="flex w-[150px] h-[700px] transition-all group hover:w-[300px] flex-col border-2 border-black">
            <Image
            src={x.picture?.large}
            height={300}
            width={300}
            alt="user"
            quality={100}
            className=""/>
            <div className="m-4 flex flex-col items-start h-full justify-between">  
              <div>
              <div className="font-bold text-lg">{x.name.first} {x.name.last} - {x.role.title}</div>
              <div className="text-xs tracking-wider">{x.role.expertise}</div>
              <div className="hidden transition-all group-hover:block text-sm my-4">{x.role.description}</div>
              </div>
              <div>
              {/* <button className="bg-red-400 p-2 bg-black text-white">CONTACT</button> */}
              <div className="hidden group-hover:block text-xs tracking-wider">contact</div>
              <div className="hidden transition-all group-hover:block hover:cursor-pointer hover:bg-yellow-200">{x.email}</div>
              </div>
            </div>
          </div>
        )
      })}
      </div>

      <div className="lg:hidden flex flex-col mb-16 w-[100vw] gap-6 justify-center items-center">
      {a.map((x,i) => {
      return(
          <div key={i} className="flex w-[90vw] md:w-[60vw] h-[200px] hover:h-[400px] transition-all group border-2 border-black ">
           
            <Image
            src={x.picture?.large}
            height={300}
            width={300}
            alt="user"
            quality={100}
            className="object-cover"/>
           
            <div className="my-8 mx-8 w-[60%] flex flex-col justify-between">  
              <div className="flex flex-col w-[100%]">
              <div className="font-bold text-lg">{x.name.first} {x.name.last} - {x.role.title}</div>
              <div className="text-xs tracking-wider">{x.role.expertise}</div>
              </div>
              <div className="hidden transition-all group-hover:block text-sm">{x.role.description}</div>
              <div>
              <div className="hidden group-hover:block text-xs tracking-wider">contact</div>
              <div className="hidden transition-all group-hover:block hover:cursor-pointer hover:bg-yellow-200">{x.email}</div>
              </div>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}