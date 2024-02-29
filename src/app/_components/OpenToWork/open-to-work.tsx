"use client";
import { LegacyRef, useEffect, useState } from "react";
import styles from "./open-to-work.module.scss";
import Image from "next/image";

export default function OpenToWorkComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles["body__left"]}>
          <div className={styles["body__left__header"]}>
            <span className={styles["body__left__header__title"]}>
              Always open to work!
            </span>
            <span className={styles["body__left__header__subtitle"]}>
              Lorem ipsum dolor sit amet.
            </span>
          </div>
          <div className={styles["body__left__body"]}>
            <div className={styles["body__left__body__inputs-container"]}>
              <label
                className={styles["body__left__body__inputs-container__title"]}
              >
                Full Name
              </label>
              <input className={styles["input"]} type="text" />
            </div>
            <div className={styles["body__left__body__inputs-container"]}>
              <label
                className={styles["body__left__body__inputs-container__title"]}
              >
                Email
              </label>
              <input className={styles["input"]} type="text" />
            </div>
            <div className={styles["body__left__body__inputs-container"]}>
              <label
                className={styles["body__left__body__inputs-container__title"]}
              >
                Message
              </label>
              <input className={styles["text-area-input"]} type="textarea" />
            </div>
            <div className={styles["body__left__body__button-container"]}>
              <button className={styles["button"]}>Submit</button>
            </div>
          </div>
        </div>
        <div className={styles["body__right"] + " hide-mobile"}>
          <Image
            alt="cv"
            width={595}
            height={842}
            src={"/assets/cv.webp"}
            className={styles["body__right__cv"]}
          />
          <Image
            alt="cv"
            width={595}
            height={842}
            src={"/assets/background_cv.webp"}
            className={styles["body__right__background"]}
          />
        </div>
      </div>
      <div className={styles["main__footer"]}>
        <div className={styles["main__footer__container"]}>
          <Image alt="icon" width={32} height={32} src={"/svg/icon.svg"} />
          <span>link_1095@hotmail.com</span>
        </div>
        <div className={styles["main__footer__container"]}>
          <Image alt="icon" width={32} height={32} src={"/svg/icon.svg"} />
          <span>(686) 255 1906</span>
        </div>
        <div className={styles["main__footer__container"]}>
          <Image alt="icon" width={32} height={32} src={"/svg/icon.svg"} />
          <span>Mexicali, B.C.</span>
        </div>
        <div className={styles["main__footer__container"] + " hide-desktop"}>
          <Image alt="icon" width={24} height={24} src={"/svg/icon.svg"} />
          <span style={{ textDecoration: "underline" }}>View Full Résumé</span>
          <Image alt="icon" width={24} height={24} src={"/svg/openIn.svg"} />
        </div>
      </div>
    </div>
  );
}
