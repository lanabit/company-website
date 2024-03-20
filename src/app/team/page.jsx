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
        <div className="bg-gradient-to-b h-full w-full absolute from-black/40 to-transparent">
        </div>
        <div className="absolute text-white ml-32 w-[80vw] mt-[50vh]">
          <h1 className="text-8xl">
          The union behind UNION
          </h1>
        </div>
        <img
          src="/homepage_hero4.jpg"
          className="h-[100vh] w-[100vw] object-cover object bottom"
          alt="Hero Image"
        />
      </div>

      <div className="flex my-8 w-[100vw] gap-6 justify-center">
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
    </div>
  )
}