/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosConfig from "../axiosConfig";
import * as actions from "../store/actions";

function Intro() {
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [postLeft, setPostLeft] = useState(null);
  const [postRight, setPostRight] = useState([]);
  useEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig
      .get(`/api/posts/limit?limit=3`)
      .then((data) => {
        setPostLeft(data?.data[0]);
        setPostRight(data?.data?.filter((item) => item?._id !== postLeft?._id));
        dispatch(actions.loading(false));
      })
      .catch((err) => {
        dispatch(actions.loading(false));
        console.log(err);
      });
  }, []);
  return (
    <section className="grid w-full h-full max-h-[400px] mt-20">
      <div className="row h-full overflow-hidden">
        <div className="h-full col c-12 l-7">
          <div className="relative w-full h-full rounded-md overflow-hidden cursor-pointer">
            <section className="absolute bottom-10 left-4 w-4/5 p-4 bg-alpha rounded-lg">
              <h3 className="font-semibold line-clamp-1">{postLeft?.title}</h3>
              <p className="line-clamp-2">{postLeft?.description}</p>
            </section>
            <img
              className="w-full h-full object-cover"
              alt={postLeft?.title}
              src={postLeft?.thumbnail?.url}
            />
          </div>
        </div>
        <div className="h-full col c-12 l-5">
          <div className="flex flex-col gap-4 h-full">
            <div className="relative w-full h-full rounded-md overflow-hidden cursor-pointer">
              <section className="absolute bottom-4 left-4 w-4/5 p-4 bg-alpha rounded-lg">
                <h3 className="font-semibold line-clamp-1">
                  {postRight[0]?.title}
                </h3>
                <p className="line-clamp-2">{postRight[0]?.description}</p>
              </section>
              <img
                className="w-full h-full object-cover"
                alt={postRight[0]?.title}
                src={postRight[0]?.thumbnail?.url}
              />
            </div>
            <div className="relative w-full h-full rounded-md overflow-hidden cursor-pointer">
              <section className="absolute bottom-4 left-4 w-4/5 p-4 bg-alpha rounded-lg">
                <h3 className="font-semibold line-clamp-1">
                  {postRight[1]?.title}
                </h3>
                <p className="line-clamp-2">{postRight[1]?.description}</p>
              </section>
              <img
                className="w-full h-full object-cover"
                alt={postRight[1]?.title}
                src={postRight[1]?.thumbnail?.url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Intro);
