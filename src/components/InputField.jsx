import { memo, useEffect, useRef } from "react";

function InputField({
  label,
  type,
  id,
  styles,
  placeholder,
  forwardedRef,
  value,
  onChange,
  onFocus,
  onBlur,
  required,
  autoComplete,
  valid,
  message,
}) {
  const inputEl = useRef(null);
  useEffect(() => {
    if (forwardedRef) {
      forwardedRef.current = inputEl.current;
    }
  }, []);
  return (
    <label htmlFor={id}>
      {label && <span className="font-semibold">{label}</span>}
      <input
        ref={inputEl}
        type={`${type ? type : "text"}`}
        id={id}
        className={styles}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        autoComplete={autoComplete ? "on" : "off"}
      />
      {message && !valid && (
        <span dangerouslySetInnerHTML={{ __html: message }}></span>
      )}
    </label>
  );
}

export default memo(InputField);
