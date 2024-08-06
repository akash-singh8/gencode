import styles from "@/styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.options}>
        <li style={{ backgroundColor: "#F44336" }}></li>
        <li style={{ backgroundColor: "#FFC107" }}></li>
        <li style={{ backgroundColor: "#4CAF50" }}></li>
      </ul>

      <p className={styles.title}>GenCode</p>
    </div>
  );
};

export default Header;
