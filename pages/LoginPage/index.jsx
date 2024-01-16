import LoginContainer from "../../src/components/LoginContainer";
import LoginHeader from "../../src/components/LoginHeader";
import styles from "./index.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginHeader />
      <LoginContainer />
    </div>
  );
}
