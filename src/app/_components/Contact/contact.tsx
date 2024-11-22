"use client";
import { LegacyRef, useEffect, useState } from "react";
import styles from "./contact.module.scss";
import Image from "next/image";

export default function ContactComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles["body__left"]}>
          <div className={styles["body__left__header"]}>
            <span className={styles["body__left__header__title"]}>
              <span>5. </span>Contact me
            </span>
          </div>
          <div className={styles["body__left__body"]}>
            <div className={styles["body__left__body__row"]}>
              <div className={styles["body__left__body__row__inputs-container"]}>
                <label
                  className={styles["body__left__body__row__inputs-container__title"]}
                >
                  Full Name
                </label>
                <input className={styles["input"]} type="text" />
              </div>
              <div className={styles["body__left__body__row__inputs-container"]}>
                <label
                  className={styles["body__left__body__row__inputs-container__title"]}
                >
                  Email
                </label>
                <input className={styles["input"]} type="text" />
              </div></div>
            <div className={styles["body__left__body__row"]}>
              <div className={styles["body__left__body__row__inputs-container"]}>
                <label
                  className={styles["body__left__body__row__inputs-container__title"]}
                >
                  Message
                </label>
                <textarea className={styles["text-area-input"]} />
              </div>
            </div>
            <div className={styles["body__left__body__button-container"]}>
              <button className={styles["button"]}>Submit</button>
            </div>
            <div className={styles["main__footer"]}>
              <div className={styles["main__footer__container"]}>
                <Image alt="icon" width={20} height={16} src={"/svg/contact/email.svg"} />
                <span>link_1095@hotmail.com</span>
              </div>
              <div className={styles["main__footer__container"]}>
                <Image alt="icon" width={18} height={18} src={"/svg/contact/phone.svg"} />
                <span>+52 686 255-1906</span>
              </div>
              <div className={styles["main__footer__container"]}>
                <Image alt="icon" width={18} height={20} src={"/svg/contact/location.svg"} />
                <span>Mexicali, B.C. Mexico</span>
              </div>
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
    </div>
  );
}
