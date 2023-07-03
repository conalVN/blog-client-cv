import { memo, useContext } from "react";
import { nav } from "../utils/constant";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "./Button";
import AuthContext from "../context/authContext";
import axiosConfig from "../axiosConfig";

const style = "text-orange-400";
const noStyle = "";

function Header() {
  const { auth, updateAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axiosConfig
      .get(`/api/user/logout`)
      .then((data) => {
        updateAuth({});
        localStorage.removeItem("auth");
        sessionStorage.removeItem("admin");
        navigate("/");
        toast.info(data?.data?.message);
      })
      .catch((err) => console.log(err));
  };
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
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <span className="py-1 px-4 text-white bg-orange-400 rounded-full cursor-pointer">
        {auth?.success ? (
          <Button title="Log out" onClick={handleLogout} />
        ) : (
          <Link to="/login">
            <Button title="Login" />
          </Link>
        )}
      </span>
    </div>
  );
}

export default memo(Header);
