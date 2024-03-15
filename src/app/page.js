import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between z-0 mt-20 w-full">
      <div className="h-[80vh] w-full relative">
        <h1 className="absolute text-white text-8xl h-[90vh] ml-32 drop-shadow-lg w-[700px] mt-[40vh]">
          Gather at the table of UNION
        </h1>
        <img
          src="/homepage_hero2.jpg"
          className="h-[90vh] w-[100vw] object-cover object bottom"
          alt="Hero Image"
        />
      </div>
      <div className="w-[60vw] z-40 my-40">
        <p className="text-center font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est sit amet facilisis magna etiam tempor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas sed tempus urna. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. </p>
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
    </div>
  );
}
