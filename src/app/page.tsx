'use client'
import styles from './page.module.scss'
import HeaderComponent from './_components/Header/header'
import AboutComponent from './_components/About/about'
import SkillsetComponent from './_components/Skillset/skillset'
import ContactComponent from './_components/Contact/contact'
import { useEffect, useRef, useState } from 'react'
import HeroComponent from './_components/Hero/hero'
import ExpertiseComponent from './_components/Expertise/expertise'
import WorkComponent from './_components/Work/work'
import SocialComponent from './_components/Social/social'
import ModalComponent from '@/shared/components/Modal/modal'

export default function Home() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const childRefs = {
    heroRef: useRef<HTMLDivElement>(null),
    aboutRef: useRef<HTMLDivElement>(null),
    skillsetRef: useRef<HTMLDivElement>(null),
    expertiseRef: useRef<HTMLDivElement>(null),
    workRef: useRef<HTMLDivElement>(null),
    contactRef: useRef<HTMLDivElement>(null),
  }

  const [indexRef, setIndexRef] = useState<number>(0)
  const [showModal, setModalShow] = useState<any>(null)
  const [modalContent, setModalContent] = useState<any>(null)
  const [clickedButtonControl, setClickedButtonControl] = useState(false)

  const scrollToChildrens = (index: number) => {
    if (bodyRef.current) bodyRef.current.style.scrollSnapType = 'none'
    setClickedButtonControl(true)

    const refKeys = Object.keys(childRefs) as (keyof typeof childRefs)[]
    const targetRef = childRefs[refKeys[index]]?.current
    targetRef?.scrollIntoView({ behavior: 'smooth' })
    setIndexRef(index)

    if (bodyRef)
      setTimeout(() => {
        if (bodyRef.current) bodyRef.current.style.scrollSnapType = 'both mandatory'
        setClickedButtonControl(false)
      }, 800)
  }

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
  }, [childRefs])

  return (
    <main className={styles.main}>
      <ModalComponent
        show={showModal}
        setShow={(value: boolean) => {
          setModalShow(value)
        }}
      >
        {modalContent}
      </ModalComponent>
      <div className={styles.body} ref={bodyRef}>
        <SocialComponent
          disableControls={clickedButtonControl}
          indexRef={indexRef}
          maxIndexRef={5}
          setIndexRef={(position: number) => {
            scrollToChildrens(position)
          }}
        />
        <HeaderComponent
          indexRef={indexRef}
          setIndexRef={(position: number) => {
            scrollToChildrens(position)
          }}
        />
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
          <WorkComponent
            showModal={(value: boolean) => {
              setModalShow(value)
            }}
            changeModalContent={(value: any) => {
              setModalContent(value)
            }}
          />
        </div>
        <div ref={childRefs.contactRef} className={styles['body__container']}>
          <ContactComponent />
        </div>
      </div>
    </main>
  )
}
