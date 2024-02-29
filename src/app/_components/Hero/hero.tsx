import { LegacyRef } from "react";
import styles from "./hero.module.scss";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <div className={styles.body}>
      <div className={styles["body__photo-container"]}>
        <Image
          alt="background_photo"
          width={597}
          height={753}
          src={"/svg/background_photo.svg"}
          className={styles["body__photo-container__back"]}
        />
        <Image
          alt="photo"
          width={1545}
          height={1936}
          src={"/assets/photo.png"}
          className={styles["body__photo-container__photo"]}
        />
      </div>
      <div className={styles["body__information-container"]}>
        <span className={styles["body__information-container__title"]}>
          Ernesto Gutierrez
        </span>
        <span className={styles["body__information-container__subtitle"]}>
          Front-end developer
        </span>
        <span className={styles["body__information-container__description"]}>
          I’m a patient guy who likes to learn about new and different areas,
          both inside and outside of what is related to my work.
        </span>
      </div>
    </div>
  );
}
