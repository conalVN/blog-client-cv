import { memo } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Popup, SidebarLeft } from "../../components";

function Dashboard() {
  const { isPopup } = useSelector((state) => state.app);
  return (
    <div className="grid h-screen overflow-hidden">
      <div className="row h-full">
        <div className="col l-2">
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
