import Image from "next/image";

import Time from "@/components/Time";

import apple from "@/assets/home/apple.svg";
import battery from "@/assets/home/battery.svg";

import styles from "@/styles/navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftNav}>
        <Image
          className={styles.logo}
          src={apple}
          alt="Apple Logo"
          width={19}
          height={19}
        />

        <div className={styles.menu}>
          <h1>GenCode</h1>
          <ul>
            <li>File</li>
            <li>Terminal</li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className={styles.rightNav}>
        <Image
          src={battery}
          alt="Battery icon"
          width={22}
          height={19}
          title="77%"
        />
        <Time />
      </div>
    </nav>
  );
};

export default Navbar;
