'use client'
import styles from './page.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import HeaderComponent from './_components/Header/header'
import HeroComponent from './_components/Hero/hero'
import SocialComponent from './_components/Social/social'
import ModalComponent from '@/shared/components/Modal/modal'

const AboutComponent = dynamic(() => import('./_components/About/about'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const SkillsetComponent = dynamic(() => import('./_components/Skillset/skillset'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const ExpertiseComponent = dynamic(() => import('./_components/Expertise/expertise'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const WorkComponent = dynamic(() => import('./_components/Work/work'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const ContactComponent = dynamic(() => import('./_components/Contact/contact'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

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

  const scrollToChildrens = useCallback((index: number) => {
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
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: bodyRef.current,
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const visibleIndex = Object.values(childRefs).findIndex((ref) => ref.current === entry.target)
          if (visibleIndex !== indexRef) {
            setIndexRef(visibleIndex)
          }
        }
      })
    }, observerOptions)

    const refsArray = Object.values(childRefs).map((ref) => ref.current)
    refsArray.forEach((ref) => ref && observer.observe(ref))

    return () => {
      observer.disconnect()
    }
  }, [childRefs, indexRef])

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
