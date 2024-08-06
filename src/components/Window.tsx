import Header from "./Header";
import Files from "./Files";
import Editor from "./Editor";
import Terminal from "./Terminal";

import styles from "@/styles/window.module.scss";

const Window = () => {
  return (
    <div className={styles.window}>
      <Header />

      <div className={styles.container}>
        <Files />

        <div className={styles.rightSection}>
          <Editor />
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Window;
