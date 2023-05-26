import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as actions from "../store/actions";
import axiosConfig from "../axiosConfig";
import LoadingData from "./LoadingData";
function Popup({ title, isDelete }) {
  const { isLoading } = useSelector((state) => state.app);
  const { curPostId } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const handleDeletePost = () => {
    // call api delete
    axiosConfig
      .delete(`/api/system/${curPostId}`)
      .then((res) => {
        if (res.status === 200) {
          // reset curPostId
          dispatch(actions.setCurPostId(null));
          // close popup
          dispatch(actions.popup(false));
          toast.success("Delete post success");
        }
      })
      .catch((err) => {
        toast.error("An error occurred while deleting the post");
        console.log(err);
      });
  };

  return (
    <div
      className="fixed top-0 right-0 bottom-0 left-0 bg-alpha-1 flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        dispatch(actions.popup(false));
      }}
    >
      {!isLoading ? (
        <div className="flex flex-col items-center justify-center bg-white p-10 rounded-md">
          <h1 className="text-center text-2xl">{`${
            isDelete ? "Bạn có chắc muốn xóa bài viết" : title
          }`}</h1>
          <div className="flex justify-evenly w-full p-4">
            <span
              className="py-1 px-6 border border-gray-400 rounded-lg cursor-pointer"
              onClick={() => dispatch(actions.popup(false))}
            >
              No
            </span>
            <span
              className="py-1 px-6 bg-orange-400 text-white rounded-lg cursor-pointer"
              onClick={handleDeletePost}
            >
              Yes
            </span>
          </div>
        </div>
      ) : (
        <LoadingData />
      )}
    </div>
  );
}

export default memo(Popup);
