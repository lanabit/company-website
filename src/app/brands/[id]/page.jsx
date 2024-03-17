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
    <div className="my-[130px]">
      <div className="group border-b-[2px] border-black h-20 items-center flex justify-center bg-[#f5ecd0]">
        <svg className="text-[#292559] fill-current h-12" xmlns="http://www.w3.org/2000/svg" viewBox={`${filteredData[0].viewbox}`}><path d={`${filteredData[0].path}`}/></svg>
      </div>
      <div className="flex overflow-hidden border-b-2 border-black">
        <img className="border-r-2 border-black h-[40vh] w-[800px] object-cover" src="/pierre-wide.jpeg"/>
        <img className="border-r-2 border-black h-[40vh] w-[800px] object-cover" src="/pierre/2.jpg" />
        <img className="border-r-2 border-black h-[40vh] w-[400px] object-cover" src="/pierre/1.jpg" />
        <img className="border-r-2 border-black h-[40vh] w-[400px] object-cover" src="/pierre/3.jpg" />
      </div>
      <div className="mt-16">
      <div className="text-center w-[50vw] mx-auto my-8 text-lg font-bold">
        {filteredData[0].tagline}
      </div>
      <div className="text-center w-[70vw] mx-auto my-8">
        {filteredData[0].desc}
      </div>
      {filteredData[0].address.map((x,i)=>{
        return(
          <div key={i} className="whitespace-pre">
            {`${x.details} ${x.openinghours}`}
          </div>
        )
      })}
      </div>
    </div>
  )
}