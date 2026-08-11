import { Fragment, useState } from 'react'
import styles from './expertise.module.scss'
import Image from 'next/image'
import shapes from '../../../../public/svg/expertise/shapes.svg'
import saleshub from '../../../../public/svg/expertise/saleshub.png'
import kirana from '../../../../public/svg/expertise/kirana.svg'
import gps from '../../../../public/svg/expertise/gps.png'
import red from '@/../../public/svg/expertise/red.png'
import SliderComponent from '@/shared/components/Slider/slider'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

interface Props {
  image: any
  job_title: string
  date: string
  title: string
  description: any
}

const salesHubText = (
  <>
    Developed and maintained commercial landing pages using React, Next.js,
    TypeScript, and SCSS for multiple client campaigns and products.
    <br />
    <br />
    Built reusable and modular UI components to improve scalability,
    maintainability, and development efficiency.
    <br />
    <br />
    Implemented dynamic enrollment workflows and subscription plans, enabling
    customers to request and manage products through responsive interfaces
  </>
)

const kiranaText = (
  <>
    Developed applications using React and React Native for healthcare
    management solutions.
    <br />
    <br />
    Built an internal management platform for doctors, patients, caregivers,
    appointments, medications, and treatment plans.
    <br />
    <br />
    Created a public-facing website to improve service visibility and patient
    engagement.
  </>
)

const salesText = (
  <>
    Developed and maintained a sales and user management platform using Angular,
    TypeScript, and SCSS.
    <br />
    <br />
    Migrated legacy projects to React and Next.js, improving code modularity and
    maintainability.
    <br />
    <br />
    Designed and developed responsive landing pages focused on user experience
    and conversion optimization.
  </>
)

const gpsText = (
  <>
    Designed and implemented database structures using Node.js, Knex, and MySQL.
    <br />
    <br />
    Optimized complex SQL queries and backend processes to improve system
    performance.
    <br />
    <br />
    Developed scalable APIs and reusable modules using JavaScript and
    TypeScript.
  </>
)

const redText = (
  <>
    Developed and maintained dynamic web applications using Angular, JavaScript,
    and Node.js.
    <br />
    <br />
    Built reusable components and modular architectures to improve scalability.
    <br />
    <br />
    Enhanced UI responsiveness and overall user experience across multiple
    projects.
  </>
)

const expertises: Props[] = [
  {
    image: saleshub,
    job_title: 'Sales-Hub',
    date: 'January 2026 - June 2026',
    title: 'Front-end Developer',
    description: salesHubText,
  },
  {
    image: kirana,
    job_title: 'Kirana Labs',
    date: 'April 2025 - October 2025',
    title: 'Fullstack Developer',
    description: kiranaText,
  },
  {
    image: saleshub,
    job_title: 'Sales-Hub',
    date: 'October 2022 - November 2024',
    title: 'Front-end Developer',
    description: salesText,
  },
  {
    image: gps,
    job_title: 'GPS Geologistic',
    date: 'October 2022 - November 2024',
    title: 'Fullstack Developer',
    description: gpsText,
  },
  {
    image: red,
    job_title: 'Grupo Red',
    date: 'February 2020 - June 2020',
    title: 'Fullstack Developer',
    description: redText,
  },
]

export default function ExpertiseComponent() {
  return (
    <div className={styles['main']}>
      <div className={styles.shapes}>
        <Image
          src={shapes2}
          alt='shapes'
          className={
            styles['shapes__second'] +
            ' ' +
            styles['shapes__second--a'] +
            ' hide-desktop hide-tablet'
          }
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={
            styles['shapes__second'] +
            ' ' +
            styles['shapes__second--b'] +
            ' hide-desktop hide-tablet'
          }
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={
            styles['shapes__third'] +
            ' ' +
            styles['shapes__third--a'] +
            ' hide-desktop hide-tablet'
          }
        />
        <Image
          src={shapes2}
          alt='shapes'
          className={
            styles['shapes__third'] +
            ' ' +
            styles['shapes__third--b'] +
            ' hide-desktop hide-tablet'
          }
        />
      </div>
      <Image
        src={shapes}
        alt='shapes'
        className={styles['shapes'] + ' hide-mobile'}
      />
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>Expertise</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['slider']}>
            <SliderComponent
              childrens={[
                ...expertises.map((item: Props, index: number) => {
                  return (
                    <div
                      className={styles['information']}
                      key={'info-' + index}
                    >
                      <div
                        className={styles['option']}
                        key={'information-option-' + index}
                      >
                        <div className={styles['option__header']}>
                          <Image
                            src={item.image}
                            alt={item.job_title}
                            className={styles['option__image']}
                          />
                          <div className={styles['option__title-container']}>
                            <p className={styles['title']}>{item.job_title}</p>
                            <span className={styles['date']}>{item.date}</span>
                            <span className={styles['position']}>
                              {item.title}
                            </span>
                          </div>
                        </div>
                        <p className={styles['description']}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                }),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
