/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { LoadingPage, Header } from "../../components";

function Layout() {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [isHide, setIsHide] = useState(false);
  // call api get all post
  // useEffect(() => {
  //   axiosConfig
  //     .get("/posts/all")
  //     .then((data) => dispatch(actions.setPosts(data?.data)))
  //     .catch((err) => console.log(err));
  // }, []);

  // handle scroll top
  const handleScrollTop = () => {};

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="w-full h-full max-w-7xl mx-auto">
          <Header />
          <div className="h-full">
            <Outlet />
          </div>
          <div className="border-t border-orange-500">
            <p className="p-4 text-gray-500">
              © Vui lòng liên kết đến bài gốc khi trích dẫn các nội dung từ
              website này.
            </p>
          </div>
          {isHide && (
            <span
              className="fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center text-orange-500 rounded-full shadow-lg cursor-pointer"
              onClick={handleScrollTop}
            >
              <span className="material-symbols-outlined">arrow_upward</span>
            </span>
          )}
        </div>
      )}
    </>
  );
}

export default memo(Layout);
