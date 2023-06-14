import { memo, useEffect, useRef, useState } from "react";
import Button from "./Button";

function CommentThread() {
  const [comment, setComment] = useState("");
  const ref = useRef();
  useEffect(() => {
    if (comment) {
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
    if (!comment) ref.current.style.height = "40px";
  }, [comment]);
  return (
    <section className="w-full h-full my-10">
      <div className="w-full h-auto">
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
            onClick={() => {}}
          />
        </div>
      </div>
      <div className="">
        {/* {
          comments?.map(data => {
            return <Comment data={data}/>
          })
        } */}
      </div>
    </section>
  );
}

export default memo(CommentThread);
