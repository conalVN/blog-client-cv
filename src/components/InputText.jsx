import { memo } from "react";

function InputText({ type, styles, placeholder, ref, value, onChange }) {
  return (
    <input
      type={`${type ? type : "text"}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles}
      ref={ref}
    />
  );
}

export default memo(InputText);
