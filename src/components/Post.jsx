import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import moment from "moment";
import * as actions from "../store/actions";

function Post({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="col flex-c md:flex-m lg:flex-l shadow rounded-md py-2 mx-auto md:mx-0 border border-transparent hover:border-orange-300">
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
            className="w-full h-40 object-cover cursor-pointer transition-all hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-1 mt-2">
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
