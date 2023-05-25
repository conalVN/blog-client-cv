/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { Categories, ListPost, LoadingPage } from "../../components";

function Posts({ curPage, setCurPage }) {
  const { isLoading } = useSelector((state) => state.app);
  const { curPostId, related } = useSelector((state) => state.post);
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [randomPost, setRandomPost] = useState([]);
  useEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig
      .get(`/api/posts/random`)
      .then((data) => setRandomPost(data?.data));
    axiosConfig
      .get(`/api/posts/tags`)
      .then((data) => dispatch(actions.setTags(data?.data)));
    dispatch(actions.loading(false));
  }, []);
  useLayoutEffect(() => {
    dispatch(actions.loading(true));
    if (location?.search) {
      for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        if (param.includes("category")) {
          axiosConfig
            .get(
              `/api/posts${
                curPage === 1
                  ? `?category=${value}`
                  : `?page=${curPage}&category=${value}`
              }`
            )
            .then((data) => dispatch(actions.setPosts(data?.data)))
            .catch((err) => {
              console.log(err);
              toast.error("Can't get posts");
            });
        } else {
          axiosConfig
            .get(`/api/posts${curPage === 1 ? `` : `?page=${curPage}`}`)
            .then((data) => dispatch(actions.setPosts(data?.data)))
            .catch((err) => {
              console.log(err);
              toast.error("Can't get posts");
            });
        }
      }
    } else {
      axiosConfig
        .get(`/api/posts${curPage !== 1 ? `?page=${curPage}` : ""}`)
        .then((data) => dispatch(actions.setPosts(data?.data)))
        .catch((err) => {
          toast.error(`Can't get posts`);
          console.log(err);
        });
    }
    dispatch(actions.loading(false));
  }, [curPage, location, searchParams]);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="grid mt-20">
          <div className="row">
            <div className="col l-9">
              <Outlet />
            </div>
            <aside className="col l-3 mt-2">
              <Categories setCurPage={setCurPage} />
              {!location.pathname.endsWith(curPostId) && (
                <ListPost title="Random post" list={randomPost} />
              )}
              {location.pathname.endsWith(curPostId) && (
                <ListPost title="Related post" list={related} />
              )}
            </aside>
          </div>
        </div>
      )}
    </>
  );
}

export default memo(Posts);
