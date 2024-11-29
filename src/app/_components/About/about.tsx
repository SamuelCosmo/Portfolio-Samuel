import { LegacyRef } from 'react'
import styles from './about.module.scss'
import Image from 'next/image'
import background from '../../../../public/svg/about/background_photo.svg'
import photo from '../../../../public/assets/about/photo.webp'
import shapes1 from '../../../../public/svg/hero/shapes_1.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

export default function AboutComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.shapes}>
        <Image src={shapes1} alt='shapes' className={styles['shapes__first'] + ' hide-mobile'} />
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
      <div className={styles.body}>
        <div className={styles['body__information-container']}>
          <h1 className={styles['body__information-container__title']}>About me</h1>
          <span className={styles['body__information-container__description']}>
            Front-End Developer with 3 years of experience creating fast and functional interfaces using React, Next.js,
            Angular, and TypeScript. Focused on enhancing user experience with dynamic, interactive animations and
            ensuring code quality through automated testing with Cypress.
          </span>
        </div>
        <div className={styles['body__photo-container'] + ' hide-mobile'}>
          <Image alt='background_photo' src={background} className={styles['body__photo-container__back']} />
          <Image alt='photo' src={photo} className={styles['body__photo-container__photo']} />
        </div>
      </div>
    </div>
  )
}
