'use client'
import styles from './page.module.scss'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import HeaderComponent from './_components/Header/header'
import HeroComponent from './_components/Hero/hero'
import SocialComponent from './_components/Social/social'

const AboutComponent = dynamic(() => import('./_components/About/about'))
const ExpertiseComponent = dynamic(() => import('./_components/Expertise/expertise'))
const WorkComponent = dynamic(() => import('./_components/Work/work'))
const ContactComponent = dynamic(() => import('./_components/Contact/contact'))

export default function Home() {
  const bodyRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const [indexRef, setIndexRef] = useState(0)

  const scrollToSection = useCallback((index: number) => {
    const target = sectionRefs.current[index]
    if (!target || !bodyRef.current) return

    const isMobileOrTablet = window.matchMedia('(max-width: 1024px)').matches
    const scrollTop = isMobileOrTablet ? Math.max(0, target.offsetTop - 96) : target.offsetTop
    bodyRef.current.scrollTo({ top: scrollTop, behavior: 'smooth' })
    setIndexRef(index)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const visibleIndex = sectionRefs.current.findIndex((el) => el === entry.target)
          if (visibleIndex !== -1) setIndexRef(visibleIndex)
        })
      },
      { root: bodyRef.current, threshold: 0.1 }
    )

    sectionRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const sections = useMemo(
    () => [
      <HeroComponent key='hero' />,
      <AboutComponent key='about' />,
      <ExpertiseComponent key='expertise' />,
      <WorkComponent key='work' />,
      <ContactComponent key='contact' />,
    ],
    []
  )

  return (
    <main className={styles.main}>
      <div className={styles.body} ref={bodyRef}>
        <SocialComponent />
        <HeaderComponent indexRef={indexRef} setIndexRef={scrollToSection} />
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el
            }}
            className={styles['body__container']}
          >
            {section}
          </div>
        ))}
      </div>
    </main>
  )
}
