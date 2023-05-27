import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import * as actions from "../store/actions";

function Post({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="col c-12 m-4 mx-0">
      <div className="rounded-lg overflow-hidden">
        <Link
          to={`/posts/${data?._id}`}
          onClick={() => {
            dispatch(actions.setCurPostId(data?._id));
            dispatch(actions.loading(true));
          }}
        >
          <img
            src={data?.thumbnail?.url}
            alt={data?.title}
            className="w-full h-40 object-cover cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold line-clamp-1 cursor-pointer">
          <Link
            to={`/posts/${data?._id}`}
            onClick={() => {
              dispatch(actions.setCurPostId(data?._id));
              dispatch(actions.loading(true));
            }}
          >
            {data?.title}
          </Link>
        </h3>
        <p className="line-clamp-2">{data?.description}</p>
        <span className="text-gray-400">
          {moment(data?.createdAt).format("L")}
        </span>
      </div>
    </div>
  );
}

export default memo(Post);
