import { LegacyRef } from "react";
import styles from "./expertise.module.scss";
import Image from "next/image";

export default function ExpertiseComponent() {
  const list: { title: string; description: string; image: string }[] = [
    {
      title: "Structure development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/img.png",
    },
    {
      title: "Resource handling",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/img_1.png",
    },
    {
      title: "Front-end sync",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      image: "/assets/img.png",
    },
  ];

  return (
    <div className={styles.body}>
      <span className={styles["body__title"]}>My expertise</span>
      <div className={styles["body__expertises-container"]}>
        {list.map((expertise: any, index: number) => {
          return (
            <div
              className={styles["body__expertises-container__expertise"]}
              key={`expertise_${index}`}
            >
              <div
                className={
                  styles["body__expertises-container__expertise__title"]
                }
              >
                <Image
                  alt="icon"
                  width={32}
                  height={32}
                  src={"/svg/icon.svg"}
                />
                {expertise.title}
              </div>
              <div
                className={
                  styles["body__expertises-container__expertise__description"]
                }
              >
                {expertise.description}
              </div>
              <div
                className={
                  styles["body__expertises-container__expertise__image"] +
                  " hide-mobile"
                }
                style={{ marginRight: index % 2 !== 0 ? "24px" : "0" }}
              >
                <Image
                  alt="cover"
                  width={273}
                  height={242}
                  src={expertise.image}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
