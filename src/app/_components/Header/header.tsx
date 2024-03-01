"use client";
import { useState } from "react";
import styles from "./header.module.scss";
import Image from "next/image";

export default function HeaderComponent() {
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const splitWord = (value: string) => {
    return value.split("").map((letter, letterIndex) => (
      <div
        key={letterIndex}
        className={styles["body__side-menu__submenu__option--letter"]}
      >
        <span
          style={{
            animationDelay: `${letterIndex * 0.1 + 0.5}s`,
          }}
        >
          {letter}
        </span>
      </div>
    ));
  };

  return (
    <div className={styles.body}>
      <button
        className={styles["body__title"]}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        SamGtz.
      </button>
      <div className={styles["body__menu"] + " hide-mobile"}>
        <span className={styles["body__menu__option"]}>Skillset</span>
        <span className={styles["body__menu__option"]}>Expertise</span>
        <span className={styles["body__menu__option"]}>Work</span>
        <span className={styles["body__menu__option"]}>Contact</span>
      </div>
      <Image
        alt="menu"
        width={44}
        height={44}
        src="/svg/menu.svg"
        className={styles["body__menu-icon"] + " hide-desktop"}
        onClick={(e: any) => {
          e.preventDefault();
          setSideBarOpen(!sideBarOpen);
        }}
      />

      <div
        className={
          styles["body__side-menu"] +
          " hide-desktop " +
          (sideBarOpen ? styles["body__side-menu--opened"] : "")
        }
      >
        <div className={styles["body__side-menu__submenu"]}>
          <span className={styles["body__side-menu__submenu__option"]}>
            {sideBarOpen ? splitWord("Skillset") : ""}
          </span>
          <span className={styles["body__side-menu__submenu__option"]}>
            {sideBarOpen ? splitWord("Expertise") : ""}
          </span>
          <span className={styles["body__side-menu__submenu__option"]}>
            {sideBarOpen ? splitWord("Work") : ""}
          </span>
          <span className={styles["body__side-menu__submenu__option"]}>
            {sideBarOpen ? splitWord("Contact") : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
