import { memo } from "react";
import { nav } from "../utils/constant";
import { Link, NavLink } from "react-router-dom";

const style = "text-orange-400";
const noStyle = "";

function Header() {
  return (
    <div className="fixed top-2 z-50 hidden md:flex items-center justify-between w-full max-w-7xl py-2 px-4 bg-alpha rounded-full border border-orange-400">
      <Link to="/" className="font-logo text-xl">
        Conal_
      </Link>
      <ul className="flex gap-6 text-xl">
        {nav?.map((item) => {
          return (
            <li className="select-none" key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? style : noStyle)}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <span className="py-1 px-4 text-white bg-orange-400 rounded-full cursor-pointer">
        <Link to={`mailto:develooper2022@gmail.com`}>Contact</Link>
      </span>
    </div>
  );
}

export default memo(Header);
