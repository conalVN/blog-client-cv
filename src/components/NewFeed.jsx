/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import axiosConfig from "../axiosConfig";
import * as actions from "../store/actions";
import { PostNew, SkeletonNew } from "../components";

function NewFeed() {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  useLayoutEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig
      .get(`/api/posts/limit?limit=10&page=2`)
      .then((data) => {
        setPosts(data?.data);
        dispatch(actions.loading(false));
      })
      .catch((err) => {
        dispatch(actions.loading(false));
        toast.error(`Can't get newfeed posts`);
        console.log(err);
      });
  }, []);
  return (
    <div className="my-4 p-4 bg-orange-50">
      <h1 className="py-4 text-2xl md:text-4xl font-bold font-logo text-center">
        Latest Content
      </h1>
      {isLoading ? (
        <SkeletonNew />
      ) : (
        <div className="flex flex-wrap justify-center gap-4 px-4">
          {posts?.map((post) => {
            return <PostNew data={post} key={post?._id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default memo(NewFeed);
