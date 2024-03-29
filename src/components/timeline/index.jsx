export default function Timeline() {
  return(
    <div className="w-[80%] py-20 h-24 mx-auto md:text-sm lg:text-base relative hidden md:flex">
      {/* <div className="h-[3px] bg-black w-[10%]">
        <div className="w-3 bg-red-500 h-3 rounded-full absolute my-[-5px]"> </div>
        <p className="py-3 mx-[-9px] absolute">Casa</p>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="w-3 bg-red-500 h-3 rounded-full absolute my-[-5px]"> </div>
        <p className="py-3">Casa</p>
      </div> */}
      <div className="h-[3px] bg-black w-[6%]">
        <div className="absolute lg:mt-[-37px] mt-[-32px] flex flex-col gap-2 items-center">
          <p className="font-bold">Casa</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2006</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Cork & Screw</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2007</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Loewy</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2008</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">UNION</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2014</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Bistecca</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2016</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Caffe Milano</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2018</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[13%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] md:mt-[-29px] flex flex-col gap-2 items-center">
          <div className="flex flex-col items-center mt-[-24px]">
            <p className="font-bold">The Cocktail Club</p>
            <p className="font-bold">Pierre</p>
          </div>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2021</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Roma</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2022</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[10%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Bar Luca</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2023</p>
        </div>
      </div>
      <div className="h-[3px] bg-black w-[3%]">
        <div className="absolute bg-blue-200/0 lg:mt-[-37px] mt-[-33px] flex flex-col gap-2 items-center">
          <p className="font-bold">Bouchon</p>
          <div className="w-3 bg-yellow-700 h-3 rounded-full "> </div>
          <p className="">2024</p>
        </div>
      </div>
    </div>
  )
}