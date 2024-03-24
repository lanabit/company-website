import Image from "next/image"
import db from '../../../../db/db.json'


export default async function brandPage({params}) {
  const data = db.brands
  const filteredData = data.filter(x => x.id === params.id)


  const Header = () => {
    const bgColor = filteredData[0].color[0].bg;
    const logoColor = filteredData[0].color[0].logo;

    return(
      <div className={`border-b-[2px] border-black h-20 items-center flex justify-center`} style={{backgroundColor: bgColor}}>
        {filteredData[0].logo ?
        <Image
        src={filteredData[0].logo}
        height={180}
        width={180}
        alt="logo"
        />
        : <svg className={`fill-current ${params.id === "bouchon" ? "h-8 lg:h-12" : "h-12"}`} style={{color: logoColor}} xmlns="http://www.w3.org/2000/svg" viewBox={`${filteredData[0]?.viewbox}`}><path d={`${filteredData[0]?.path}`}/><path d={`${filteredData[0]?.path2}`}/></svg> }
      </div>
    )
  }

  return(
    <div className="mt-[130px]">
      <Header></Header>
      {/* <div className={`border-b-[2px] border-black h-20 items-center flex justify-center ${bgColor}`}>
        {filteredData[0].logo ?
        <Image
        src={filteredData[0].logo}
        height={180}
        width={180}
        alt="logo"
        />
        : <svg className={`${logoColor} fill-current h-8 lg:h-12`} xmlns="http://www.w3.org/2000/svg" viewBox={`${filteredData[0]?.viewbox}`}><path d={`${filteredData[0]?.path}`}/><path d={`${filteredData[0]?.path2}`}/></svg> }
      </div> */}
      <div className="relative h-[500px] w-full border-b-2 border-black">
        <Image
          src={filteredData[0].image}
          alt="Picture of the author"
          fill="true"
          objectFit="cover"
          quality="100"
        ></Image>
      </div>
      <div className="mt-16">
      <div className="text-center w-[70vw] lg:w-[50vw] mx-auto my-8 lg:text-lg font-bold">
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
            <div className="uppercase">{x.details}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Opening Hours</span>{x.openinghours}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Phone</span> {x.phone}</div>
            <div className="flex flex-col"><span className="text-neutral-500 text-sm font-bold">Whatsapp</span> {x.wa}</div>
          </div>
        )
      })}
      </div>
      <div className="grid lg:grid-cols-3 w-full border-y-2 border-black">
        {filteredData[0].gallery.map((x,i) => {
          return(
            <div key={i} className="relative border-b-2 lg:border-r-2 last:border-bone border-black h-[500px]">
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