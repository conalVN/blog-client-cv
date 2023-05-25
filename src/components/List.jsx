import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axiosConfig from "../axiosConfig";
import { Post, Pagination } from "../components";
import { useSearchParams } from "react-router-dom";

function List({ curPage, setCurPage }) {
  const { posts } = useSelector((state) => state.post);
  const [total, setTotal] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    axiosConfig.get(`/api/posts/all`).then((data) => setTotal(data?.data));
  }, []);
  const paginate = (num) => {
    setCurPage(num);
  };
  return (
    posts?.length > 0 && (
      <>
        <div className="row">
          {posts?.map((post) => {
            return <Post data={post} key={post?._id} />;
          })}
        </div>
        <Pagination
          curPage={curPage}
          totalPost={searchParams.size === 0 ? total.length : posts.length}
          paginate={paginate}
        />
      </>
    )
  );
}

export default memo(List);
