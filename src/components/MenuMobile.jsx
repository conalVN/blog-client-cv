import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../utils/constant";

function MenuMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative top-0 left-0 right-0 z-50 shadow-md flex md:hidden items-center bg-white border-b border-orange-400 justify-between py-2 px-4">
      <span
        className="flex items-center justify-center cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      >
        <span className="material-symbols-outlined">menu</span>
        {isOpen && (
          <section
            className="fixed top-0 left-0 bottom-0 right-0 bg-alpha"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <div
              className="absolute bg-white top-0 left-0 bottom-0 w-2/3"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="py-10">
                {nav?.map((item) => {
                  return (
                    <li
                      className="py-2 px-4 border-b-2"
                      key={item?.name}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link to={item?.path} className="flex items-center gap-2">
                        <span className="material-symbols-outlined">
                          {item?.icon}
                        </span>
                        {item?.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <span
                className="absolute top-2 right-4"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined">
                  disabled_by_default
                </span>
              </span>
            </div>
          </section>
        )}
      </span>
      <div className="font-logo text-xl cursor-pointer">Conal_</div>
    </div>
  );
}

export default memo(MenuMobile);
