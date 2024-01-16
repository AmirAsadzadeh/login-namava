import styles from "./index.module.css";

export default function NavBar() {
  return (
    <ul className={styles.container}>
      <li>
        <a href="#">خانه</a>
      </li>
      <li>
        <a href="#">فیلم ها</a>
      </li>
      <li>
        <a href="#">سریال ها</a>
      </li>
      <li>
        <a href="#">دسته بندی</a>
      </li>
      <li>
        <a href="#">تازه ها</a>
      </li>
      <li>
        <a href="#">کودکان</a>
      </li>
      <li>
        <a href="#">پردیس نماوا</a>
      </li>
      <li>
        <a href="#">نماوا مگ</a>
      </li>
    </ul>
  );
}
