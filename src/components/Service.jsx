import { memo } from "react";
import { useNavigate } from "react-router-dom";

function Service({ data }) {
  const navigate = useNavigate();
  return (
    <div className="w-[30%] flex flex-col items-center gap-3 p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-center h-60">
        <img
          src={data?.image}
          alt={data?.title}
          className="w-full object-cover"
        />
      </div>
      <h3 className="text-xl text-center font-bold text-orange-400">
        {data?.title}
      </h3>
      <p className="text-center px-2 line-clamp-3 select-none">{data?.desc}</p>
      <span
        className="w-max text-center text-white uppercase py-1 px-10 bg-orange-400 rounded-full cursor-pointer"
        onClick={() => navigate(`${data?.path}`)}
      >
        More
      </span>
    </div>
  );
}

export default memo(Service);
