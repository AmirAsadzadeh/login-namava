import styles from "./index.module.css";
import NamavaLogo from "../../assets/svgs/namava-logo.svg";

export default function LoginHeader() {
  return (
    <div className={styles.container}>
      <img src={NamavaLogo} />
      <div role="button" className={styles["login-btn"]}>
        ثبت نام
      </div>
    </div>
  );
}
