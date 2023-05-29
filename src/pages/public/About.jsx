import { memo } from "react";
import { about } from "../../utils/constant";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="mt-10 md:mt-20">
      <div className="relative w-full h-40 md:h-96">
        <span className="absolute left-0 right-0 z-10 block w-full md:w-1/2 h-40 md:h-96 mx-auto bg-dev bg-no-repeat bg-center"></span>
        <span className="absolute left-0 right-0 bottom-0 z-20 text-4xl md:text-7xl text-center">
          Web Developer
        </span>
      </div>
      <div className="flex mt-10">
        <div className="flex-1 hidden lg:inline-block">
          <img
            src={about?.image}
            alt="person"
            className="h-2/3 px-20 mx-auto rounded-md"
          />
          <ul className="flex justify-center gap-2 mt-10">
            {about?.socials?.map((item) => {
              return (
                <li
                  className="hover:underline hover:text-orange-400"
                  key={item?.name}
                >
                  <Link to={item?.link}>{item?.name}</Link>
                </li>
              );
            })}
          </ul>
          <p className="flex justify-center">
            <span className="">Email: </span>
            <span className="">{about?.email}</span>
          </p>
          <p className="flex justify-center">
            <span className="">Phone: </span>
            <span className="">{about?.phone}</span>
          </p>
        </div>
        <p
          className="w-full lg:w-1/2 px-4"
          dangerouslySetInnerHTML={{ __html: about?.content }}
        ></p>
      </div>
    </div>
  );
}

export default memo(About);
