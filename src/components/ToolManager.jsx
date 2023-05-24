import { memo, useState } from "react";
import { filterPost } from "../utils/constant";

function ToolManager() {
  const [isShow, setIsShow] = useState(false);
  function handleFilterPosts() {
    setIsShow(!isShow);
  }
  return (
    <div className="flex gap-1 py-2 my-4 border-b-4 border-orange-400">
      <div className="w-40 flex items-center">
        <span
          className="relative cursor-pointer select-none"
          onClick={() => setIsShow(!isShow)}
        >
          <span className="material-symbols-outlined">swap_vert</span>
          {isShow && (
            <ul className="absolute left-0 top-[110%] w-32 bg-white rounded-md shadow-md overflow-hidden">
              {filterPost?.map((item) => {
                return (
                  <li
                    className="p-2 hover:bg-orange-400 hover:text-white"
                    key={item?.value}
                    onClick={() => handleFilterPosts(item?.value)}
                  >
                    {item?.name}
                  </li>
                );
              })}
            </ul>
          )}
        </span>
        <span className="">Thumbnail</span>
      </div>
      <div className="flex-1 px-4">Description</div>
      <div className="w-20">Views</div>
      <div className="px-4">Options</div>
    </div>
  );
}

export default memo(ToolManager);
