"use client";
import { LegacyRef, useEffect, useState } from "react";
import styles from "./buttons-movement.module.scss";
import Image from "next/image";

interface Props {
  childRefs: {
    skillsetRef: LegacyRef<HTMLDivElement>;
    expertiseRef: LegacyRef<HTMLDivElement>;
    featuredRef: LegacyRef<HTMLDivElement>;
    openToWorkRef: LegacyRef<HTMLDivElement>;
  };
}

export default function ButtonsMovementComponent({ childRefs }: Props) {
  const [showButton1, setShowButton1] = useState(true);
  const [showButton2, setShowButton2] = useState(false);
  const [isFeaturedComponent, setIsFeaturedComponent] = useState(false);
  const [
    initialPositionOfFeaturedElement,
    setInitialPositionOfFeaturedElement,
  ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = Math.ceil(window.scrollY || window.pageYOffset);
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      setShowButton1(scrollY < documentHeight);
      setShowButton2(scrollY > 0);
    };
    const featuredBodyElement = document.getElementById("featured-body");
    if (featuredBodyElement)
      setInitialPositionOfFeaturedElement(featuredBodyElement.offsetTop);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToClosestChild = () => {
    const windowHeight = window.innerHeight;
    const childRefArray = [
      childRefs.skillsetRef,
      childRefs.expertiseRef,
      childRefs.featuredRef,
      childRefs.openToWorkRef,
    ];

    let closestChild: any = null;
    let minDistance = Number.MAX_SAFE_INTEGER;

    childRefArray.forEach((childRef: any) => {
      if (childRef.current) {
        const rect = childRef.current.getBoundingClientRect();
        const distance = rect.top - windowHeight;

        if (distance > 0 && distance < minDistance) {
          minDistance = distance;
          closestChild = childRef.current;
        }
      }
    });

    let featuredRef: any = childRefs?.featuredRef;
    console.log("ISFEATURED", isFeaturedComponent);
    if (closestChild === featuredRef.current || isFeaturedComponent) {
      setIsFeaturedComponent(true);
      const featuredBodyElement = document.getElementById("featured-body");

      if (featuredBodyElement) {
        let actualPosition =
          featuredBodyElement.offsetTop + featuredBodyElement.offsetHeight;
        let parentHeight = featuredRef.current.offsetHeight;
        const maxPosition = initialPositionOfFeaturedElement + parentHeight;

        const first_operation =
          (maxPosition - initialPositionOfFeaturedElement) / 3 +
          initialPositionOfFeaturedElement;
        const second_operation =
          ((maxPosition - initialPositionOfFeaturedElement) / 3) * 2 +
          initialPositionOfFeaturedElement;

        if (
          actualPosition >= initialPositionOfFeaturedElement &&
          actualPosition < first_operation
        ) {
          window.scrollTo({
            top: first_operation,
            behavior: "smooth",
          });
        } else {
          if (actualPosition < maxPosition) {
            window.scrollTo({
              top: second_operation,
              behavior: "smooth",
            });
            setIsFeaturedComponent(false);
          }
        }
      }
    }

    if (!isFeaturedComponent) {
      if (closestChild) {
        window.scrollTo({
          top: closestChild.offsetTop,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className={styles.body}>
      <div
        className={styles["body__button-1"]}
        style={{ opacity: showButton1 ? "1" : "0" }}
        onClick={() => {
          if (showButton1) scrollToClosestChild();
        }}
      >
        <Image
          alt="arrow-down"
          width={36}
          height={36}
          src={"svg/arrow--down.svg"}
        />
      </div>
      <div
        className={styles["body__button-2"]}
        style={{ opacity: showButton2 ? "1" : "0" }}
        onClick={() => {
          if (showButton2) {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setIsFeaturedComponent(false);
          }
        }}
      >
        <Image
          alt="arrow-up"
          width={90}
          height={89}
          src={"svg/arrow--up.svg"}
        />
      </div>
    </div>
  );
}
