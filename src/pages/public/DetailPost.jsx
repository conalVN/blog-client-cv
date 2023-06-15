/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { CommentThread, SkeletonDetail } from "../../components";

function DetailPost() {
  const { isLoading, isLogin } = useSelector((state) => state.app);
  const { curPostId } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [curPost, setCurPost] = useState(null);
  useLayoutEffect(() => {
    axiosConfig
      .get(`/api/posts/${curPostId}`)
      .then((data) => {
        console.log(data);
        setCurPost(data?.data?.data);
        dispatch(actions.setRelated(data?.data?.related));
        setTimeout(() => dispatch(actions.loading(false)), 1000);
      })
      .catch((err) => {
        dispatch(actions.loading(false));
        toast.error("Can't not get post! Server error");
        console.log(err);
      });
  }, [curPostId]);
  return (
    <>
      {isLoading ? (
        <SkeletonDetail />
      ) : (
        <div className="w-full h-full">
          <div className="ql-snow w-full px-4">
            <div className="border-none w-full border border-red-400">
              <img
                src={curPost?.thumbnail?.url}
                alt={curPost?.title}
                className="w-full h-40 md:h-400 rounded-md object-cover md:object-contain bg-center"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4 w-full">
              <h2 className="font-bold text-2xl">{curPost?.title}</h2>
              <ul className="flex flex-wrap gap-2">
                {curPost?.categories?.map((tag) => {
                  return (
                    <li
                      className="px-4 py-1 text-white bg-orange-400 rounded-md cursor-pointer"
                      key={tag}
                      onClick={() => dispatch(actions.loading(true))}
                    >
                      <Link
                        to={`/posts?category=${tag}`}
                        className="text-white"
                      >
                        #{tag}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <span className="text-gray-400">
                {moment(curPost?.createdAt).format("L")}
              </span>
              <p
                className="ql-editor"
                dangerouslySetInnerHTML={{ __html: curPost?.content }}
              ></p>
            </div>
          </div>
          {!isLogin ? (
            <div className="w-full text-center">
              Vui lòng đăng nhập để bình luận{" "}
              <Link to="/login" className="underline">
                Sign in
              </Link>
            </div>
          ) : (
            <CommentThread />
          )}
        </div>
      )}
    </>
  );
}

export default memo(DetailPost);
