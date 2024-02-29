import { LegacyRef } from "react";
import styles from "./skillset.module.scss";
import Image from "next/image";

export default function SkillsetComponent() {
  return (
    <div className={styles.body}>
      <div className={styles["body__title-container"]}>
        <span className={styles["body__title-container__title"]}>Skillset</span>
        <span className={styles["body__title-container__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className={styles["body__icons"]}>
        <div className={styles["body__icons__first"] + " hide-mobile"}>
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/angular.svg"}
            className={styles["icons"]}
          />
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/node.svg"}
            className={styles["icons"]}
          />
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/react.svg"}
            className={styles["icons"]}
          />
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/typescript.svg"}
            className={styles["icons"]}
          />
        </div>
        <div className={styles["body__icons__second"] + " hide-mobile"}>
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/html.svg"}
            className={styles["icons"]}
          />
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/sass.svg"}
            className={styles["icons"]}
          />
          <Image
            alt="angular"
            width={180}
            height={180}
            src={"/svg/c-sharp.svg"}
            className={styles["icons"]}
          />
        </div>
        <div className={styles["body__icons__first"] + " hide-desktop"}>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="angular"
              width={180}
              height={180}
              src={"/svg/angular.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              Angular
            </span>
          </div>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="node"
              width={180}
              height={180}
              src={"/svg/node.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              Node JS
            </span>
          </div>
        </div>
        <div className={styles["body__icons__first"] + " hide-desktop"}>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="react"
              width={180}
              height={180}
              src={"/svg/react.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              React
            </span>
          </div>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="typescript"
              width={180}
              height={180}
              src={"/svg/typescript.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              Typescript
            </span>
          </div>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="html"
              width={180}
              height={180}
              src={"/svg/html.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              HTML5
            </span>
          </div>
        </div>
        <div className={styles["body__icons__first"] + " hide-desktop"}>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="sass"
              width={180}
              height={180}
              src={"/svg/sass.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              SASS
            </span>
          </div>
          <div className={styles["body__icons__icon-container"]}>
            <Image
              alt="c-sharp"
              width={180}
              height={180}
              src={"/svg/c-sharp.svg"}
              className={styles["icons"]}
            />
            <span className={styles["body__icons__icon-container--text"]}>
              C#
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
