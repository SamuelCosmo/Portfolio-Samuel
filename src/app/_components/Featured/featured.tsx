"use client";
import { LegacyRef, useEffect, useRef, useState } from "react";
import styles from "./featured.module.scss";
import Image from "next/image";

const list: {
  title: string;
  description: string;
  description_2?: string;
  image: string;
  background: string;
  zIndex: number;
}[] = [
  {
    title: "Top sales-platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    description_2:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "/assets/img.png",
    background: "linear-gradient(180deg, #2C5173 0%, #234767 100%)",
    zIndex: 3,
  },
  {
    title: "Resource handling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/assets/img_1.png",
    background:
      "linear-gradient(180deg, #28435C 0%, #203B53 100%, #203B53 100%)",
    zIndex: 2,
  },
  {
    title: "Front-end sync",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/assets/img.png",
    background: "linear-gradient(180deg, #203447 0%, #192C3D 100%)",
    zIndex: 1,
  },
];

export default function FeaturedComponent() {
  const targetParentElement = useRef<any>();
  const targetElement = useRef<any>();
  const [initialPositionOfElement, setInitialPositionOfElement] = useState(0);
  const [position, setPosition] = useState<number>(0);
  const [newList, setNewList] = useState(list);

  const eventScroll = () => {
    let actualPosition =
      targetElement.current.offsetTop + targetElement.current.offsetHeight;
    let parentHeight = targetParentElement.current.offsetHeight;
    const maxPosition = initialPositionOfElement + parentHeight;

    const first_operation =
      (maxPosition - initialPositionOfElement) / 3 + initialPositionOfElement;
    const second_operation =
      ((maxPosition - initialPositionOfElement) / 3) * 2 +
      initialPositionOfElement;

    if (
      actualPosition >= initialPositionOfElement &&
      actualPosition < first_operation
    ) {
      setPosition(0);
    } else {
      if (
        actualPosition >= first_operation &&
        actualPosition < second_operation
      ) {
        setPosition(1);
      } else {
        if (actualPosition < maxPosition) {
          setPosition(2);
        }
      }
    }
  };

  useEffect(() => {
    if (initialPositionOfElement === 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        setInitialPositionOfElement(targetElement.current.offsetTop);
      }, 1000);
    }
  }, [targetElement]);

  useEffect(() => {
    window.addEventListener("scroll", eventScroll);
    return () => {
      window.removeEventListener("scroll", eventScroll);
    };
  }, [initialPositionOfElement, targetElement, targetParentElement]);

  useEffect(() => {
    let newRender = [...newList];
    if (position === 0) {
      newRender[0].zIndex = 3;
      newRender[1].zIndex = 2;
      newRender[2].zIndex = 1;
    } else if (position === 1) {
      newRender[0].zIndex = 1;
      newRender[1].zIndex = 2;
      newRender[2].zIndex = 1;
    } else if (position === 2) {
      newRender[0].zIndex = 1;
      newRender[1].zIndex = 2;
      newRender[2].zIndex = 3;
    }
    setNewList([...newRender]);
  }, [position]);

  return (
    <div className={styles.main} ref={targetParentElement}>
      <div className={styles.body} ref={targetElement} id="featured-body">
        <span className={styles["body__title"]}>Featured Work</span>
        <div
          className={styles["body__featured-container"]}
          style={{ height: 50 * list.length + 369 + "px" }}
        >
          {newList.map((feature: any, index: number) => {
            return (
              <div
                className={
                  styles["body__featured-container__feature"] +
                  " " +
                  (position === index ? styles["animation_feature"] : "")
                }
                style={{
                  top: (window.innerWidth <= 425 ? 30 : 50) * index + "px",
                  zIndex: feature.zIndex,
                  background: feature.background,
                }}
                onClick={() => {
                  setPosition(index);
                }}
                key={index}
              >
                <div
                  className={styles["body__featured-container__feature__left"]}
                  style={{ opacity: index === position ? 1 : 0 }}
                >
                  <div
                    className={
                      styles["body__featured-container__feature__left__title"]
                    }
                  >
                    {feature.title}
                  </div>
                  <div
                    className={
                      styles[
                        "body__featured-container__feature__left__description"
                      ]
                    }
                  >
                    {feature.description}
                  </div>
                  <div
                    className={
                      styles[
                        "body__featured-container__feature__left__description"
                      ]
                    }
                  >
                    {feature.description_2}
                  </div>
                  <div
                    className={
                      styles[
                        "body__featured-container__feature__left__images-container"
                      ] + " hide-mobile"
                    }
                  >
                    <Image
                      alt="icon"
                      width={100}
                      height={100}
                      src={"/assets/img.png"}
                    />
                    <Image
                      alt="icon"
                      width={100}
                      height={100}
                      src={"/assets/img.png"}
                    />
                    <Image
                      alt="icon"
                      width={100}
                      height={100}
                      src={"/assets/img.png"}
                    />
                  </div>
                </div>
                <div
                  className={styles["body__featured-container__feature__right"]}
                  style={{ opacity: index === position ? 1 : 0 }}
                >
                  <Image
                    alt="icon"
                    width={273}
                    height={242}
                    src={"/assets/img.png"}
                    className={
                      styles["body__featured-container__feature__right__first"]
                    }
                  />
                  <Image
                    alt="icon"
                    width={200}
                    height={176}
                    src={"/assets/img_1.png"}
                    className={
                      styles["body__featured-container__feature__right__second"]
                    }
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
