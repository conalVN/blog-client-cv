/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosConfig from "../axiosConfig";
import * as actions from "../store/actions";
import SkeletonIntro from "./SkeletonIntro";

function Intro() {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postLeft, setPostLeft] = useState(null);
  const [postRight, setPostRight] = useState([]);
  useLayoutEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig
      .get(`/api/posts/limit?limit=3`)
      .then((data) => {
        setPostLeft(data?.data[0]);
        setPostRight(
          data?.data?.filter((x) => x?.title !== data?.data[0]?.title)
        );
        dispatch(actions.loading(false));
      })
      .catch((err) => {
        dispatch(actions.loading(false));
        console.log(err);
      });
  }, []);
  function handleClick(id) {
    dispatch(actions.setCurPostId(id));
    dispatch(actions.loading(true));
    navigate(`/posts/${id}`);
  }
  return (
    <section className="grid w-full h-full max-h-[400px] mt-20">
      {isLoading ? (
        <SkeletonIntro />
      ) : (
        <div className="row h-full overflow-hidden">
          <div className="h-full col c-12 l-7">
            <div
              className="relative w-full h-full rounded-md overflow-hidden cursor-pointer"
              onClick={() => handleClick(postLeft?._id)}
            >
              <section className="absolute bottom-10 left-4 z-10 w-4/5 p-4 bg-alpha rounded-lg">
                <h3 className="font-semibold line-clamp-1">
                  {postLeft?.title}
                </h3>
                <p className="line-clamp-2">{postLeft?.description}</p>
              </section>
              <img
                className="absolute z-0 w-full h-full object-cover transition-all hover:scale-110"
                alt={postLeft?.title}
                src={postLeft?.thumbnail?.url}
              />
            </div>
          </div>
          <div className="h-full col c-12 l-5">
            <div className="flex flex-col gap-4 h-full">
              <div
                className="relative w-full h-full rounded-md overflow-hidden cursor-pointer"
                onClick={() => handleClick(postRight[0]?._id)}
              >
                <section className="absolute bottom-4 left-4 z-10 w-4/5 p-4 bg-alpha rounded-lg">
                  <h3 className="font-semibold line-clamp-1">
                    {postRight[0]?.title}
                  </h3>
                  <p className="line-clamp-2">{postRight[0]?.description}</p>
                </section>
                <img
                  className="relative z-0 w-full h-full object-cover transition-all hover:scale-110"
                  alt={postRight[0]?.title}
                  src={postRight[0]?.thumbnail?.url}
                />
              </div>
              <div
                className="relative w-full h-full rounded-md overflow-hidden cursor-pointer"
                onClick={() => handleClick(postRight[1]?._id)}
              >
                <section className="absolute bottom-4 left-4 z-10 w-4/5 p-4 bg-alpha rounded-lg">
                  <h3 className="font-semibold line-clamp-1">
                    {postRight[1]?.title}
                  </h3>
                  <p className="line-clamp-2">{postRight[1]?.description}</p>
                </section>
                <img
                  className="relative z-0 w-full h-full object-cover transition-all hover:scale-110"
                  alt={postRight[1]?.title}
                  src={postRight[1]?.thumbnail?.url}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default memo(Intro);
