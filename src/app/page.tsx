'use client'
import styles from './page.module.scss'
import HeaderComponent from './_components/Header/header'
import AboutComponent from './_components/About/about'
import SkillsetComponent from './_components/Skillset/skillset'
import ContactComponent from './_components/Contact/contact'
import ButtonsMovementComponent from './_components/ButtonsMovement/buttons-movement'
import { useRef } from 'react'
import HeroComponent from './_components/Hero/hero'
import ExpertiseComponent from './_components/Expertise/expertise'
import WorkComponent from './_components/Work/work'
import SocialComponent from './_components/Social/social'

export default function Home() {
  const childRefs = {
    aboutRef: useRef(null),
    skillsetRef: useRef(null),
    expertiseRef: useRef(null),
    workRef: useRef(null),
    contactRef: useRef(null),
  }

  return (
    <main className={styles.main}>
      <div className={styles.body}>
        <SocialComponent />
        <HeaderComponent childRefs={childRefs} />
        {/* <ButtonsMovementComponent childRefs={childRefs} /> */}
        <HeroComponent />
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
