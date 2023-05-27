/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";
import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { SkeletonDetail } from "../../components";

function DetailPost() {
  const { isLoading } = useSelector((state) => state.app);
  const { curPostId } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [curPost, setCurPost] = useState(null);
  useLayoutEffect(() => {
    axiosConfig
      .get(`/api/posts/${curPostId}`)
      .then((data) => {
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
        <div className="ql-snow">
          <div className="border-none">
            <img
              src={curPost?.thumbnail?.url}
              alt={curPost?.title}
              className="w-full h-400 object-contain bg-center"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="font-bold text-2xl">{curPost?.title}</h2>
            <ul className="flex gap-2">
              {curPost?.categories?.map((tag) => {
                return (
                  <li
                    className="px-4 py-1 text-white bg-orange-400 rounded-md cursor-pointer"
                    key={tag}
                    onClick={() => dispatch(actions.loading(true))}
                  >
                    <Link to={`/posts?category=${tag}`} className="text-white">
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
      )}
    </>
  );
}

export default memo(DetailPost);
