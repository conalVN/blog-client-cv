import { memo } from "react";
import { Link } from "react-router-dom";
import { about } from "../../utils/constant";
import { IntroAbout } from "../../components";

function About() {
  return (
    <div className="">
      <IntroAbout />
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
