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
            animationDelay: `${letterIndex * 0.06 + 0.4}s`,
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
        Samuel Gutierrez
      </button>
      <div className={styles["body__menu"] + " hide-mobile"}>
        <p className={styles["body__menu__option"]}><span>01. </span>About Me</p>
        <p className={styles["body__menu__option"]}><span>02. </span>Expertise</p>
        <p className={styles["body__menu__option"]}><span>03. </span>Work</p>
        <p className={styles["body__menu__option"]}><span>04. </span>Contact</p>
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
