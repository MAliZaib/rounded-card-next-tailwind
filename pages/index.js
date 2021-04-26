import Head from 'next/head'


export default function Home() {
  return (
    <div className="bg-gray-200 h-[200vh] w-screen flex py-14 px-32 justify-center  " >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className=" flex w-full max-w-[1413px] mx-auto">
         <div className=" flex flex-col justify-center w-[10%] " >
           <div className="bg-white flex-1 rounded-tl-xl" ></div>
           <div className=" relative" >
             <img src="/images/curvedImage.png" className="" />
              <div className="flex my-auto items-center justify-center absolute inset-0 bg-white   rounded-full   font-black
              
              h-[50px] w-[50px] text-[8px] -left-10
              md:h-[100px] md:w-[100px] md:text-base md:-left-14 
              lg:h-[120px] lg:w-[120px] lg:text-base lg:-left-16 lg:inset-y-4
              xl:h-[180px] xl:w-[180px] xl:inset-y-[15px]   xl:text-2xl xl:-left-24
              2xl:h-[224px] 2xl:w-[224px] 2xl:-left-28  xl:inset-y-[16px]
              3xl:inset-y-[28px]
             " >Vocabulary</div>
           </div>
           <div className="bg-white flex-1 rounded-bl-xl " ></div>
         </div>
         <div className="bg-white flex-1  items-center justify-center p-20 rounded-r-xl" >
            <div className="bg-gray-200 text-center rounded-xl px-16 py-5 " >
              <p className="leading-[70px] text-5xl" >"We're doing the, <strong>weekly shop</strong> online, which saves us a lot of time"</p>
            </div>
            <div className="flex flex-col space-y-8 xl:flex-row flex-grow xl:justify-between xl:space-y-0 xl:space-x-4 mt-10 xl:mt-16 ">
              <button className="rounded-xl text-2xl py-5 px-12 border border-[#f5cb4e] w-full max-w-[306px]" >boodschappenlijst</button>
              <button className="bg-[#f5cb4e] rounded-xl text-2xl py-5 px-12 w-full max-w-[306px] " >wekelijkse boodschappen</button>
              <button className="rounded-xl text-2xl py-5 px-12 border border-[#f5cb4e] w-full max-w-[306px]" >winkel</button>
            </div>
            <div className="flex  xl:justify-center items-center mt-20 xl:mt-32" >
              <button className="bg-red-500 px-16 py-3 rounded-lg text-white">
                Continue
              </button>
            </div>
         </div>
        </div>
      </div>

      
    </div>
  )
}
