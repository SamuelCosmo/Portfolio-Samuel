import styles from './social.module.scss'
import Image from 'next/image'
import facebook from '../../../../public/svg/social/facebook.svg'
import github from '../../../../public/svg/social/github.svg'
import linkedin from '../../../../public/svg/social/linkedin.svg'
import arrow_left from '../../../../public/svg/social/arrow-left.svg'

interface Props {
  indexRef: number
  maxIndexRef: number
  setIndexRef: (position: number) => void
}

export default function SocialComponent({ indexRef, setIndexRef, maxIndexRef }: Props) {
  return (
    <div className={styles['main']}>
      <div className={styles['line'] + ' hide-tablet hide-desktop'} />
      <Image
        src={arrow_left}
        alt='arrow'
        className={styles['arrow-left'] + ' hide-tablet hide-desktop'}
        onClick={() => {
          if (indexRef !== 0) setIndexRef(indexRef - 1)
        }}
      />
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
      <Image
        src={arrow_left}
        alt='arrow'
        className={styles['arrow-right'] + ' hide-tablet hide-desktop'}
        onClick={() => {
          if (indexRef !== maxIndexRef) setIndexRef(indexRef + 1)
        }}
      />
      <div className={styles['line']} />
    </div>
  )
}
