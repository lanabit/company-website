import Image from "next/image";
import db from '../../db/db.json'
import Link from "next/link";
export default async function Home() {
  let a = db.reviews
  return (
    <div className="flex min-h-screen flex-col items-center justify-between z-0 w-full">
      <div className="h-[100vh] w-full relative">
        <img
          src="/homepage_hero2.jpg"
          className="h-[65vh] w-[100vw] object-cover border-b-2 border-black"
          alt="Hero Image"
        />
        <div className="absolute text-center w-full mt-24 lg:mt-20">
          <div className="text-5xl lg:text-8xl">Gather at the table of <span className="font-bold tracking-widest">UNION</span></div>
          <div className="w-[80vw] mx-auto text-lg lg:w-[80vw] lg:text-2xl mt-8">Time-tested excellence in dining awaits you, honed over a decade of unparalleled service and culinary craft</div>
        </div>
      </div>
      <div className="z-0 flex flex-col gap-24">
        <div className="w-[80vw] md:w-[60vw] mx-auto flex flex-col gap-8">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">{`WESTERN FOOD AS A NICHE,\nLOCAL FLAVOR AS A COMPASS`}</h2>
          <p className="text-center font-medium">With Western cuisine as the vessel of our dish exploration, we envisioned creating exceptional dining experiences that would resonate with discerning palates and celebrate the rich tapestry of global gastronomy. Over the years, we've expanded our footprint across Indonesia, introducing a diverse array of restaurants. From the iconic Union restaurant to the award-winning The Cocktail Club, our kitchens marry the western and local richness and continually pushed boundaries in the food & beverage industry. Our commitment to quality, creativity, and creating memorable dining moments has propelled us forward. Today, we stand as a beacon of culinary excellence, cherished by patrons across Indonesia and beyond.</p>
        </div>
        
        <div className="w-[60vw] mx-auto flex flex-col gap-8">
        <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">{`10 BRANDS, 23 OUTLETS, \n17 YEARS OF EXPERIENCE`}</h2>
        <div className="flex w-[100px] flex-wrap md:w-[600px] items-center justify-center gap-4 mx-auto">
          <Image
            src={"/brands-logo/BARLUCA-LOGO-FIN.png"}
            width={100}
            height={100}
            alt="Bar Luca Logo"
          ></Image>
          <Image
            src={"/brands-logo/bouchon.png"}
            width={100}
            height={50}
            alt="Bouchon Logo"
          ></Image>
          <Image
            src={"/brands-logo/caffe-milano.png"}
            width={100}
            height={100}
            alt="Caffe Milano Logo"
          ></Image>
          <Image
            src={"/brands-logo/corknscrew.png"}
            width={100}
            height={100}
            alt="Cork & Screw Logo"
          ></Image>
          <Image
            src={"/brands-logo/corknscrewcc.png"}
            width={100}
            height={100}
            alt="Cork & Screw Country Club Logo"
          ></Image>
          <Image
            src={"/brands-logo/loewy.png"}
            width={100}
            height={100}
            alt="Loewy Logo"
          ></Image>
          <Image
            src={"/brands-logo/pierre.png"}
            width={100}
            height={100}
            alt="Pierre Logo"
          ></Image>
          <Image
            src={"/brands-logo/roma.png"}
            width={100}
            height={100}
            alt="Roma Logo"
          ></Image>
          <Image
            src={"/brands-logo/thecocktailclub.png"}
            width={100}
            height={100}
            alt="The Cocktail Club Logo"
          ></Image>
          <Image
            src={"/brands-logo/union.png"}
            width={100}
            height={100}
            alt="Union Logo"
          ></Image>
        </div>
        </div>

        <div className="mx-auto flex flex-col gap-8">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">{`VETTED BY MEDIA'S BEST FOOD CRITICS`}</h2>
          <div className="grid lg:grid-cols-5 border-y-2 border-black">
          {a.map((x,i) => {
            return(
              <div key={i} className="border-b-2 lg:border-b-0 lg:border-r-2 last:border-none p-8 border-black flex flex-col justify-between">
                <div className="text-md italic">"...{x.review}."</div>
                <div className="pt-8">
                <div className="font-bold">{x.name}</div>
                <div className="text-sm">{x.title}</div>
                <div className="text-sm italic">{x.affiliation}</div>
                </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>


      <Link href={'/about-us'}>
      <button className="bg-white border-2 border-black transition text-black hover:bg-black hover:text-white p-4 m-16 group">Learn more about <span className="tracking-widest font-bold group-hover:text-yellow-200">UNION</span></button></Link>
    </div>
  );
}
