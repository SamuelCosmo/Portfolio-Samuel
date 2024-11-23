import styles from './social.module.scss'
import Image from 'next/image'
import facebook from '../../../../public/svg/social/facebook.svg'
import github from '../../../../public/svg/social/github.svg'
import linkedin from '../../../../public/svg/social/linkedin.svg'

export default function SocialComponent() {
  return (
    <div className={styles['main']}>
      <Image src={facebook} alt='facebook' />
      <Image src={github} alt='github' />
      <Image src={linkedin} alt='linkedin' />
      <div className={styles['line']} />
    </div>
  )
}
