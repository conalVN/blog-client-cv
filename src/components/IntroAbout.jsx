import { memo } from "react";
import { Typewriter } from "react-simple-typewriter";
import Button from "./Button";
import web from "../source/images/webdeveloper.jpg";

function IntroAbout() {
  return (
    <div className="w-full h-full my-20 flex">
      <div className="flex-5 w-full h-full">
        <div className="w-full h-full flex flex-col justify-center gap-4 p-10 mt-10">
          <h2 className="text-4xl font-logo">
            Hi There! I'm{" "}
            <span className="font-bold text-orange-500">
              <Typewriter
                words={["Dinh Van Thanh", "Web Developer", "Blogger"]}
                typeSpeed={100}
                loop={false}
              />
            </span>
          </h2>
          <p className="text-lg">
            I'm a fresh graduate web developer. With a lot of school experience
            and curiosity I can make your website look great.
          </p>
          <Button
            title="Download CV"
            styles="w-max bg-orange-500 text-white py-2 px-4 uppercase"
          />
        </div>
      </div>
      <div className="flex-5">
        <img src={web} alt="" className="w-full h-full object-contain" />
      </div>
    </div>
  );
}

export default memo(IntroAbout);
