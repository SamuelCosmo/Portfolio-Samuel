import styles from './hero.module.scss'
import Image from 'next/image'
import shapes1 from '../../../../public/svg/hero/shapes_1.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import { useState } from 'react'

const title = 'Samuel Gutierrez'
const subtitle = 'Building things for the web'

export default function HeroComponent() {
  const splitString = (text: any, first: boolean) => {
    const list = text.split('')
    return list.map((item: string, index: number) => {
      return (
        <div
          key={index}
          style={{
            width: item === ' ' ? '16px' : 'initial',
            animationDelay: `${index * 0.1 + 0.5}s`,
          }}
          className={styles['letter']}
        >
          {item}
        </div>
      )
    })
  }

  return (
    <div className={styles.main}>
      <div className={styles.background + ' hide-mobile'}>
        <Image src={shapes1} alt='shapes' className={styles['background__first']} />
        <Image src={shapes2} alt='shapes' className={styles['background__second']} />
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{splitString(title, true)}</h1>
        <h2 className={styles.subtitle}>
          {splitString(subtitle, false)}
          <span>_{'>'}</span>
        </h2>
      </div>
    </div>
  )
}
