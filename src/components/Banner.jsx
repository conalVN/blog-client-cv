import { memo } from "react";
import banner from "../source/images/code.png";

function Banner() {
  return (
    <div className="relative h-[85vh] w-full my-20 rounded-lg">
      <img
        src={banner}
        alt="banner"
        className="absolute z-10 w-full h-full object-cover"
      />
      <div className="absolute w-full h-full z-20 flex flex-col items-center justify-center">
        <p className="text-6xl text-white font-logo text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300">
          Web Developer
        </p>
        <p className="text-9xl text-white font-logo text-transparent bg-clip-text bg-gradient-to-l from-red-300 to-orange-300">
          Work Every Where
        </p>
      </div>
    </div>
  );
}

export default memo(Banner);
