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

const salesText = (
  <>
    Developed a sales and user management system using Angular, TypeScript, and SCSS in the first year.
    <br />
    In the second year, migrated multiple projects to React and Next.js with TypeScript, improving efficiency and
    modularity.
    <br />
    Implemented automated tests with Cypress to ensure proper functionality across systems.
    <br />
    Optimized animations and collaborated with design and backend teams to maintain visual and functional consistency.
  </>
)

const gpsText = (
  <>
    Designed and developed robust database architectures using Node, Knex, and MySQL, ensuring scalability, data
    integrity, and high performance for various internal systems.
    <br />
    Created and optimized complex SQL queries to handle large datasets, enabling efficient data retrieval and real-time
    reporting for the warehouse and vehicle management systems.
    <br />
    Integrated backend services with front-end applications to ensure smooth communication between the server and the
    user interface, improving overall system functionality
  </>
)

const redText = (
  <>
    Developed dynamic web pages using Angular, JavaScript, and Node.js, focusing on both front-end and back-end
    integration.
  </>
)

const expertises: Props[] = [
  {
    job_title: 'N3 Devices (Sales-Hub)',
    title: 'Front-end Developer (2022-2024)',
    description: salesText,
  },
  {
    job_title: 'GPS Geologistic',
    title: 'Fullstack Developer (2021-2022)',
    description: gpsText,
  },
  { job_title: 'Grupo Red', title: 'Fullstack Developer (2019-2019)', description: redText },
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
