import { memo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Tool({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "link"],
      ["blockquote", "code-block"],
      [{ align: [] }, { list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ color: [] }, { background: [] }],
      ["image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "background",
    "code-block",
  ];

  return (
    <>
      <ReactQuill
        value={value}
        placeholder="Write your post here"
        modules={modules}
        formats={formats}
        onChange={onChange}
        className="my-4 text-xl font-form"
      />
    </>
  );
}

export default memo(Tool);
