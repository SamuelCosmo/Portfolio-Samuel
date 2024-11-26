'use client'
import styles from './page.module.scss'
import HeaderComponent from './_components/Header/header'
import AboutComponent from './_components/About/about'
import SkillsetComponent from './_components/Skillset/skillset'
import ContactComponent from './_components/Contact/contact'
import ButtonsMovementComponent from './_components/ButtonsMovement/buttons-movement'
import { useEffect, useRef, useState } from 'react'
import HeroComponent from './_components/Hero/hero'
import ExpertiseComponent from './_components/Expertise/expertise'
import WorkComponent from './_components/Work/work'
import SocialComponent from './_components/Social/social'

export default function Home() {
  const childRefs = {
    heroRef: useRef<HTMLDivElement>(null),
    aboutRef: useRef<HTMLDivElement>(null),
    skillsetRef: useRef<HTMLDivElement>(null),
    expertiseRef: useRef<HTMLDivElement>(null),
    workRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  }

  const [indexRef, setIndexRef] = useState<number>(0)
  const [scrolling, setScrolling] = useState<boolean>(false)

  useEffect(() => {
    if (!scrolling) {
      const refKeys = Object.keys(childRefs) as (keyof typeof childRefs)[]
      const targetRef = childRefs[refKeys[indexRef]]?.current
      targetRef?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [indexRef, childRefs, scrolling])

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const refKeys = Object.keys(childRefs) as (keyof typeof childRefs)[]
          const visibleIndex = refKeys.findIndex((key) => childRefs[key]?.current === entry.target)
          if (visibleIndex !== indexRef) {
            setScrolling(true)
            setIndexRef(visibleIndex)
          }
        }
      })
    }, observerOptions)

    Object.values(childRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      observer.disconnect()
    }
  }, [childRefs, indexRef])

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <SocialComponent
          indexRef={indexRef}
          maxIndexRef={5}
          setIndexRef={(position: number) => {
            setIndexRef(position)
            setScrolling(false)
          }}
        />
        <HeaderComponent
          indexRef={indexRef}
          setIndexRef={(position: number) => {
            setIndexRef(position)
            setScrolling(false)
          }}
        />
        {/* <ButtonsMovementComponent childRefs={childRefs} /> */}
        <div ref={childRefs.heroRef} className={styles['body__container']}>
          <HeroComponent />
        </div>
        <div ref={childRefs.aboutRef} className={styles['body__container']}>
          <AboutComponent />
        </div>
        <div ref={childRefs.skillsetRef} className={styles['body__container']}>
          <SkillsetComponent />
        </div>
        <div ref={childRefs.expertiseRef} className={styles['body__container']}>
          <ExpertiseComponent />
        </div>
        <div ref={childRefs.workRef} className={styles['body__container']}>
          <WorkComponent />
        </div>
        <div ref={childRefs.contactRef} className={styles['body__container']}>
          <ContactComponent />
        </div>
      </div>
    </main>
  )
}
