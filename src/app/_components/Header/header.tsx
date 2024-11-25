'use client'
import { LegacyRef, useState } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'

interface Props {
  childRefs: {
    aboutRef: any
    skillsetRef: any
    expertiseRef: any
    workRef: any
    contactRef: any
  }
}

export default function HeaderComponent({ childRefs }: Props) {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const { aboutRef, skillsetRef, expertiseRef, workRef, contactRef } = childRefs

  const splitWord = (value: string) => {
    return value.split('').map((letter, letterIndex) => (
      <div key={letterIndex} className={styles['main__side-menu__submenu__option--letter']}>
        <span
          style={{
            animationDelay: `${letterIndex * 0.06 + 0.4}s`,
            width: letter === ' ' ? '8px' : 'initial',
          }}
        >
          {letter}
        </span>
      </div>
    ))
  }

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <button
          className={styles['body__title']}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
            setSideBarOpen(false)
          }}
        >
          Samuel Gutierrez
        </button>
        <div className={styles['body__menu'] + ' hide-mobile'}>
          <p
            className={styles['body__menu__option']}
            onClick={() => {
              aboutRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            About me
          </p>
          <p
            className={styles['body__menu__option']}
            onClick={() => {
              skillsetRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Skillset
          </p>
          <p
            className={styles['body__menu__option']}
            onClick={() => {
              expertiseRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Expertise
          </p>
          <p
            className={styles['body__menu__option']}
            onClick={() => {
              workRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Work
          </p>
          <p
            className={styles['body__menu__option']}
            onClick={() => {
              contactRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact Me
          </p>
        </div>
        <Image
          alt='menu'
          width={44}
          height={44}
          src='/svg/menu.svg'
          className={styles['body__menu-icon'] + ' hide-desktop'}
          onClick={(e: any) => {
            e.preventDefault()
            setSideBarOpen(!sideBarOpen)
          }}
        />
      </div>

      <div
        className={
          styles['main__side-menu'] + ' hide-desktop ' + (sideBarOpen ? styles['main__side-menu--opened'] : '')
        }
      >
        <div className={styles['main__side-menu__submenu']}>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              aboutRef?.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
              })
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('About Me') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              skillsetRef?.current?.scrollIntoView({ behavior: 'smooth' })
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Skillset') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              expertiseRef?.current?.scrollIntoView({ behavior: 'smooth' })
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Expertise') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              workRef?.current?.scrollIntoView({ behavior: 'smooth' })
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Work') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              contactRef?.current?.scrollIntoView({ behavior: 'smooth' })
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Contact Me') : ''}
          </span>
        </div>
      </div>
    </div>
  )
}
