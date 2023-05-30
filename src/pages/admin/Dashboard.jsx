/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Popup, SidebarLeft } from "../../components";

function Dashboard() {
  const { isPopup, isLogin } = useSelector((state) => state.app);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("/system") && !isLogin) {
      navigate(`/login`);
    }
  }, [isLogin, location]);

  return (
    <div className="grid h-screen overflow-hidden">
      <div className="row h-full overflow-y-auto">
        <div className="col l-2 hidden md:inline-block">
          <SidebarLeft />
        </div>
        <div className="col l-10 h-full overflow-y-auto">
          <Outlet />
        </div>
        {isPopup && <Popup isDelete />}
      </div>
    </div>
  );
}

export default memo(Dashboard);
