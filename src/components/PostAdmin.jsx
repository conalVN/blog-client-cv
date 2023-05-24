import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

function PostAdmin({ data }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1">
      <div className="w-40 h-32 rounded-md overflow-hidden cursor-pointer">
        <img
          src={data?.thumbnail?.url}
          alt={data?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 self-start px-4">
        <h3 className="text-xl font-bold cursor-pointer">{data?.title}</h3>
        <p className="">{data?.description}</p>
      </div>
      <div className="flex items-center w-20">
        <span className="material-symbols-outlined">visibility</span>
        <span className="">10</span>
      </div>
      <div className="flex items-center gap-2">
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-300 hover:text-white cursor-pointer"
          onClick={() => {
            dispatch(actions.setCurPostId(data?._id));
            navigate(`update/${data?._id}`);
          }}
        >
          <span className="material-symbols-outlined">edit</span>
        </span>
        <span
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-orange-300 hover:text-white cursor-pointer"
          onClick={() => {
            dispatch(actions.popup(true));
            dispatch(actions.setCurPostId(data?._id));
          }}
        >
          <span className="material-symbols-outlined">delete</span>
        </span>
      </div>
    </div>
  );
}

export default memo(PostAdmin);
