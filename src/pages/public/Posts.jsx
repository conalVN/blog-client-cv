/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { Categories, ListPost } from "../../components";

function Posts({ curPage, setCurPage }) {
  const { curPostId, related } = useSelector((state) => state.post);
  const location = useLocation();
  const dispatch = useDispatch();
  const ref = useRef();
  const [searchParams] = useSearchParams();
  const [randomPost, setRandomPost] = useState([]);
  useEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig.get(`/api/posts/random`).then((data) => {
      if (data.status === 200) {
        setRandomPost(data?.data);
        dispatch(actions.loading(false));
      }
    });
    axiosConfig.get(`/api/posts/tags`).then((data) => {
      if (data.status === 200) {
        dispatch(actions.setTags(data?.data));
        dispatch(actions.loading(false));
      }
    });
  }, []);
  useEffect(() => {
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
            .then((data) => {
              dispatch(actions.setPosts(data?.data));
              dispatch(actions.loading(false));
            })
            .catch((err) => {
              dispatch(actions.loading(false));
              toast.error("Can't get posts");
              console.log(err);
            });
        } else {
          axiosConfig
            .get(`/api/posts${curPage === 1 ? `` : `?page=${curPage}`}`)
            .then((data) => {
              dispatch(actions.setPosts(data?.data));
              dispatch(actions.loading(false));
            })
            .catch((err) => {
              dispatch(actions.loading(false));
              toast.error("Can't get posts");
              console.log(err);
            });
        }
      }
    } else {
      axiosConfig
        .get(`/api/posts${curPage !== 1 ? `?page=${curPage}` : ""}`)
        .then((data) => {
          dispatch(actions.setPosts(data?.data));
          dispatch(actions.loading(false));
        })
        .catch((err) => {
          dispatch(actions.loading(false));
          toast.error(`Can't get posts`);
          console.log(err);
        });
    }
    // ref.current.scrollIntoView({ top: 0 });
  }, [curPage, location, searchParams]);

  return (
    <div className="grid mt-10 md:mt-20 px-4" ref={ref}>
      <div className="row flex-col md:flex-row">
        <div className="col l-9 w-full">
          <Outlet />
        </div>
        <aside className="col l-3 my-2">
          <Categories setCurPage={setCurPage} />
          {!location.pathname.endsWith(curPostId) && randomPost?.length > 0 && (
            <ListPost title="Random post" list={randomPost} />
          )}
          {location.pathname.endsWith(curPostId) && related?.length > 0 && (
            <ListPost title="Related post" list={related} />
          )}
        </aside>
      </div>
    </div>
  );
}

export default memo(Posts);
