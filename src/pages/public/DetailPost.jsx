/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import axiosConfig from "../../axiosConfig";
import * as actions from "../../store/actions";
import { LoadingPage } from "../../components";

function DetailPost() {
  const { curPostId } = useSelector((state) => state.post);
  const { isLoading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const [curPost, setCurPost] = useState(null);
  useLayoutEffect(() => {
    dispatch(actions.loading(true));
    axiosConfig
      .get(`/api/posts/${curPostId}`)
      .then((data) => {
        setCurPost(data?.data?.data);
        dispatch(actions.setRelated(data?.data?.related));
      })
      .catch((err) => {
        toast.error("Can't not get post! Server error");
      });
    dispatch(actions.loading(false));
  }, [curPostId]);
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="ql-snow">
          <div className="">
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
                  >
                    #{tag}
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
