import { memo } from "react";
import { Link } from "react-router-dom";

function ListPost({ title, list }) {
  return (
    <div className="mt-4">
      <h3 className="flex items-center gap-1 text-xl uppercase py-1 mb-2 border-b-2 border-orange-400">
        <span class="material-symbols-outlined">label_important</span>
        {title}
      </h3>
      <ul className="flex flex-col gap-4">
        {list?.map((item) => {
          return (
            <Link
              to={``}
              key={item?._id}
              className="underline line-clamp-2 hover:text-orange-400"
            >
              {item?.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(ListPost);
