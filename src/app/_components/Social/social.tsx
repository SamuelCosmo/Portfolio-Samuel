import styles from './social.module.scss'
import Image from 'next/image'
import facebook from '../../../../public/svg/social/facebook.svg'
import github from '../../../../public/svg/social/github.svg'
import linkedin from '../../../../public/svg/social/linkedin.svg'
import arrow_left from '../../../../public/svg/social/arrow-left.svg'

interface Props {
  disableControls: boolean
  indexRef: number
  maxIndexRef: number
  setIndexRef: (position: number) => void
}

export default function SocialComponent({ disableControls, indexRef, setIndexRef, maxIndexRef }: Props) {
  const changeSection = (index: number) => {
    setIndexRef(index)
  }

  return (
    <div className={styles['main']}>
      <div className={styles['line'] + ' hide-tablet hide-desktop'} />
      <button
        onClick={(e: any) => {
          e.preventDefault()
          if (!(disableControls || indexRef === 0)) changeSection(indexRef - 1)
        }}
        className={
          styles['button'] +
          ' ' +
          (disableControls || indexRef === 0 ? styles['button--disable'] : '') +
          ' hide-tablet hide-desktop'
        }
      >
        <Image src={arrow_left} alt='arrow' className={styles['arrow-left'] + ' hide-tablet hide-desktop'} />
      </button>
      <div className={styles['line'] + ' hide-tablet hide-desktop'} />
      <a href='https://www.facebook.com/samuel.cosmo1095' target='_blank' rel='noopener noreferrer'>
        <Image src={facebook} alt='facebook' />
      </a>
      <a href='https://github.com/SamuelCosmo' target='_blank' rel='noopener noreferrer'>
        <Image src={github} alt='github' />
      </a>
      <a
        href='https://www.linkedin.com/in/samuel-ernesto-gutierrez-lopez-2b17502a3/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src={linkedin} alt='linkedin' />
      </a>
      <div className={styles['line'] + ' hide-tablet hide-desktop'} />
      <button
        onClick={(e: any) => {
          e.preventDefault()
          if (!(disableControls || indexRef === maxIndexRef)) changeSection(indexRef + 1)
        }}
        className={
          styles['button'] +
          ' ' +
          (disableControls || indexRef === maxIndexRef ? styles['button--disable'] : '') +
          ' hide-tablet hide-desktop'
        }
      >
        <Image src={arrow_left} alt='arrow' className={styles['arrow-right']} />
      </button>
      <div className={styles['line']} />
    </div>
  )
}
