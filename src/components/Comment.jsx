import { memo, useState } from "react";
import { toast } from "react-toastify";
import noAvatar from "../source/images/noAvatar.png";
import { optionsComment } from "../utils/constant";
import axiosConfig from "../axiosConfig";

function Comment({ data, setReload }) {
  const [showOptions, setShowOptions] = useState(false);
  function handleDeleteComment(id) {
    axiosConfig
      .delete(`/api/posts/comments/${id}`)
      .then((data) => {
        toast.success(data?.data?.message);
        setReload(true);
      })
      .catch((err) => console.log(err));
  }
  function handleGimComment(id) {}
  return (
    <div className="flex gap-4 p-2">
      <div className="w-12 h-12 rounded-full shadow overflow-hidden">
        <img
          src={noAvatar}
          alt="default"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 pr-4">
        <h3 className="font-semibold text-lg">{data?.user?.username}</h3>
        <p className="py-2">{data?.textDisplay}</p>
        <div className="flex items-center gap-4">
          <span className="flex items-center cursor-pointer">
            <span className="material-symbols-outlined">thumb_up</span>
            <span className=""></span>
          </span>
          <span className="flex items-center cursor-pointer">
            <span className="material-symbols-outlined">thumb_down</span>
            <span className=""></span>
          </span>
          <span className="flex items-center cursor-pointer">
            <span className="">Phản hồi</span>
          </span>
        </div>
      </div>
      <span
        className="relative h-full flex items-center self-center p-2 cursor-pointer select-none"
        onClick={(e) => setShowOptions(!showOptions)}
      >
        <span className="material-symbols-outlined">more_vert</span>
        {showOptions && (
          <section
            className="absolute right-full top-0 min-w-max rounded-md bg-white shadow"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="">
              {optionsComment?.map((opt) => {
                return (
                  <li
                    className="flex gap-2 py-2 pl-2 pr-8 hover:bg-gray-100"
                    key={opt.type}
                    onClick={() =>
                      opt.type === 1
                        ? handleDeleteComment(data?._id)
                        : handleGimComment(data?._id)
                    }
                  >
                    <span className="material-symbols-outlined">
                      {opt?.icon}
                    </span>
                    <span className="">{opt?.name}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </span>
    </div>
  );
}

export default memo(Comment);
