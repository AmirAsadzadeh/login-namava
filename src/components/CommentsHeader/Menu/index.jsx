import BurgerMenuIcon from "../../Svgs/BurgerMenuIcon";
import NamavaLogo from "../../Svgs/NamavaLogo";
import SvgContainer from "../../UI/SvgContainer";
import NavBar from "../NavBar";
import styles from "./index.module.css";

export default function Menu() {
  return (
    <div className={styles.container}>
      <SvgContainer
        width={30}
        height={30}
        className={styles["burger-container"]}
      >
        <BurgerMenuIcon />
      </SvgContainer>
      <SvgContainer width={48} height={24}>
        <NamavaLogo />
      </SvgContainer>
      <NavBar />
    </div>
  );
}
