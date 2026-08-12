import Image from 'next/image'
import styles from './work.module.scss'
import shapes from '../../../../public/svg/work/shapes.svg'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import work_1 from '../../../../public/svg/work/work_1.png'
import work_2 from '../../../../public/svg/work/work_2.png'
import work_3 from '../../../../public/svg/work/work_3.png'
import work_1_mobile from '../../../../public/svg/work/work_1_mobile.png'
import work_2_mobile from '../../../../public/svg/work/work_2_mobile.png'
import work_3_mobile from '../../../../public/svg/work/work_3_mobile.png'

export default function WorkComponent() {
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
      <Image src={shapes} alt='shapes' className={styles['shapes--1'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--2'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--3'] + ' hide-mobile'} />
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>My Work</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['information-container__item']}>
            <Image src={work_1} alt='Work 1' className={'hide-mobile'} />
            <Image src={work_1_mobile} alt='Work 1' className={'hide-desktop hide-tablet'} />
            <div className={styles['information-container__item__information']}>
              <p className={styles['information-container__item__information__title']}>TRUMP MOBILE</p>
              <p className={styles['information-container__item__information__description']}>
                Delivered a responsive, enterprise-grade landing page for a telecom sales platform using React,
                TypeScript, and SASS. Implemented a full enrollment workflow for US wireless line sales with real-time
                API availability checks across states, secure customer data capture, purchase tracking, and recurring
                billing integration. Focused on cross-device performance, conversion optimization, and maintaining data
                integrity throughout the customer journey.
              </p>
              <p className={styles['information-container__item__information__technologies-title']}>Technologies:</p>
              <span className={styles['information-container__item__information__technologies']}>
                React • SCSS • TypeScript • Responsive Design • Git
              </span>
              <p className={styles['information-container__item__information__domain-title']}>Domain Url</p>
              <a
                href='https://www.gotrumpmobile.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles['information-container__item__information__domain']}
              >
                https://www.gotrumpmobile.com/
              </a>
            </div>
          </div>
          <div className={styles['information-container__item']}>
            <Image src={work_2_mobile} alt='Work 2' className={'hide-desktop hide-tablet'} />
            <div className={styles['information-container__item__information']}>
              <p className={styles['information-container__item__information__title']}>KINGS AUTO REFINISH</p>
              <p className={styles['information-container__item__information__description']}>
                Designed and developed a responsive landing page for a collision repair business using React,
                TypeScript, and SASS. Built key components such as a repair gallery, service listings, and contact
                sections. Implemented an image-enabled lead submission system to send repair inquiries directly to the
                business, improving customer engagement and streamlining service request workflows.
              </p>
              <p className={styles['information-container__item__information__technologies-title']}>Technologies:</p>
              <span className={styles['information-container__item__information__technologies']}>
                React • SCSS • TypeScript • Responsive Design • Github
              </span>
              <p className={styles['information-container__item__information__domain-title']}>Domain Url</p>
              <a
                href='https://www.kingsautorefinish.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles['information-container__item__information__domain']}
              >
                https://www.kingsautorefinish.com/
              </a>
            </div>
            <Image src={work_2} alt='Work 2' className={'hide-mobile'} />
          </div>
          <div className={styles['information-container__item']}>
            <Image src={work_3} alt='Work 3' className={'hide-mobile'} />
            <Image src={work_3_mobile} alt='Work 3' className={'hide-desktop hide-tablet'} />
            <div className={styles['information-container__item__information']}>
              <p className={styles['information-container__item__information__title']}>NOLIA HEALTH</p>
              <p className={styles['information-container__item__information__description']}>
                Enhanced the digital experience for a healthcare platform by refining page components and optimizing the
                appointment enrollment flow. Delivered a responsive scheduling solution that enables patients and family
                members to request consultations with multiple providers, leveraging calendar-based availability,
                insurance type selection, and state-specific provider matching. The result is a polished,
                recruiter-ready presentation of a high-impact feature set focused on user conversion, accessibility, and
                operational efficiency.
              </p>
              <p className={styles['information-container__item__information__technologies-title']}>Technologies:</p>
              <span className={styles['information-container__item__information__technologies']}>
                Angular • CSS • JavaScript • Responsive Design • Github
              </span>
              <p className={styles['information-container__item__information__domain-title']}>Domain Url</p>
              <a
                href='https://www.noliahealth.com/'
                target='_blank'
                rel='noopener noreferrer'
                className={styles['information-container__item__information__domain']}
              >
                https://www.noliahealth.com/
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
