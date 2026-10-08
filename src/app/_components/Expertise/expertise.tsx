import styles from './expertise.module.scss'
import Image, { StaticImageData } from 'next/image'
import shapes from '../../../../public/svg/expertise/shapes.svg'
import saleshub from '../../../../public/svg/expertise/saleshub.png'
import kirana from '../../../../public/svg/expertise/kirana.svg'
import gps from '../../../../public/svg/expertise/gps.png'
import red from '../../../../public/svg/expertise/red.png'
import SliderComponent from '@/shared/components/Slider/slider'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

interface Job {
  image: StaticImageData
  job_title: string
  date: string
  title: string
  description: string[]
}

const expertises: Job[] = [
  {
    image: saleshub,
    job_title: 'Sales-Hub',
    date: 'January 2026 - June 2026',
    title: 'Front-end Developer',
    description: [
      'Developed and maintained commercial landing pages using React, Next.js, TypeScript, and SCSS for multiple client campaigns and products.',
      'Built reusable and modular UI components to improve scalability, maintainability, and development efficiency.',
      'Implemented dynamic enrollment workflows and subscription plans, enabling customers to request and manage products through responsive interfaces',
    ],
  },
  {
    image: kirana,
    job_title: 'Kirana Labs',
    date: 'April 2025 - October 2025',
    title: 'Fullstack Developer',
    description: [
      'Developed applications using React and React Native for healthcare management solutions.',
      'Built an internal management platform for doctors, patients, caregivers, appointments, medications, and treatment plans.',
      'Created a public-facing website to improve service visibility and patient engagement.',
    ],
  },
  {
    image: saleshub,
    job_title: 'Sales-Hub',
    date: 'October 2022 - November 2024',
    title: 'Front-end Developer',
    description: [
      'Developed and maintained a sales and user management platform using Angular, TypeScript, and SCSS.',
      'Migrated legacy projects to React and Next.js, improving code modularity and maintainability.',
      'Designed and developed responsive landing pages focused on user experience and conversion optimization.',
    ],
  },
  {
    image: gps,
    job_title: 'GPS Geologistic',
    date: 'October 2022 - November 2024',
    title: 'Fullstack Developer',
    description: [
      'Designed and implemented database structures using Node.js, Knex, and MySQL.',
      'Optimized complex SQL queries and backend processes to improve system performance.',
      'Developed scalable APIs and reusable modules using JavaScript and TypeScript.',
    ],
  },
  {
    image: red,
    job_title: 'Grupo Red',
    date: 'February 2020 - June 2020',
    title: 'Fullstack Developer',
    description: [
      'Developed and maintained dynamic web applications using Angular, JavaScript, and Node.js.',
      'Built reusable components and modular architectures to improve scalability.',
      'Enhanced UI responsiveness and overall user experience across multiple projects.',
    ],
  },
]

const SHAPES_CLASSES = [
  'shapes__second shapes__second--a',
  'shapes__second shapes__second--b',
  'shapes__third shapes__third--a',
  'shapes__third shapes__third--b',
]

export default function ExpertiseComponent() {
  return (
    <div className={styles.main}>
      <div className={styles.shapes}>
        {SHAPES_CLASSES.map((classes) => (
          <Image
            key={classes}
            src={shapes2}
            alt='shapes'
            className={classes
              .split(' ')
              .map((c) => styles[c])
              .join(' ') + ' hide-desktop hide-tablet'}
          />
        ))}
      </div>
      <Image src={shapes} alt='shapes' className={styles.shapes + ' hide-mobile'} />
      <div className={styles.body}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>Expertise</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles.slider}>
            <SliderComponent
              items={expertises.map((item, index) => (
                <div className={styles.information} key={'info-' + index}>
                  <div className={styles.option}>
                    <div className={styles['option__header']}>
                      <Image src={item.image} alt={item.job_title} className={styles['option__image']} />
                      <div className={styles['option__title-container']}>
                        <p className={styles.title}>{item.job_title}</p>
                        <span className={styles.date}>{item.date}</span>
                        <span className={styles.position}>{item.title}</span>
                      </div>
                    </div>
                    <div className={styles.description}>
                      {item.description.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
