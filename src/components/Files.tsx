import Image from "next/image";

import pythonIcon from "@/assets/code/python.svg";
import javaIcon from "@/assets/code/java.svg";
import cppIcon from "@/assets/code/cpp.svg";
import cIcon from "@/assets/code/c.svg";

import styles from "@/styles/files.module.scss";

const Files = () => {
  let lang = "py";
  let langIcon;

  switch (lang) {
    case "py":
      langIcon = pythonIcon;
      break;
    case "java":
      langIcon = javaIcon;
      break;
    case "cpp":
      langIcon = cppIcon;
      break;
    case "c":
      langIcon = cIcon;
      break;
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>All Files</p>
      <div className={styles.files}>
        <div className={styles.file}>
          <Image
            className={styles.logo}
            src={langIcon}
            alt={`${langIcon} icon`}
            width={18}
            height={18}
          />
          <p>file1.py</p>
        </div>
        <div className={`${styles.file} ${styles.selected}`}>
          <Image
            className={styles.logo}
            src={cppIcon}
            alt={`${langIcon} icon`}
            width={18}
            height={18}
          />
          <p>program.cpp</p>
        </div>
        <div className={styles.file}>
          <Image
            className={styles.logo}
            src={javaIcon}
            alt={`${langIcon} icon`}
            width={18}
            height={18}
          />
          <p>program.java</p>
        </div>
        <div className={styles.file}>
          <Image
            className={styles.logo}
            src={cIcon}
            alt={`${langIcon} icon`}
            width={18}
            height={18}
          />
          <p>program.c</p>
        </div>
      </div>
    </div>
  );
};

export default Files;
