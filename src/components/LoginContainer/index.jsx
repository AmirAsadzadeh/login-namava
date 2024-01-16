import { useState } from "react";
import LoginInput from "./LoginInput";
import styles from "./index.module.css";
import { emailRegex, passwordRegex } from "../../constants/regexes";
import { testValidity } from "../../utils/testValidity";
import Toast from "../toast";
import { loginByEmail } from "../../services/loginByEmail";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function LoginContainer() {
  const [toastData, setToastData] = useState({
    message: "",
    isError: false,
    isVisible: false,
  });

  const [emailData, setEmailData] = useState({
    value: "",
    isValid: false,
  });

  const [passwordData, setPasswordData] = useState({
    value: "",
    isValid: false,
    isVisible: false,
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handlePasswordVisibity() {
    setPasswordData((prevState) => ({
      ...prevState,
      isVisible: !prevState.isVisible,
    }));
  }

  function handleInputChange(e, updaterFn, pattern) {
    setIsFormSubmitted(false);
    setHasError(false);
    updaterFn((prevState) => ({
      ...prevState,
      value: e.target.value,
      isValid: testValidity(pattern, e.target.value),
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    setIsFormSubmitted(true);

    if (!emailData.isValid) {
      setToastData({
        isVisible: true,
        message: "ایمیل نامعتبر",
        isError: true,
      });
      return;
    }

    if (!passwordData.isValid) {
      setToastData({
        isVisible: true,
        message: "پسورد نامعتبر",
        isError: true,
      });
      return;
    }

    setIsLoading(true);

    const res = await loginByEmail(emailData.value, passwordData.value);

    setIsLoading(false);

    if (!res.isSucceeded) {
      setToastData({
        isVisible: true,
        message: res.data,
        isError: true,
      });
      setHasError(true);
      return;
    }

    setToastData({
      ...toastData,
      isVisible: true,
      message: "با موفقیت وارد شدید",
      isError: false,
    });

    setTimeout(() => {
      Cookies.set("isLogin", true);
      navigate("/comments");
    }, 1000);
  }

  return (
    <>
      <Toast
        isError={toastData.isError}
        message={toastData.message}
        isVisible={toastData.isVisible}
        onTimeout={() => setToastData({ ...toastData, isVisible: false })}
      />
      <div className={styles.container}>
        <h2 className={styles.heading}>ورود از طریق ایمیل</h2>
        <p className={styles.desc}>لطفا ایمیل و رمز عبور خود را وارد کنید.</p>
        <form action="" className={styles.form}>
          <LoginInput
            type={"email"}
            id="email"
            value={emailData.value}
            onChange={(e) => handleInputChange(e, setEmailData, emailRegex)}
            title={"ایمیل"}
          />
          <LoginInput
            type={"password"}
            id="password"
            value={passwordData.value}
            onChange={(e) =>
              handleInputChange(e, setPasswordData, passwordRegex)
            }
            onEyeClick={handlePasswordVisibity}
            title={"رمز عبور"}
            isVisible={passwordData.isVisible}
          />
          <input
            className={styles.submit}
            type="submit"
            name=""
            id=""
            value={"ورود"}
            disabled={
              !emailData.value.trim().length ||
              !passwordData.value.trim().length ||
              (isFormSubmitted &&
                (!emailData.isValid || !passwordData.isValid)) ||
              toastData.isVisible ||
              hasError
            }
            onClick={handleFormSubmit}
          />
          {isLoading && <Loading />}
        </form>
        <p className={styles.forget}>رمز عبور خود را فراموش کرده ام</p>
        <p className={styles.phone}>ورود از طریق شماره تلفن همراه</p>
      </div>
    </>
  );
}
