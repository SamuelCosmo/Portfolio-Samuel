import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './work.module.scss'
import laptop from '../../../../public/assets/work/laptop.webp'
import byop from '../../../../public/assets/work/byop-excess.png'
import ssi from '../../../../public/assets/work/ssi-excess.png'
import medicaid from '../../../../public/assets/work/medicaid-excess.png'
import medical from '../../../../public/assets/work/medical-excess.png'
import wic from '../../../../public/assets/work/wic-excess.png'
import angel from '../../../../public/assets/work/angel-mobile.png'
import unlimited from '../../../../public/assets/work/boost-unlimited.png'

interface Props {
  web_title: string
  domain: string
  description: any
  image: StaticImageData
}

const text = (
  <>
    I was in charge of the front-end part, specifically replicating the designs from the marketing department.
    <br />
    <br />
    Additionally, I was responsible for enhancing the structure of data collection during the enrollment process,
    through which leads were generated. This involved improving validations, functionalities, and data storage in the
    browser.
  </>
)

const expertises: Props[] = [
  {
    web_title: 'Excess - Byop',
    domain: 'https://excess-byop.1wireless.com',
    description: text,
    image: byop,
  },
  {
    web_title: 'Excess - SSI',
    domain: 'https://excess-ssi.1wireless.com',
    description: text,
    image: ssi,
  },
  {
    web_title: 'Excess - Medicaid',
    domain: 'https://excess-medicaid.1wireless.com',
    description: text,
    image: medicaid,
  },
  {
    web_title: 'Excess - Medical',
    domain: 'https://excess-medical.1wireless.com',
    description: text,
    image: medical,
  },
  { web_title: 'Excess - Wic', domain: 'https://excess-wic.1wireless.com', description: text, image: wic },
  { web_title: 'Angel Mobile', domain: 'https://www.getangelmobile.com', description: text, image: angel },
  {
    web_title: 'Boost Affiliate - Unlimited',
    domain: 'https://boostaffiliate.com/unlimited',
    description: text,
    image: unlimited,
  },
]

export default function WorkComponent() {
  const [selected, setSelected] = useState<number>(0)
  const [domainSelected, setDomainSelected] = useState<string>(expertises[0].domain)

  return (
    <div className={styles['main']}>
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>
            <span>4. </span>My Work
          </h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['menu']}>
            {expertises.map((item: Props, index: number) => {
              return (
                <div
                  className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                  onClick={() => {
                    setSelected(index)
                    setDomainSelected(item.domain)
                  }}
                  key={'menu-option-' + index}
                >
                  <p className={styles['job-title'] + ' ' + (selected === index ? styles['job-title--active'] : '')}>
                    {item.web_title}
                  </p>
                </div>
              )
            })}
          </div>
          <div className={styles['images-container']}>
            <div className={styles['information']}>
              {expertises.map((item: Props, index: number) => {
                return (
                  <div
                    className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                    key={'information-option-' + index}
                  >
                    <p className={styles['description']}>{item.description}</p>
                  </div>
                )
              })}
            </div>
            <div className={styles['laptop-container']}>
              <Image src={laptop} alt='Laptop' className={styles['laptop']} />
              <div className={styles['background']} />
              {expertises.map((item: Props, index: number) => {
                return (
                  <Image
                    src={item.image}
                    alt='image'
                    className={styles['images'] + ' ' + (selected === index ? styles['images--active'] : '')}
                    key={index}
                  />
                )
              })}
            </div>
            <p className={styles['domain']}>
              Domain:{' '}
              <a href={domainSelected} target='_blank' rel='noopener noreferrer'>
                {domainSelected}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
