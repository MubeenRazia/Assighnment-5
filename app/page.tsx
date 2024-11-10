
import React from "react";


import Image from "next/image";
import Hero from "@/app/components/Header";
const page = () => {
  return (
    <div className="h-screen">
  
        <Hero/>
      
        <div className="flex h-[80%] justify-center  ">
          <div className="w-1/2 m-[12] flex flex-col justify-center  aitems-start  ">
          <h1 className=" text-bold">IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="  p-0 h-[147px] text-color- #A29875  font-size-[30px] ">An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className="bg-background">Explore Now</button>
          </div>
          <div className="w-1/4 h-[611px] p-1 mt-[28px] ml-[24px]  justify-centre  items-center  ">
        <Image src={"/Image/f.svg"} alt ='hero-image' width={462} height={647}/>
          </div>
        </div>
       
    </div>
  )
}

export default page;