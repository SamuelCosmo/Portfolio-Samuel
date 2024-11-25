import { useState } from 'react'
import styles from './expertise.module.scss'
import Image from 'next/image'
import shapes from '../../../../public/svg/expertise/shapes.svg'

interface Props {
  job_title: any
  title: string
  description: any
}

const text = (
  <>
    In my current role, I am focused on developing the back-end architecture using Node.js, Express, and Knex. This
    includes designing and implementing new database schemas, creating and optimizing tables, and developing
    comprehensive services to support the application&apos;s functionality. My approach ensures scalable, secure, and
    efficient data management.
    <br />
    <br />
    On the front-end, I employ a variety of frameworks to construct dynamic and responsive user interfaces across
    multiple projects. This involves not only coding the essential functionalities but also meticulously crafting styles
    and incorporating animations to enhance visual appeal and user interaction. My goal is to deliver a seamless and
    engaging user experience that meets the highest standards of performance and design.
    <br />
    <br />
    Through this work, I consistently adhere to best practices in software development, ensuring code quality,
    maintainability, and adaptability. I collaborate closely with cross-functional teams to integrate front-end and
    back-end components seamlessly, facilitating smooth project workflows and achieving our collective objectives.
    Additionally, I stay abreast of emerging technologies and industry trends to continuously improve my skills and
    contribute innovative solutions to the projects I undertake.
  </>
)

const expertises: Props[] = [
  {
    job_title: (
      <>
        N3 Devices
        <br />
        (Sales-Hub)
      </>
    ),
    title: 'Fullstack Developer',
    description: text,
  },
  {
    job_title: 'GPS Geologistic',
    title: 'Fullstack Developer',
    description: text,
  },
  { job_title: 'Grupo Red', title: 'Fullstack Developer', description: text },
]

export default function ExpertiseComponent() {
  const [selected, setSelected] = useState<number>(0)

  return (
    <div className={styles['main']}>
      <Image src={shapes} alt='shapes' className={styles['shapes'] + ' hide-mobile'} />
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>Expertise</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['menu']}>
            {expertises.map((item: Props, index: number) => {
              return (
                <div
                  className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                  onClick={() => {
                    setSelected(index)
                  }}
                  key={'menu-option-' + index}
                >
                  <p className={styles['job-title'] + ' ' + (selected === index ? styles['job-title--active'] : '')}>
                    {item.job_title}
                  </p>
                </div>
              )
            })}
          </div>
          <div className={styles['information']}>
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
