import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Categories({ setCurPage }) {
  const { tags } = useSelector((state) => state.post);
  return (
    <div className="">
      <h3 className="flex items-center gap-1 text-xl uppercase py-1 mb-2 border-b-2 border-orange-400">
        <span className="material-symbols-outlined">label_important</span>Tags
      </h3>
      <ul className="flex flex-wrap gap-2">
        <li
          className="bg-orange-400 text-white px-2 cursor-pointer"
          onClick={() => setCurPage(1)}
        >
          <Link to={`/posts`}>#all</Link>
        </li>
        {tags?.length > 0 &&
          tags?.map((tag, i) => {
            return (
              i < 20 && (
                <li
                  className="bg-orange-400 text-white px-2 cursor-pointer"
                  key={tag}
                  onClick={() => setCurPage(1)}
                >
                  <Link to={`/posts?category=${tag}`}>#{tag}</Link>
                </li>
              )
            );
          })}
      </ul>
    </div>
  );
}

export default memo(Categories);
