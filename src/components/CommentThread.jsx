/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button, Comment } from "../components";
import axiosConfig from "../axiosConfig";

function CommentThread() {
  const { curPostId } = useSelector((state) => state.post);
  const [comment, setComment] = useState("");
  const [commentThread, setCommentThread] = useState([]);
  const [reload, setReload] = useState(true);
  const ref = useRef();
  useEffect(() => {
    if (comment) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
    if (!comment) ref.current.style.height = "40px";
  }, [comment]);

  useEffect(() => {
    if (reload) {
      axiosConfig
        .get(`/api/posts/${curPostId}/commentThread`)
        .then((data) => {
          setCommentThread(data?.data?.comments);
          setReload(false);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [reload]);

  function createComment() {
    axiosConfig
      .post(`/api/posts/${curPostId}/comment`, { comment })
      .then((data) => {
        setReload(true);
        setComment("");
      })
      .catch((err) => {
        console.log("Err create comment::", err);
      });
  }
  return (
    <section className="w-full my-10">
      <div className="w-full mb-8">
        <textarea
          ref={ref}
          placeholder="Viết bình luận..."
          className="w-full h-10 py-2 outline-none resize-none overflow-hidden border-b-2 border-gray-500 focus:border-b-2"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          onKeyUp={() => {
            if (!comment) ref.current.style.height = "40px";
          }}
        ></textarea>
        <div className="flex items-center justify-end gap-4">
          <Button
            title="Delete"
            styles={`py-1 px-4 rounded-md bg-red-200 ${
              comment ? "opacity-100 hover:bg-red-300" : "opacity-50"
            }`}
            onClick={() => setComment("")}
          />
          <Button
            title="Bình luận"
            styles={`py-1 px-4 rounded-md bg-gray-200 ${
              comment ? "opacity-100 hover:bg-gray-300" : "opacity-50"
            }`}
            onClick={createComment}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-4">
        {commentThread?.map((item) => {
          return <Comment data={item} key={item?._id} setReload={setReload} />;
        })}
      </div>
    </section>
  );
}

export default memo(CommentThread);
