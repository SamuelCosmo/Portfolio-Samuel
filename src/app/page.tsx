"use client";
import styles from "./page.module.scss";
import HeaderComponent from "./_components/Header/header";
import HeroComponent from "./_components/Hero/hero";
import SkillsetComponent from "./_components/Skillset/skillset";
import ExpertiseComponent from "./_components/Expertise/expertise";
import FeaturedComponent from "./_components/Featured/featured";
import OpenToWorkComponent from "./_components/OpenToWork/open-to-work";
import BackgroundComponent from "./_components/Background/background";
import ButtonsMovementComponent from "./_components/ButtonsMovement/buttons-movement";
import { useRef } from "react";

export default function Home() {
  const childRefs = {
    skillsetRef: useRef(null),
    expertiseRef: useRef(null),
    featuredRef: useRef(null),
    openToWorkRef: useRef(null),
  };

  return (
    <main className={styles.main}>
      <BackgroundComponent />
      <div className={styles.body}>
        <HeaderComponent />
        <ButtonsMovementComponent childRefs={childRefs} />
        <HeroComponent />
        <div ref={childRefs.skillsetRef} className={styles["body__container"]}>
          <SkillsetComponent />
        </div>
        <div ref={childRefs.expertiseRef} className={styles["body__container"]}>
          <ExpertiseComponent />
        </div>
        <div ref={childRefs.featuredRef} className={styles["body__container"]}>
          <FeaturedComponent />
        </div>
        <div
          ref={childRefs.openToWorkRef}
          className={styles["body__container"]}
        >
          <OpenToWorkComponent />
        </div>
      </div>
    </main>
  );
}
