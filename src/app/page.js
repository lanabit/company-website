import Image from "next/image";

export default async function Home() {
  const onFetchInfo = async() => {
    try {
      let res = await fetch("http://localhost:5000/reviews",{
        method: 'GET',
        cache:'no-store'
      })
      res = await res.json()
      return res
    } catch (error) {
      console.log(error)
    }
  }
  
  let a = await onFetchInfo()
  return (
    <div className="flex min-h-screen flex-col items-center justify-between z-0 w-full">
      <div className="h-[100vh] w-full relative">
        <div className="absolute text-white z-40 text-center h-[90vh] drop-shadow-lg w-full mt-[49vh]">
          <div className="text-8xl">Gather at the table of UNION</div>
          <div className="text-2xl my-8">We know a thing or two about providing an unforgettable dining experience.</div>
        </div>
        <div className="w-full h-full bg-black/30 absolute">
        </div>
        <img
          src="/homepage_hero2.jpg"
          className="h-[100vh] w-[100vw] object-cover object bottom"
          alt="Hero Image"
        />
      </div>
      <div className="w-[60vw] z-40 my-32">
      <h2 className="w-full text-center font-bold tracking-wider text-3xl mb-16 whitespace-pre-line">{`WESTERN FOOD AS A NICHE,\nLOCAL FLAVOR AS A COMPASS`}</h2>
        <p className="text-center font-medium">Founded in 2007, we at The Union Group have embarked on a remarkable journey dedicated to redefining the culinary landscape of Indonesia. With Western cuisine as the vessel of our dish exploration, we envisioned creating exceptional dining experiences that would resonate with discerning palates and celebrate the rich tapestry of global gastronomy. Over the years, we've expanded our footprint across Indonesia, introducing a diverse array of restaurants. From the iconic Union restaurant to the award-winning The Cocktail Club, our kitchens marry the western and local richness and continually pushed boundaries in the food & beverage industry. Our commitment to quality, creativity, and creating memorable dining moments has propelled us forward. Today, we stand as a beacon of culinary excellence, cherished by patrons across Indonesia and beyond.</p>
        <h2 className="w-full text-center font-bold tracking-wider my-24 text-3xl whitespace-pre-line">{`10 BRANDS, 23 OUTLETS, \n17 YEARS OF EXPERIENCE`}</h2>
        <div className="flex flex-wrap w-[600px] items-center justify-center gap-4 mx-auto">
          <Image
            src={"/brands-logo/BARLUCA-LOGO-FIN.png"}
            width={100}
            height={100}
            alt="Bar Luca Logo"
          ></Image>
          <Image
            src={"/brands-logo/bistecca.png"}
            width={100}
            height={100}
            alt="Bistecca Logo"
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
      <h2 className="w-full text-center font-bold tracking-wider text-3xl mb-16 whitespace-pre-line">{`VETTED BY MEDIA'S BEST FOOD CRITICS`}</h2>
      <div className="grid grid-cols-5 border-y-2 border-black">
      {a.map((x,i) => {
        return(
          <div key={i} className="border-r-2 p-8 border-black flex flex-col justify-between">
            <div className="text-md">{x.review}</div>
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
  );
}
