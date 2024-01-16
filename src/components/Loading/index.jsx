// import Lottie from "react-lottie";
import styles from "./index.module.css";
import animationData from "../../lotties/loading.json";
import { Player } from "@lottiefiles/react-lottie-player";
export default function Loading() {
  return (
    <div className={styles.loading}>
      <Player autoplay loop src={animationData}></Player>
    </div>
  );
}
