import { memo } from "react";
import { Link } from "react-router-dom";

function PreviewPost({ image, title, tags, content }) {
  return (
    <div
      className={`ql-snow w-full ${
        !image && !title && !tags && !content ? "h-3/4" : "h-4/5"
      }`}
    >
      {!image && !title && !tags && !content ? (
        <div className="ql-editor w-full h-400 mt-4 border border-gray-400 rounded-md"></div>
      ) : (
        <div className="ql-editor flex flex-col gap-2 w-full h-full p-4 mt-4 border border-gray-400 rounded-md">
          {image && (
            <img
              src={image}
              alt={title}
              className="block w-full h-400 rounded-md object-contain bg-center"
            />
          )}
          {title && <h1 className="font-bold text-2xl">{title}</h1>}
          {tags.length > 0 && (
            <ul className="flex gap-2 list-none">
              {tags?.map((tag) => (
                <li className="px-4 py-1 bg-orange-400 rounded-md" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {content && <div dangerouslySetInnerHTML={{ __html: content }}></div>}
        </div>
      )}
    </div>
  );
}

export default memo(PreviewPost);
