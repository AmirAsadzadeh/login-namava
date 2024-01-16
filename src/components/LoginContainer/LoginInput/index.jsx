/* eslint-disable react/prop-types */
import styles from "./index.module.css";

export default function LoginInput({
  id = "",
  title,
  value = "",
  onChange,
  type,
  isVisible = true,
  onEyeClick,
}) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        <p className={value.length === 0 && "opacity-0"}>{title} </p>
      </label>
      <div className={styles["input-container"]}>
        <input
          className={`${styles.input}`}
          id={id}
          type={isVisible ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={title}
          autoComplete="off"
        />
        {type === "password" && value.length > 0 && (
          <div onClick={onEyeClick}>
            <img src="/src/assets/svgs/eye.svg" alt="" />
          </div>
        )}
      </div>
    </>
  );
}
