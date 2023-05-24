import { memo } from "react";

function InputText({ styles, placeholder, value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles}
    />
  );
}

export default memo(InputText);
