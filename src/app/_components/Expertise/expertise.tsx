import { Fragment, useState } from 'react'
import styles from './expertise.module.scss'
import Image from 'next/image'
import shapes from '../../../../public/svg/expertise/shapes.svg'
import SliderComponent from '@/shared/components/Slider/slider'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

interface Props {
  job_title: string
  title: string
  description: any
}

const salesHubText = (
  <>
    Developed and maintained commercial landing pages using React, Next.js, TypeScript, and SCSS for multiple client
    campaigns and products.
    <br />
    <br />
    Built reusable and modular UI components to improve scalability, maintainability, and development efficiency.
    <br />
    <br />
    Implemented dynamic enrollment workflows and subscription plans, enabling customers to request and manage products
    through responsive interfaces
  </>
)

const kiranaText = (
  <>
    Developed applications using React and React Native for healthcare management solutions.
    <br />
    <br />
    Built an internal management platform for doctors, patients, caregivers, appointments, medications, and treatment
    plans.
    <br />
    <br />
    Created a public-facing website to improve service visibility and patient engagement.
  </>
)

const salesText = (
  <>
    Developed and maintained a sales and user management platform using Angular, TypeScript, and SCSS.
    <br />
    <br />
    Migrated legacy projects to React and Next.js, improving code modularity and maintainability.
    <br />
    <br />
    Designed and developed responsive landing pages focused on user experience and conversion optimization.
  </>
)

const gpsText = (
  <>
    Designed and implemented database structures using Node.js, Knex, and MySQL.
    <br />
    <br />
    Optimized complex SQL queries and backend processes to improve system performance.
    <br />
    <br />
    Developed scalable APIs and reusable modules using JavaScript and TypeScript.
  </>
)

const redText = (
  <>
    Developed and maintained dynamic web applications using Angular, JavaScript, and Node.js.
    <br />
    <br />
    Built reusable components and modular architectures to improve scalability.
    <br />
    <br />
    Enhanced UI responsiveness and overall user experience across multiple projects.
  </>
)

const expertises: Props[] = [
  {
    job_title: 'Sales-Hub',
    title: 'Front-end Developer (January 2026 - June 2024)',
    description: salesHubText,
  },
  {
    job_title: 'Kirana Labs',
    title: 'Fullstack Developer (April 2025- October2025)',
    description: kiranaText,
  },
  {
    job_title: 'Sales-Hub',
    title: 'Front-end Developer (October 2022- November 2024)',
    description: salesText,
  },
  {
    job_title: 'GPS Geologistic',
    title: 'Fullstack Developer (September 2021- October 2022)',
    description: gpsText,
  },
  { job_title: 'Grupo Red', title: 'Fullstack Developer (February 2020- June 2020)', description: redText },
]

export default function ExpertiseComponent() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <div className={styles['main']}>
      <div className={styles.shapes}>
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
      <Image src={shapes} alt='shapes' className={styles['shapes'] + ' hide-mobile'} />
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>Expertise</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['slider'] + ' hide-desktop hide-tablet'}>
            <SliderComponent
              childrens={[
                ...expertises.map((item: Props, index: number) => {
                  return (
                    <div className={styles['information']} key={'info-' + index}>
                      <div
                        className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                        key={'information-option-' + index}
                      >
                        <p className={styles['title']}>
                          {item.job_title}
                          <br />
                          {item.title}
                        </p>
                        <p className={styles['description']}>{item.description}</p>
                      </div>
                    </div>
                  )
                }),
              ]}
            />
          </div>
          <div className={styles['menu'] + ' hide-mobile'}>
            {expertises.map((item: Props, index: number) => {
              return (
                <Fragment key={'menu-option-' + index}>
                  {index !== 0 && <div className={styles['division'] + ' hide-tablet hide-desktop'}></div>}
                  <div
                    className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                    onClick={() => {
                      setSelected(index)
                    }}
                  >
                    <p className={styles['job-title'] + ' ' + (selected === index ? styles['job-title--active'] : '')}>
                      {item.job_title}
                    </p>
                  </div>
                </Fragment>
              )
            })}
          </div>
          <div className={styles['information'] + ' hide-mobile'}>
            {expertises.map((item: Props, index: number) => {
              return (
                <div
                  className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                  key={'information-option-' + index}
                >
                  <p className={styles['title']}>{item.title}</p>
                  <p className={styles['description']}>{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
