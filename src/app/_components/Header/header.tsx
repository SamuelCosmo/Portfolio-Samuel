'use client'
import { LegacyRef, useState } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import menu from '../../../../public/svg/menu.svg'
import logo from '../../../../public/assets/header/logo.png'
import PlaneIcon from './header/paper-plane'

interface Props {
  indexRef: number
  setIndexRef: (position: number) => void
}

export default function HeaderComponent({ indexRef, setIndexRef }: Props) {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const splitWord = (value: string) => {
    return value.split('').map((letter, letterIndex) => (
      <div key={letterIndex} className={styles['main__side-menu__submenu__option--letter']}>
        <span
          style={{
            animationDelay: `${letterIndex * 0.03 + 0.4}s`,
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
            setIndexRef(0)
            setSideBarOpen(false)
          }}
        >
          <Image src={logo} alt='logo' className={styles['logo']} />
        </button>
        <div className={styles['body__menu'] + ' hide-mobile'}>
          <span
            className={styles['body__menu__option']}
            onClick={() => {
              setIndexRef(1)
            }}
          >
            About me
          </span>
          <span
            className={styles['body__menu__option']}
            onClick={() => {
              setIndexRef(2)
            }}
          >
            Skillset
          </span>
          <span
            className={styles['body__menu__option']}
            onClick={() => {
              setIndexRef(3)
            }}
          >
            Expertise
          </span>
          <span
            className={styles['body__menu__option']}
            onClick={() => {
              setIndexRef(4)
            }}
          >
            Work
          </span>
          <button
            className={styles['body__menu__contact']}
            onClick={(e: any) => {
              e.preventDefault()
              setIndexRef(5)
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className={styles['text'] + ' ' + (isHovered ? styles['text--active'] : '')}>Contact</p>
            <div className={styles['plane'] + ' ' + (isHovered ? styles['plane--active'] : '')}>
              {PlaneIcon('black')}
            </div>
          </button>
        </div>
        <Image
          alt='menu'
          src={menu}
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
        <span
          className={styles['main__side-menu__back_button']}
          onClick={() => {
            setSideBarOpen(!sideBarOpen)
          }}
        >
          {'<-- Back'}
        </span>
        <div className={styles['main__side-menu__submenu']}>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              setIndexRef(1)
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('About Me') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              setIndexRef(2)
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Skillset') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              setIndexRef(3)
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Expertise') : ''}
          </span>
          <span
            className={styles['main__side-menu__submenu__option']}
            onClick={() => {
              setIndexRef(4)
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {sideBarOpen ? splitWord('Work') : ''}
          </span>
        </div>
        <div className={styles['contact-container']}>
          <div className={styles['line']}></div>
          <div
            className={styles['contact-container__plane']}
            onClick={() => {
              setIndexRef(5)
              setSideBarOpen(!sideBarOpen)
            }}
          >
            {PlaneIcon('white')}
          </div>
          <div className={styles['line']}></div>
        </div>
      </div>
    </div>
  )
}
