import Navbar from "@/components/Navbar";
import Window from "@/components/Window";

import styles from "@/app/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Window />
    </main>
  );
}
