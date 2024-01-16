/* eslint-disable react/prop-types */
import styles from "./index.module.css";
import SvgContainer from "../../UI/SvgContainer";
import SearchIcon from "../../Svgs/SearchIcon";
import ShuffleIcon from "../../Svgs/ShuffleIcon";
import { useNavigate } from "react-router-dom";

export default function ToolBar({ isLogin, onLogout }) {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  
  return (
    <div className={styles.container}>
      <SvgContainer width={30} height={30}>
        <SearchIcon />
      </SvgContainer>
      <SvgContainer width={30} height={30}>
        <ShuffleIcon />
      </SvgContainer>
      {isLogin ? (
        <div role="button" className={styles.button} onClick={onLogout}>
          خروج
        </div>
      ) : (
        <div role="button" className={styles.button} onClick={handleLogin}>
          ورود / ثبت نام
        </div>
      )}
    </div>
  );
}
