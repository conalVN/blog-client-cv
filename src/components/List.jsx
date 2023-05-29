import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axiosConfig from "../axiosConfig";
import { Post, Pagination, SkeletonPost } from "../components";
import * as actions from "../store/actions";

function List({ curPage, setCurPage }) {
  const { isLoading } = useSelector((state) => state.app);
  const { posts } = useSelector((state) => state.post);
  const [total, setTotal] = useState([]);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  useEffect(() => {
    axiosConfig
      .get(`/api/posts/all`)
      .then((data) => setTotal(data?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const paginate = (num) => {
    dispatch(actions.loading(true));
    setCurPage(num);
  };
  return (
    <>
      {posts?.length > 0 && (
        <>
          {isLoading ? (
            <SkeletonPost />
          ) : (
            <div className="row gap-y-4">
              {posts?.map((post) => {
                return <Post data={post} key={post?._id} />;
              })}
            </div>
          )}

          <Pagination
            curPage={curPage}
            totalPost={searchParams.size === 0 ? total?.length : posts?.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
}

export default memo(List);
