import styles from './social.module.scss'
import Image from 'next/image'
import github from '../../../../public/svg/social/github.svg'
import linkedin from '../../../../public/svg/social/linkedin.svg'

const links = [
  { href: 'https://github.com/SamuelCosmo', icon: github, alt: 'github' },
  {
    href: 'https://www.linkedin.com/in/samuel-ernesto-gutierrez-lopez-2b17502a3/',
    icon: linkedin,
    alt: 'linkedin',
  },
]

export default function SocialComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.line + ' hide-tablet hide-desktop'} />
      <div className={styles.line + ' hide-tablet hide-desktop'} />
      {links.map(({ href, icon, alt }) => (
        <a key={alt} href={href} target='_blank' rel='noopener noreferrer'>
          <Image src={icon} alt={alt} />
        </a>
      ))}
      <div className={styles.line + ' hide-tablet hide-desktop'} />
      <div className={styles.line} />
    </div>
  )
}
