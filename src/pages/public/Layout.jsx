/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import MenuMobile from "../../components/MenuMobile";

function Layout() {
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    document.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setIsHide(true);
      } else {
        setIsHide(false);
      }
    };
  }, []);

  return (
    <div className="w-full h-full max-w-7xl mx-auto overflow-x-hidden">
      <Header />
      <MenuMobile />
      <div className="h-full">
        <Outlet />
      </div>
      <div className="border-t border-orange-500">
        <p className="p-4 text-gray-500">
          © Vui lòng liên kết đến bài gốc khi trích dẫn các nội dung từ website
          này.
        </p>
      </div>
      {isHide && (
        <span
          className="fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center text-orange-500 rounded-full shadow-lg cursor-pointer"
          onClick={() => {
            window.scrollTo(0, 0);
            setIsHide(false);
          }}
        >
          <span className="material-symbols-outlined">arrow_upward</span>
        </span>
      )}
    </div>
  );
}

export default memo(Layout);
