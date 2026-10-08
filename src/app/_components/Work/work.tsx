import Image, { StaticImageData } from 'next/image'
import styles from './work.module.scss'
import shapes from '../../../../public/svg/work/shapes.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import work_1 from '../../../../public/svg/work/work_1.webp'
import work_2 from '../../../../public/svg/work/work_2.webp'
import work_3 from '../../../../public/svg/work/work_3.webp'
import work_1_mobile from '../../../../public/svg/work/work_1_mobile.webp'
import work_2_mobile from '../../../../public/svg/work/work_2_mobile.webp'
import work_3_mobile from '../../../../public/svg/work/work_3_mobile.webp'

interface Project {
  title: string
  description: string
  technologies: string
  domain: string
  image: StaticImageData
  imageMobile: StaticImageData
}

const projects: Project[] = [
  {
    title: 'TRUMP MOBILE',
    description:
      'Delivered a responsive, enterprise-grade landing page for a telecom sales platform using React, TypeScript, and SASS. Implemented a full enrollment workflow for US wireless line sales with real-time API availability checks across states, secure customer data capture, purchase tracking, and recurring billing integration. Focused on cross-device performance, conversion optimization, and maintaining data integrity throughout the customer journey.',
    technologies: 'React • SCSS • TypeScript • Responsive Design • Git',
    domain: 'https://www.gotrumpmobile.com/',
    image: work_1,
    imageMobile: work_1_mobile,
  },
  {
    title: 'KINGS AUTO REFINISH',
    description:
      'Designed and developed a responsive landing page for a collision repair business using React, TypeScript, and SASS. Built key components such as a repair gallery, service listings, and contact sections. Implemented an image-enabled lead submission system to send repair inquiries directly to the business, improving customer engagement and streamlining service request workflows.',
    technologies: 'React • SCSS • TypeScript • Responsive Design • Github',
    domain: 'https://www.kingsautorefinish.com/',
    image: work_2,
    imageMobile: work_2_mobile,
  },
  {
    title: 'NOLIA HEALTH',
    description:
      'Enhanced the digital experience for a healthcare platform by refining page components and optimizing the appointment enrollment flow. Delivered a responsive scheduling solution that enables patients and family members to request consultations with multiple providers, leveraging calendar-based availability, insurance type selection, and state-specific provider matching. The result is a polished, recruiter-ready presentation of a high-impact feature set focused on user conversion, accessibility, and operational efficiency.',
    technologies: 'Angular • CSS • JavaScript • Responsive Design • Github',
    domain: 'https://www.noliahealth.com/',
    image: work_3,
    imageMobile: work_3_mobile,
  },
]

const SHAPES_CLASSES = [
  'shapes__second shapes__second--a',
  'shapes__second shapes__second--b',
  'shapes__third shapes__third--a',
  'shapes__third shapes__third--b',
]

export default function WorkComponent() {
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
      <Image src={shapes} alt='shapes' className={styles['shapes--1'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--2'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--3'] + ' hide-mobile'} />
      <div className={styles.body}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>My Work</h2>
        </div>
        <div className={styles['information-container']}>
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={
                styles['information-container__item'] +
                ' ' +
                (index % 2 === 1 ? styles['information-container__item--reverse'] : '')
              }
            >
              <Image src={project.image} alt={project.title} className='hide-mobile' sizes='50vw' />
              <Image
                src={project.imageMobile}
                alt={project.title}
                className='hide-desktop hide-tablet'
                sizes='100vw'
              />
              <div className={styles['information-container__item__information']}>
                <p className={styles['information-container__item__information__title']}>{project.title}</p>
                <p className={styles['information-container__item__information__description']}>
                  {project.description}
                </p>
                <p className={styles['information-container__item__information__technologies-title']}>
                  Technologies:
                </p>
                <span className={styles['information-container__item__information__technologies']}>
                  {project.technologies}
                </span>
                <p className={styles['information-container__item__information__domain-title']}>Domain Url</p>
                <a
                  href={project.domain}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles['information-container__item__information__domain']}
                >
                  {project.domain}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
