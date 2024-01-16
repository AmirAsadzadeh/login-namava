import styles from "./index.module.css";

export default function SvgContainer({
  width,
  height,
  className = "",
  children,
}) {
  return (
    <div
      style={
        width &&
        height && {
          width: width + "px",
          height: height + "px",
        }
      }
      className={className + " " + styles.container}
    >
      {children}
    </div>
  );
}
