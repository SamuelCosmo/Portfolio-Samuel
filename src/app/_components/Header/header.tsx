'use client'
import { useState } from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import menu from '../../../../public/svg/menu.svg'
import logo from '../../../../public/assets/header/logo.png'
import arrow from '../../../../public/svg/header/arrow-left.svg'
import PlaneIcon from './header/paper-plane'
import PersonIcon from './header/person'
import CompanyIcon from './header/company'
import FolderIcon from './header/folder'

interface Props {
  indexRef: number
  setIndexRef: (position: number) => void
}

const NAV_ITEMS = [
  { label: 'About me', index: 1 },
  { label: 'Expertise', index: 2 },
  { label: 'Work', index: 3 },
]

const SIDE_MENU_ITEMS = [
  { label: 'About Me', index: 1, Icon: PersonIcon },
  { label: 'Expertise', index: 2, Icon: CompanyIcon },
  { label: 'Work', index: 3, Icon: FolderIcon },
]

export default function HeaderComponent({ indexRef, setIndexRef }: Props) {
  const [sideBarOpen, setSideBarOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const splitWord = (value: string) =>
    value.split('').map((letter, letterIndex) => (
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

  const goTo = (index: number) => {
    setIndexRef(index)
    setSideBarOpen(false)
  }

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <button className={styles['body__title']} onClick={() => goTo(0)}>
          <Image src={logo} alt='logo' className={styles.logo} />
        </button>
        <div className={styles['body__menu'] + ' hide-tablet hide-mobile'}>
          {NAV_ITEMS.map(({ label, index }) => (
            <span key={label} className={styles['body__menu__option']} onClick={() => goTo(index)}>
              {label}
            </span>
          ))}
          <button
            className={styles['body__menu__contact']}
            onClick={() => goTo(4)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p className={styles.text + ' ' + (isHovered ? styles['text--active'] : '')}>Contact</p>
            <div className={styles.plane + ' ' + (isHovered ? styles['plane--active'] : '')}>
              <PlaneIcon color='black' />
            </div>
          </button>
        </div>
        <button
          className={styles['body__menu-icon'] + ' hide-desktop'}
          onClick={() => setSideBarOpen(!sideBarOpen)}
          aria-label='Toggle menu'
        >
          <Image alt='menu' src={menu} />
        </button>
      </div>

      <div
        className={
          styles['main__side-menu'] + ' hide-desktop ' + (sideBarOpen ? styles['main__side-menu--opened'] : '')
        }
      >
        <span className={styles['main__side-menu__back_button']} onClick={() => setSideBarOpen(false)}>
          <Image src={arrow} alt='arrow' /> Back
        </span>
        <div className={styles['main__side-menu__submenu']}>
          {SIDE_MENU_ITEMS.map(({ label, index, Icon }) => (
            <span
              key={label}
              className={
                styles['main__side-menu__submenu__option'] +
                ' ' +
                (sideBarOpen && indexRef === index ? styles.selected : '')
              }
              onClick={() => goTo(index)}
            >
              <Icon color='white' /> {sideBarOpen ? splitWord(label) : ''}
            </span>
          ))}
        </div>
        <div className={styles['contact-container']}>
          <div className={styles.line}></div>
          <div className={styles['contact-container__plane']} onClick={() => goTo(4)}>
            <PlaneIcon color='white' />
          </div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  )
}
