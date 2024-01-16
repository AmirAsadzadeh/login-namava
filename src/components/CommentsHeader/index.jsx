import Menu from "./Menu";
import ToolBar from "./Toolbar";
import styles from "./index.module.css";

export default function CommentsHeader(props) {
  return (
    <div className={styles.container}>
      <Menu />
      <ToolBar {...props} />
    </div>
  );
}
