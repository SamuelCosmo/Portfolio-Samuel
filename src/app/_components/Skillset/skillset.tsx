import { LegacyRef } from 'react'
import styles from './skillset.module.scss'
import Image from 'next/image'
import angular from '../../../../public/svg/skillset/angular.svg'
import node from '../../../../public/svg/skillset/node.svg'
import react from '../../../../public/svg/skillset/react.svg'
import typescript from '../../../../public/svg/skillset/typescript.svg'
import html from '../../../../public/svg/skillset/html.svg'
import sass from '../../../../public/svg/skillset/sass.svg'
import c_sharp from '../../../../public/svg/skillset/c-sharp.svg'
import shapes from '../../../../public/svg/skillset/shapes.svg'

export default function SkillsetComponent() {
  return (
    <div className={styles.main}>
      <Image src={shapes} alt='shapes' className={styles['shapes--1'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--2'] + ' hide-mobile'} />
      <div className={styles.body}>
        <div className={styles['body__title-container']}>
          <span className={styles['body__title-container__title']}>Skillset</span>
        </div>
        <div className={styles['body__icons-container']}>
          <div className={styles['body__icons-container__first']}>
            <Image alt='angular' src={angular} className={styles['icons']} />
            <Image alt='node' src={node} className={styles['icons']} />
          </div>
          <div className={styles['body__icons-container__first']}>
            <Image alt='react' src={react} className={styles['icons']} />
            <Image alt='typescript' src={typescript} className={styles['icons']} />
            <Image alt='html' src={html} className={styles['icons']} />
          </div>
          <div className={styles['body__icons-container__first']}>
            <Image alt='sass' src={sass} className={styles['icons']} />
            <Image alt='c-sharp' src={c_sharp} className={styles['icons']} />
          </div>
        </div>
      </div>
    </div>
  )
}
