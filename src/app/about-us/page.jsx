import Image from "next/image"

export default function About() {
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

      <div className="w-[full] z-50 mt-24">
        <h1 className="sticky inset-auto text-center font-medium mb-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          HISTORY </h1>

        <p className="text-center font-medium w-[60vw] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est sit amet facilisis magna etiam tempor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Arcu non odio euismod lacinia at quis risus sed. Malesuada fames ac turpis egestas sed tempus urna. Nunc congue nisi vitae suscipit tellus mauris a diam maecenas. </p>
        
        <h1 className="text-center font-medium mt-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          CULTURE & ASPIRATIONS </h1>
        
        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
          Beyond the palate and the plate
          </h2>
          <p className="text-center font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est sit amet facilisis magna etiam tempor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Arcu non odio euismod lacinia at quis risus sed.
          </p>
        </div>

        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
            {`Setting the standard for Indonesia’s
            culinary and service industry`}
          </h2>
          <p className="text-center font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est sit amet facilisis magna etiam tempor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Arcu non odio euismod lacinia at quis risus sed.
          </p>
        </div>

        <div className="flex flex-col mt-24 gap-5 w-[60vw] mx-auto">
          <h2 className="w-full text-center font-bold tracking-wider text-3xl whitespace-pre-line">
            Every visit an experience
          </h2>
          <p className="text-center font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Est sit amet facilisis magna etiam tempor. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Arcu non odio euismod lacinia at quis risus sed.
          </p>
        </div>

        <h1 className="text-center font-medium mt-16 text-xl w-[99vw] py-2 border-y-2 border-black">
          TEAM </h1>

        <div>
          <div>

          </div>
        </div>

      </div>
    </div>
  )
}