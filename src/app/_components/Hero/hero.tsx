import styles from './hero.module.scss'
import Image from 'next/image'
import shapes1 from '../../../../public/svg/hero/shapes_1.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

export default function HeroComponent() {
    return <div className={styles.main}>
        <div className={styles.background}>
            <Image src={shapes1} alt='shapes' className={styles['background__first']} />
            <Image src={shapes2} alt='shapes' className={styles['background__second']} />
        </div>
        <div className={styles.body}>
            <p className={styles.portafolio}>portafolio</p>
            <h1 className={styles.title}>Samuel Gutierrez</h1>
            <h2 className={styles.subtitle}>I build things for the web<span>_{'>'}</span></h2>
        </div>
    </div>
}