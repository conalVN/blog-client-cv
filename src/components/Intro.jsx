import { memo } from "react";

import earth from "../source/images/earth.svg";
import book from "../source/images/book.svg";

function Intro() {
  return (
    <section className="relative w-full h-screen hidden md:block">
      <span className="absolute left-[10%] top-[20%] w-60 h-40 bg-topLeft bg-center bg-no-repeat"></span>
      <span className="absolute left-[10%] bottom-[10%] w-60 h-40 bg-botLeft bg-center bg-no-repeat"></span>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-10 font-banner text-4xl md:text-6xl text-center">
        <span className="relative">
          <span className="absolute left-[-40%] top-[-10%] -rotate-12 w-8 h-8 rounded-full text-9xl text-orange-300">
            +
          </span>
          <span className="absolute left-[-10%] top-[-30%] w-8 h-8 rounded-full border-4 border-orange-300"></span>
          Take it
          <span className="absolute top-[-90%] right-[-110%] z-0 w-40 h-40">
            <img src={book} alt="icon" className="w-full" />
          </span>
        </span>
        <span className="flex items-center">
          <span className="text-white bg-gray-500 p-4 mr-8 rounded-md">
            the
          </span>
          <span className="flex flex-col items-start">
            <span className="flex gap-2">
              <span>to</span>
              <span className="px-2 self-baseline text-base border border-gray-500 rounded-full cursor-pointer">
                Let's start
              </span>
            </span>
            <span className="">next</span>
          </span>
        </span>
        <span className="relative">
          levels
          <span className="absolute left-[-130%] -rotate-12 z-0">
            <img src={earth} alt="icon" className="w-40 h-40" />
          </span>
          <span className="absolute left-[80%] w-20 h-20 rounded-full border-4 border-orange-300"></span>
        </span>
      </div>
      <span className="absolute right-[10%] top-[20%] w-60 h-40 bg-topRight bg-center bg-no-repeat"></span>
      <span className="absolute right-[10%] bottom-[10%] w-60 h-40 bg-botRight bg-center bg-no-repeat"></span>
    </section>
  );
}

export default memo(Intro);
