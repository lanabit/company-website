'use client'
import Image from "next/image"

const onFetchInfo = async() => {
  try {
    let res = await fetch("http://localhost:5000/brands",{
      method: 'GET',
      cache:'no-store'
    })
    res = await res.json()
    return res
  } catch (error) {
    console.log(error)
  }
}



export default async function brandPage({params}) {

  const data = await onFetchInfo()
  const filteredData = data.filter(x => x.id === params.id)
  // brandpage for {params.id}
  // desc: {filteredData[0].desc}
  return(
    <div className="mt-[130px]">
      <div className="group border-b-[2px] border-black h-20 items-center flex justify-center bg-[#f5ecd0]">
        <svg className="text-[#292559] fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox={`${filteredData[0].viewbox}`}><path d={`${filteredData[0].path}`}/><path d={`${filteredData[0]?.path2}`}/></svg>
      </div>
      <div className="relative h-[500px] w-full">
        <Image
          src={filteredData[0].image}
          alt="Picture of the author"
          fill="true"
          objectFit="cover"
          quality="100"
        ></Image>
      </div>
      {/* <div className="flex overflow-hidden border-b-2 border-black">
        <img className="border-r-2 border-black h-[40vh] w-[800px] object-cover" src="/pierre-wide.jpeg"/>
        <img className="border-r-2 border-black h-[40vh] w-[800px] object-cover" src="/pierre/2.jpg" />
        <img className="border-r-2 border-black h-[40vh] w-[400px] object-cover" src="/pierre/1.jpg" />
        <img className="border-r-2 border-black h-[40vh] w-[400px] object-cover" src="/pierre/3.jpg" />
      </div> */}
      <div className="mt-16">
      <div className="text-center w-[30vw] mx-auto my-8 text-lg font-bold">
        {filteredData[0].tagline}
      </div>
      <div className="text-center w-[60vw] mx-auto my-8 mb-16">
        {filteredData[0].desc}
      </div>
      <h1 className="text-center uppercase font-medium text-xl w-[99vw] py-2 border-y-2 border-black">
          Location </h1>
      <div className="w-full justify-center text-center flex py-16 gap-28">
      {filteredData[0].address.map((x,i)=>{
        return(
          <div key={i} className="whitespace-pre flex flex-col gap-4">
            <div className="uppercase text-lg font-bold">{x.name}</div>
            <div>{x.details}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Opening Hours</span>{x.openinghours}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Phone</span> {x.phone}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Whatsapp</span> {x.wa}</div>
          </div>
        )
      })}
      </div>
      <div className="grid grid-cols-3 w-full border-2 border-black">
        {filteredData[0].gallery.map((x,i) => {
          return(
            <div key={i} className="relative h-[500px]">
              <Image
                src={x}
                fill="true"
                alt={filteredData[0].name}
                objectFit="cover"
              ></Image>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}