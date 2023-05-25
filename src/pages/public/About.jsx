import { memo } from "react";
import { about } from "../../utils/constant";

function About() {
  return (
    <div className="mt-10">
      <div className="relative w-full h-screen bordrer border-red-500">
        <span className="absolute top-0 right-0 bottom-0 left-0 z-0 bg-about bg-no-repeat bg-contain bg-right"></span>
        <p className="absolute top-1/4 z-10 flex flex-col text-7xl font-semibold capitalize select-none">
          <span>
            <span className="px-2 border border-orange-400 rounded-full">
              Make
            </span>{" "}
            Your
          </span>
          <span className="py-2">
            Website{" "}
            <span className="px-4 border border-orange-400 rounded-full">
              More
            </span>
          </span>
          <span>Perfect</span>
          <button className="flex items-center gap-2 uppercase text-2xl my-4 py-2 px-8 text-white bg-orange-400 w-max rounded-full">
            Call me
            <span className="material-symbols-outlined">call</span>
          </button>
        </p>
      </div>
      <div className="flex">
        <div className="flex-1">
          <img
            src={about?.image}
            alt="person"
            className="h-2/3 px-20 mx-auto rounded-md"
          />
        </div>
        <p
          className="w-1/2"
          dangerouslySetInnerHTML={{ __html: about?.content }}
        ></p>
      </div>
    </div>
  );
}

export default memo(About);
