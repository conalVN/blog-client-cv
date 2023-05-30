import { memo, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { Popup, SidebarLeft } from "../../components";

function Dashboard() {
  const { isPopup } = useSelector((state) => state.app);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(Cookies.get("token"));
    if (!Cookies.get("token")) {
      navigate(`/login`);
    }
  });

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
