import { useNavigate } from "react-router-dom";
import Message from "../../Svgs/Message";
import SvgContainer from "../../UI/SvgContainer";
import styles from "./index.module.css";

export default function LoginWarning() {
  const navigate = useNavigate()

  function handleNavigateLogin(){
    navigate('/login')
  }
  return (
    <div className={styles.container}>
      <div className={styles["title-container"]}>
        <SvgContainer className={styles.message}>
          <Message />
        </SvgContainer>
        <p className={styles.title}>برای ثبت نظر ابتدا وارد شوید.</p>
      </div>

      <div className={styles['buttons-container']}>
        <div role="button" className={styles.register} onClick={handleNavigateLogin}>
          ثبت نام
        </div>
        <div role="button" className={styles.login} onClick={handleNavigateLogin}>
          ورود
        </div>
      </div>
    </div>
  );
}
