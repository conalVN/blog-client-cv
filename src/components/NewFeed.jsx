import { memo, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import axiosConfig from "../axiosConfig";
import PostNew from "./PostNew";
function NewFeed() {
  const [posts, setPosts] = useState([]);
  useLayoutEffect(() => {
    axiosConfig
      .get(`/api/posts/limit?limit=3`)
      .then((data) => setPosts(data?.data))
      .catch((err) => {
        toast.error(`Can't get newfeed posts`);
        console.log(err);
      });
  }, []);
  return (
    <div className="">
      <h1 className="py-4 text-4xl font-bold font-logo text-center">
        News feed
      </h1>
      <div className="flex flex-col gap-4">
        {posts?.map((post, index) => {
          return <PostNew data={post} i={index} key={post?._id} />;
        })}
      </div>
    </div>
  );
}

export default memo(NewFeed);
