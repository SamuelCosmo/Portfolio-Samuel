"use client";
import styles from "./page.module.scss";
import HeaderComponent from "./_components/Header/header";
import AboutComponent from "./_components/About/about";
import SkillsetComponent from "./_components/Skillset/skillset";
import ContactComponent from "./_components/Contact/contact";
import ButtonsMovementComponent from "./_components/ButtonsMovement/buttons-movement";
import { useRef } from "react";
import HeroComponent from "./_components/Hero/hero";

export default function Home() {
  const childRefs = {
    skillsetRef: useRef(null),
    expertiseRef: useRef(null),
    featuredRef: useRef(null),
    openToWorkRef: useRef(null),
  };

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <HeaderComponent />
        {/* <ButtonsMovementComponent childRefs={childRefs} /> */}
        <HeroComponent />
        <AboutComponent />
        <div ref={childRefs.skillsetRef} className={styles["body__container"]}>
          <SkillsetComponent />
        </div>
        <div
          ref={childRefs.openToWorkRef}
          className={styles["body__container"]}
        >
          <ContactComponent />
        </div>
      </div>
    </main>
  );
}
