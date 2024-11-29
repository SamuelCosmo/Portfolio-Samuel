import { LegacyRef, useState } from 'react'
import styles from './skillset.module.scss'
import Image from 'next/image'
import shapes from '../../../../public/svg/skillset/shapes.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import AngularIcon from './svg/angular'
import JavaScriptIcon from './svg/javascript'
import ReactIcon from './svg/react'
import TypescriptIcon from './svg/typescript'
import HtmlIcon from './svg/html'
import SassIcon from './svg/sass'
import CSharpIcon from './svg/c-sharp'
import CypressIcon from './svg/cypress'

const skills: string[] = ['angular', 'javascript', 'react', 'typescript', 'html', 'sass', 'cypress']

export default function SkillsetComponent() {
  const [skillSet, setSkillSet] = useState(-1)

  return (
    <div className={styles.main}>
      <div className={styles.shapes}>
        <Image
          src={shapes2}
          alt='shapes'
          className={styles['shapes__second'] + ' ' + styles['shapes__second--a'] + ' hide-desktop hide-tablet'}
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={styles['shapes__second'] + ' ' + styles['shapes__second--b'] + ' hide-desktop hide-tablet'}
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={styles['shapes__third'] + ' ' + styles['shapes__third--a'] + ' hide-desktop hide-tablet'}
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={styles['shapes__third'] + ' ' + styles['shapes__third--b'] + ' hide-desktop hide-tablet'}
        />
      </div>
      <Image src={shapes} alt='shapes' className={styles['shapes--1'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--2'] + ' hide-mobile'} />
      <div className={styles.body}>
        <div className={styles['body__title-container']}>
          <span className={styles['body__title-container__title']}>Skillset</span>
          <div className={styles['skills-names-container']}>
            {skills.map((item: string, index: number) => {
              return (
                <span
                  className={
                    styles['body__title-container__skillset-title'] +
                    ' ' +
                    (index === skillSet ? styles['body__title-container__skillset-title--active'] : '')
                  }
                  key={item + '-' + index}
                >
                  {item}
                </span>
              )
            })}
          </div>
        </div>
        <div className={styles['body__icons-container']}>
          <div className={styles['body__icons-container__first']}>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(0)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {AngularIcon(skillSet === 0 ? '#A91814' : undefined)}
            </div>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(1)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {JavaScriptIcon(skillSet === 1 ? '#D6BB38' : undefined)}
            </div>
          </div>
          <div className={styles['body__icons-container__first']}>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(2)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {ReactIcon(skillSet === 2 ? '#09D9FF' : undefined)}
            </div>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(3)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {TypescriptIcon(skillSet === 3 ? '#377CC8' : undefined)}
            </div>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(4)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {HtmlIcon(skillSet === 4 ? '#FF5225' : undefined)}
            </div>
          </div>
          <div className={styles['body__icons-container__first']}>
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(5)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {SassIcon(skillSet === 5 ? '#CF6C9C' : undefined)}
            </div>
            {/* <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(6)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {CSharpIcon(skillSet === 6 ? '#6D287E' : undefined)}
            </div> */}
            <div
              className={styles['icons']}
              onMouseEnter={() => {
                setSkillSet(6)
              }}
              onMouseLeave={() => {
                setSkillSet(-1)
              }}
            >
              {CypressIcon(skillSet === 6 ? '#356A5D' : undefined)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
