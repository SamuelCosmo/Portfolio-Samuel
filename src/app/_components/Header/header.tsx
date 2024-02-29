import styles from "./header.module.scss";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <div className={styles.body}>
      <h1 className={styles["body__title"]}>ErnGtz.</h1>
      <div className={styles["body__menu"] + " hide-mobile"}>
        <span className={styles["body__menu__option"]}>skillset</span>
        <span className={styles["body__menu__option"]}>expertise</span>
        <span className={styles["body__menu__option"]}>work</span>
        <span className={styles["body__menu__option"]}>contact</span>
      </div>
      <Image
        alt="menu"
        width={44}
        height={44}
        src="/svg/menu.svg"
        className="hide-desktop"
      />
    </div>
  );
}
