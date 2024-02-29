import styles from "./background.module.scss";
import Image from "next/image";

export default function BackgroundComponent() {
  return (
    <div className={styles["body"]}>
      <div className={styles["body__image"]}>
        <Image
          alt="figure-1"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--1"]}
        />
        <Image
          alt="figure-2"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--2"]}
        />
        <Image
          alt="figure-3"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--3"]}
        />
        <Image
          alt="figure-4"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--4"]}
        />
        <Image
          alt="figure-5"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--5"]}
        />
        <Image
          alt="figure-6"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--6"]}
        />
        <Image
          alt="figure-7"
          width={803}
          height={803}
          src={"/svg/figure.svg"}
          className={styles["body__image--7"]}
        />
      </div>
    </div>
  );
}
