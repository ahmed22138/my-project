import React from "react";

export default function Home() {
  return (
    <>
    {/* Below Code Is With Tailwind */}
    <div className="flex justify-between items-center ">
      <div className="w-fit h-[200px] m-[40px] text-[60px] font-black">
        Hey,
        <br />
        My Name is <span className="Black">Ahmed</span>
        <br />I am Next JS Developer
      </div>
      <div className="bg-blue"></div>
    </div>
    </>
  );
}
