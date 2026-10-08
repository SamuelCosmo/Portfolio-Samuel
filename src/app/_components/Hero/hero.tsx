import styles from './hero.module.scss'
import Image from 'next/image'
import shapes1 from '../../../../public/svg/hero/shapes_1.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import background from '../../../../public/svg/about/background_photo.svg'
import photo from '../../../../public/assets/about/photo.webp'

const title = 'Samuel Gutierrez'
const subtitle = 'Building things for the web'
const subtitleMobile = 'Fullstack Developer'

export default function HeroComponent() {
  const splitString = (text: string) =>
    text.split('').map((item, index) => (
      <div
        key={index}
        style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
        className={styles.letter + ' ' + (item === ' ' ? styles['letter--space'] : '')}
      >
        {item}
      </div>
    ))

  return (
    <div className={styles.main}>
      <div className={styles.background + ' hide-mobile'}>
        <Image src={shapes1} alt='shapes' className={styles['background__first']} priority />
        <Image src={shapes2} alt='shapes' className={styles['background__second']} priority />
      </div>
      <div className={styles.body}>
        <div className={styles['body__photo-container'] + ' hide-desktop hide-tablet'}>
          <Image alt='background_photo' src={background} className={styles['body__photo-container__back']} priority />
          <Image alt='photo' src={photo} className={styles['body__photo-container__photo']} priority />
        </div>
        <h1 className={styles.title + ' hide-mobile'}>{splitString(title)}</h1>
        <h1 className={styles.title + ' hide-desktop hide-tablet'}>{title}</h1>
        <h2 className={styles.subtitle + ' hide-mobile'}>
          {splitString(subtitle)}
          <span>_{'>'}</span>
        </h2>
        <h2 className={styles.subtitle + ' hide-desktop hide-tablet'}>{splitString(subtitleMobile)}</h2>
      </div>
    </div>
  )
}
