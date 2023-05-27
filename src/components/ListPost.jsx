import { memo } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

function ListPost({ title, list }) {
  const dispatch = useDispatch();
  return (
    <div className="mt-4">
      <h3 className="flex items-center gap-1 text-xl uppercase py-1 mb-2 border-b-2 border-orange-400">
        <span className="material-symbols-outlined">label_important</span>
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {list?.map((item) => {
          return (
            <li className="">
              <Link
                to={`/posts/${item?._id}`}
                onClick={() => {
                  dispatch(actions.setCurPostId(item?._id));
                  dispatch(actions.loading(true));
                }}
                key={item?._id}
                className="underline line-clamp-2 hover:text-orange-400"
              >
                {item?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(ListPost);
