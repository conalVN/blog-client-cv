import { memo } from "react";

function Button({ type, title, styles, onClick }) {
  return (
    <button
      type={`${type ? type : "button"}`}
      className={`${styles}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default memo(Button);
