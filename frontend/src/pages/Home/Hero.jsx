import React from "react";

function Hero() {
  return (
    <>
      <div className="container mx-auto p-5 mb-5 flex flex-col items-center">
        <div className=" w-auto pt-5 mt-7 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#03080A] leading-none">The Unified Interface  </h1>
          <span className=" block text-4xl sm:text-5xl md:text-6xl font-bold text-[#03080A] leading-none">For Every Model</span>
          <p className="mt-5 text-lg text-gray-600 text-center">Better
            <a href="" className=" pl-1 text-black underline underline-offset-2 transition hover:text-blue-700">prices</a>, better 
            <a href="" className=" pl-1 text-black underline underline-offset-2 transition hover:text-blue-700">uptime</a>, no subscriptions.</p>
        </div>
        <div className="my-3 w-full md:w-auto">
          <button className=" w-full md:w-50 p-3 m-2 border border-gray-200 rounded-lg text-[14px] hover:shadow-md bg-[#7624F4] text-white transition hover:bg-blue-700 ">GetAPIKey</button>
          <button className=" w-full md:w-50 p-3 m-2 border border-gray-200 rounded-lg text-[15px] hover:shadow-md text-[FCFCFE] transition hover:text-blue-700 hover:bg-gray-100  ">Discover Models</button>
        </div>

        <div className="flex sm:flex-row sm:gap-2 md:gap-12 my-10 py-5 max-w-4xl mx-auto">
          <div className="px-2 mx-1 sm:mx-2 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground ">600T+</p>
            <p className=" text-xs text-gray-500">Monthly Tokens</p>
          </div>
          <div className="px-2 mx-1 sm:mx-2 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground ">10M+</p>
            <p className=" text-xs text-gray-500">Global Users</p>
          </div>
          <div className="px-2  mx-1 sm:mx-2 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground ">3+</p>
            <p className=" text-xs text-gray-500">Providers</p>
          </div>
          <div className="px-2 mx-1 sm:mx-2 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground ">500+</p>
            <p className=" text-xs text-gray-500">Models</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Hero;
