/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { Categories, ListPost, Pagination, Post } from "../../components";

function Posts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [curPage, setCurPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState([]);
  const [randomPost, setRandomPost] = useState([]);
  useEffect(() => {
    axiosConfig.get(`/api/posts/all`).then((data) => setTotal(data?.data));
    axiosConfig
      .get(`/api/posts/random`)
      .then((data) => setRandomPost(data?.data));
    axiosConfig
      .get(`/api/posts/tags`)
      .then((data) => dispatch(actions.setTags(data?.data)));
  }, []);
  useLayoutEffect(() => {
    dispatch(actions.loading(true));
    if (location?.search) {
      for (const entry of searchParams.entries()) {
        const [param, value] = entry;
        if (param.includes("category")) {
          axiosConfig
            .get(
              `${process.env.REACT_APP_URL_SERVER}/posts${
                curPage === 1
                  ? `?category=${value}`
                  : `?page=${curPage}&category=${value}`
              }`
            )
            .then((data) => setPosts(data?.data))
            .catch((err) => {
              console.log(err);
              toast.error("Can't get posts");
            });
        } else {
          axiosConfig
            .get(
              `${process.env.REACT_APP_URL_SERVER}/posts${
                curPage === 1 ? `` : `?page=${curPage}`
              }`
            )
            .then((data) => setPosts(data?.data))
            .catch((err) => {
              console.log(err);
              toast.error("Can't get posts");
            });
        }
      }
    } else {
      axiosConfig
        .get(`/api/posts${curPage !== 1 ? `?page=${curPage}` : ""}`)
        .then((data) => setPosts(data?.data))
        .catch((err) => {
          toast.error(`Can't get posts`);
          console.log(err);
        });
    }
    dispatch(actions.loading(false));
  }, [curPage, location]);

  const paginate = (num) => {
    setCurPage(num);
  };

  return (
    <div className="grid mt-20">
      <div className="row">
        <div className="col l-9">
          {posts?.length > 0 && (
            <>
              <div className="row">
                {posts?.map((post) => {
                  return <Post data={post} key={post?._id} />;
                })}
              </div>
              <Pagination
                curPage={curPage}
                totalPost={total.length}
                paginate={paginate}
              />
            </>
          )}
        </div>
        <aside className="col l-3 mt-2">
          <Categories />
          <ListPost title="Random post" list={randomPost} />
        </aside>
      </div>
    </div>
  );
}

export default memo(Posts);
