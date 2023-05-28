import { memo } from "react";

function Pagination({ curPage, totalPost, paginate }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / 12); i++) {
    pages.push(i);
  }
  return (
    <div
      className={`flex justify-center my-4 ${
        totalPost !== 0 ? "block" : "invisible"
      }`}
    >
      <ul className="flex items-center gap-4 w-max text-xl px-10 py-2 rounded-md bg-white shadow-md">
        {curPage !== 1 && (
          <li
            className="flex items-center justify-center cursor-pointer"
            onClick={() => paginate(curPage - 1)}
          >
            <span className="material-symbols-outlined">navigate_before</span>
          </li>
        )}
        {pages.map((num) => {
          return (
            <li
              className={`flex items-center justify-center px-2 rounded-lg ${
                curPage === num ? "bg-orange-400 text-white" : ""
              } cursor-pointer select-none`}
              key={num}
              onClick={() => paginate(num)}
            >
              {num}
            </li>
          );
        })}
        {curPage !== pages[pages.length - 1] && (
          <li
            className="flex items-center justify-center cursor-pointer"
            onClick={() => paginate(curPage + 1)}
          >
            <span className="material-symbols-outlined">navigate_next</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default memo(Pagination);
