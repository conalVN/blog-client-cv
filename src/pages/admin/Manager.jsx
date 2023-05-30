import { useLayoutEffect, useRef, useState } from "react";
import axiosConfig from "../../axiosConfig";
import { toast } from "react-toastify";
import { PostAdmin, ToolManager } from "../../components";
import { useSelector } from "react-redux";

function Manager() {
  const { curPostId } = useSelector((state) => state.post);
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const refTool = useRef(null);
  useLayoutEffect(() => {
    axiosConfig
      .get(
        `/api/posts/limit${
          page !== 1 ? `?page=${page}&limit=10` : `?limit=10`
        }`,
        { withCredentials: "same-origin" }
      )
      .then((data) => {
        setData(data?.data);
      })
      .catch((err) => {
        toast.error("Can't get post!");
        console.log(err);
      });
  }, [page, curPostId]);

  function prevPage() {
    setPage((prev) => prev - 1);
    refTool.current.scrollIntoView({ top: 0, behavior: "smooth" });
  }
  function nextPage() {
    setPage((prev) => prev + 1);
    refTool.current.scrollIntoView({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="my-4">
      <ToolManager forwardedRef={refTool} />
      <div className="flex flex-col gap-2">
        {data?.map((post) => {
          return <PostAdmin data={post} key={post?._id} />;
        })}
      </div>
      {data.length > 0 && (
        <div className="flex items-center justify-between my-4 px-4">
          <span
            className={`flex items-center justify-center p-2 bg-gray-400 rounded-md cursor-pointer select-none ${
              page === 1 && "invisible"
            }`}
            onClick={prevPage}
          >
            <span className="material-symbols-outlined">navigate_before</span>
            <span className="">Previous</span>
          </span>
          <span className="">
            {`${(page - 1) * 10} - ${
              data?.length < limit
                ? `${(page - 1) * 10 + data?.length}`
                : `${page * data?.length}`
            }`}{" "}
            of many results
          </span>
          <span
            className={`flex items-center justify-center p-2 bg-gray-400 rounded-md cursor-pointer select-none ${
              data?.length < limit && "invisible"
            }`}
            onClick={nextPage}
          >
            <span className="">Next</span>
            <span className="material-symbols-outlined">navigate_next</span>
          </span>
        </div>
      )}
    </div>
  );
}

export default Manager;
