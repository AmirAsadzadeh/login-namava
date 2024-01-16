/* eslint-disable react/prop-types */
import { useEffect } from "react";
import styles from "./index.module.css";

export default function Toast({ isError, message, isVisible, onTimeout }) {
  useEffect(() => {
    if (isVisible) setTimeout(() => onTimeout(), 4000);
  }, [isVisible]);

  return (
    <div
      className={`${styles["toast-container"]} ${
        isVisible && styles["active-toast"]
      }`}
    >
      <div
        className={`${styles.toast} ${
          isError ? styles["error-toast"] : styles["success-toast"]
        } `}
      >
        <img src="/src/assets/svgs/warning.svg" alt="" />
        <p>{message}</p>
      </div>
    </div>
  );
}
