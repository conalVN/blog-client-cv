/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { InputText, LoadingData, PreviewPost, Tool } from "../../components";
import * as actions from "../../store/actions";
import axiosConfig from "../../axiosConfig";
import compareTwoArray from "../../utils/compareArray";
import { useNavigate } from "react-router-dom";

function EditPost({ isUpdate }) {
  const { isLoading } = useSelector((state) => state.app);
  const { curPostId } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [files, setFiles] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [view, setView] = useState(false);
  const [content, setContent] = useState("");
  const [oldPost, setOldPost] = useState("");
  // get post handle update
  useLayoutEffect(() => {
    if (isUpdate) {
      axiosConfig.get(`/api/posts/${curPostId}`).then((res) => {
        setImage(res?.data?.data?.thumbnail?.url);
        setTitle(res?.data?.data?.title);
        setDescription(res?.data?.data?.description);
        setContent(res?.data?.data?.content);
        setTags(res?.data?.data?.categories);
        setOldPost(res?.data?.data);
      });
    } else {
      setImage("");
      setTitle("");
      setDescription("");
      setTags([]);
      setTag("");
      setContent("");
    }
  }, [isUpdate]);
  // handle tags
  const handleShowTags = (e) => {
    setTag(e.target.value.trim());
    if (e.nativeEvent.data === " ") {
      setTags((prev) => [...prev, e.target.value.trim()]);
      setTag("");
    }
  };
  const deleteTag = (tag) => {
    const newArr = tags?.filter((i) => i !== tag);
    setTags(newArr);
  };
  // handle submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      // update post
      if (files) {
        dispatch(actions.loading(true));
        const dataImage = new FormData();
        dataImage.append("file", files);
        dataImage.append("upload_preset", "conal-blog");
        dataImage.append("cloud_name", "blogconal");
        fetch(`https://api.cloudinary.com/v1_1/blogconal/image/upload`, {
          method: "POST",
          body: dataImage,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const dataUpdate = new FormData();
              title !== oldPost?.title && dataUpdate.set("title", title);
              description !== oldPost?.description &&
                dataUpdate.set("description", description);
              content !== oldPost?.content &&
                dataUpdate.set("content", content);
              !compareTwoArray(oldPost?.categories, tags) &&
                dataUpdate.set("categories", tags);
              data?.public_id !== oldPost?.thumbnail?.public_id &&
                dataUpdate.set(
                  "thumbnail",
                  JSON.stringify({
                    id: data?.public_id,
                    url: data?.secure_url,
                  })
                );
              if (title && description && tags && content) {
                axiosConfig
                  .put(`/api/system/update/${curPostId}`, dataUpdate)
                  .then((res) => {
                    if (res.status === 200) {
                      navigate("/system");
                      dispatch(actions.loading(false));
                      toast.success("Update post success");
                    } else {
                      dispatch(actions.loading(false));
                      toast.error("Post update error");
                    }
                  })
                  .catch((err) => {
                    dispatch(actions.loading(false));
                    toast.error("Post update error");
                    console.log(err);
                  });
              }
            }
          });
      } else {
        const dataUpdate = new FormData();
        title !== oldPost?.title && dataUpdate.set("title", title);
        description !== oldPost?.description &&
          dataUpdate.set("description", description);
        content !== oldPost?.content && dataUpdate.set("content", content);
        !compareTwoArray(oldPost?.categories, tags) &&
          dataUpdate.set("categories", tags);
        if (title && description && content && tags) {
          axiosConfig
            .put(`/api/system/update/${curPostId}`, dataUpdate)
            .then((res) => {
              if (res.status === 200) {
                navigate("/system");
                dispatch(actions.loading(false));
                toast.success("Update post success");
              } else {
                dispatch(actions.loading(false));
                toast.error("Post update error");
              }
            })
            .catch((err) => {
              dispatch(actions.loading(false));
              toast.error("Post update error");
              console.log(err);
            });
        } else {
          dispatch(actions.loading(false));
          toast.warn("Fields are required");
        }
      }
    } else {
      // create new post
      if (files) {
        dispatch(actions.loading(true));
        const dataImage = new FormData();
        dataImage.append("file", files);
        dataImage.append("upload_preset", "conal-blog");
        dataImage.append("cloud_name", "blogconal");
        fetch(`https://api.cloudinary.com/v1_1/blogconal/image/upload`, {
          method: "POST",
          body: dataImage,
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              const postData = new FormData();
              postData.set("title", title);
              postData.set("description", description);
              postData.set("categories", tags);
              postData.set("content", content);
              postData.set(
                "thumbnail",
                JSON.stringify({
                  id: data?.public_id,
                  url: data?.secure_url,
                })
              );

              if (title && description && tags && content) {
                axiosConfig
                  .post(`/api/system/create`, postData)
                  .then((res) => {
                    if (res.status === 201) {
                      URL.revokeObjectURL(image);
                      setContent("");
                      setTitle("");
                      setDescription("");
                      setTags([]);
                      setTag("");
                      setImage("");
                      setFiles("");
                      dispatch(actions.loading(false));
                      toast.success("Create post successfully!");
                    } else {
                      dispatch(actions.loading(false));
                      toast.warn("Create post feild");
                    }
                  })
                  .catch((err) => console.log(err));
              } else {
                dispatch(actions.loading(false));
                toast.warn("Fields are required");
              }
            }
          })
          .catch((err) => {
            dispatch(actions.loading(false));
            toast.error("Couldn't create a post");
            console.log(err);
          });
      }
    }
  };
  return (
    <div className="my-4 w-full h-full p-4">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <LoadingData />
        </div>
      ) : (
        <>
          {view ? (
            <PreviewPost
              image={image}
              title={title}
              tags={tags}
              content={content}
            />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-4 border border-gray-400 rounded-md"
            >
              <input
                type="file"
                id="image"
                className="hidden"
                onChange={(e) => {
                  files && URL.revokeObjectURL(image);
                  setFiles(e.target.files[0]);
                  setImage(URL.createObjectURL(e.target.files[0]));
                }}
              />
              {!image && (
                <label
                  htmlFor="image"
                  className="w-max py-1 px-2 border border-gray-400 rounded-md select-none cursor-pointer"
                >
                  Add cover a image
                </label>
              )}
              {image && (
                <div className="flex gap-4">
                  <img
                    src={image}
                    alt="thumnail-post"
                    className="w-1/3 h-48 rounded-md object-cover overflow-hidden"
                  />
                  <label
                    htmlFor="image"
                    className="self-start py-1 px-2 border border-gray-400 rounded-md select-none cursor-pointer"
                  >
                    Change image
                  </label>
                </div>
              )}
              <InputText
                styles="text-4xl font-bold"
                placeholder="New post title here..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <InputText
                placeholder="Add short decsription..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex gap-4">
                {tags?.length > 0 && (
                  <ul className="flex items-center gap-2">
                    {tags?.map((tag) => (
                      <li
                        className="flex items-center gap-2 bg-orange-400 text-white px-2 py-1 rounded-md select-none"
                        key={tag}
                      >
                        <span className="">#{tag}</span>
                        <span
                          className="material-symbols-outlined cursor-pointer"
                          onClick={() => deleteTag(tag)}
                        >
                          do_not_disturb_on
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <InputText
                  value={tag}
                  placeholder="Add tags..."
                  onChange={handleShowTags}
                  styles={`${tags?.length > 5 ? "hidden" : "block"}`}
                />
              </div>
              <Tool value={content} onChange={(val) => setContent(val)} />
            </form>
          )}
          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600"
              onClick={handleSubmit}
            >
              {isUpdate ? "Save" : "Publish"}
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md hover:bg-gray-200 hover:text-orange-400"
              onClick={(e) => {
                e.stopPropagation();
                view ? setView(false) : setView(true);
              }}
            >
              {!view ? "Preview" : "Edit"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default memo(EditPost);
