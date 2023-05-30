import { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { menu } from "../utils/constant";

function SidebarLeft() {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("key");
    navigate("/login");
    toast.success("Log out success!");
  };

  return (
    <div className="">
      <h1 className="text-2xl text-center font-bold py-4">
        <Link to="/system">Dashboard</Link>
      </h1>
      <ul className="flex flex-col">
        {menu?.map((item) => {
          return (
            <NavLink
              key={item?.name}
              to={item?.path}
              className={`flex items-center gap-1 p-2`}
            >
              <span className="material-symbols-outlined">{item?.icon}</span>
              <span>{item?.name}</span>
            </NavLink>
          );
        })}
        <li
          className="flex items-center gap-1 p-2 hover:text-orange-400"
          onClick={logout}
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default memo(SidebarLeft);
