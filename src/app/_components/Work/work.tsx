import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './work.module.scss'
import byop from '../../../../public/assets/work/byop-excess.png'
import byop_mobile from '../../../../public/assets/work/byop-excess-mobile.png'
import ssi from '../../../../public/assets/work/ssi-excess.png'
import ssi_mobile from '../../../../public/assets/work/ssi-excess-mobile.png'
import medicaid from '../../../../public/assets/work/medicaid-excess.png'
import medicaid_mobile from '../../../../public/assets/work/medicaid-excess-mobile.png'
import medical from '../../../../public/assets/work/medical-excess.png'
import medical_mobile from '../../../../public/assets/work/medical-excess-mobile.png'
import wic from '../../../../public/assets/work/wic-excess.png'
import wic_mobile from '../../../../public/assets/work/wic-excess-mobile.png'
import angel from '../../../../public/assets/work/angel-mobile.png'
import angel_mobile from '../../../../public/assets/work/angel-mobile-mobile.png'
import unlimited from '../../../../public/assets/work/boost-unlimited.png'
import unlimited_mobile from '../../../../public/assets/work/boost-unlimited-mobile.png'
import galaxy from '../../../../public/assets/work/boost-galaxy.png'
import galaxy_mobile from '../../../../public/assets/work/boost-galaxy-mobile.png'
import iphone from '../../../../public/assets/work/boost-iphone.png'
import iphone_mobile from '../../../../public/assets/work/boost-iphone-mobile.png'
import boost_byop from '../../../../public/assets/work/boost-byop.png'
import boost_byop_mobile from '../../../../public/assets/work/boost-byop-mobile.png'
import multilines from '../../../../public/assets/work/boost-multilines.png'
import multilines_mobile from '../../../../public/assets/work/boost-multilines-mobile.png'
import react from '../../../../public/svg/work/react.svg'
import sass from '../../../../public/svg/work/sass.svg'
import typescript from '../../../../public/svg/work/typescript.svg'
import shapes from '../../../../public/svg/work/shapes.svg'

interface ImageProps {
  image: StaticImageData
  alt: string
}

interface Props {
  web_title: string
  domain: string
  description: any
  image: StaticImageData
  image_mobile: StaticImageData
  technologies: ImageProps[]
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
    image_mobile: byop_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - SSI',
    domain: 'https://excess-ssi.1wireless.com',
    description: text,
    image: ssi,
    image_mobile: ssi_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Medicaid',
    domain: 'https://excess-medicaid.1wireless.com',
    description: text,
    image: medicaid,
    image_mobile: medicaid_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Medical',
    domain: 'https://excess-medical.1wireless.com',
    description: text,
    image: medical,
    image_mobile: medical_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Excess - Wic',
    domain: 'https://excess-wic.1wireless.com',
    description: text,
    image: wic,
    image_mobile: wic_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Angel Mobile',
    domain: 'https://www.getangelmobile.com',
    description: text,
    image: angel,
    image_mobile: angel_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Unlimited',
    domain: 'https://boostaffiliate.com/unlimited',
    description: text,
    image: unlimited,
    image_mobile: unlimited_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Galaxy',
    domain: 'https://boostaffiliate.com/access-galaxy',
    description: text,
    image: galaxy,
    image_mobile: galaxy_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Iphone',
    domain: 'https://boostaffiliate.com/access-iphone',
    description: text,
    image: iphone,
    image_mobile: iphone_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Byop',
    domain: 'https://boostaffiliate.com/bring-your-device',
    description: text,
    image: boost_byop,
    image_mobile: boost_byop_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
  {
    web_title: 'Boost Affiliate - Multilines',
    domain: 'https://boostaffiliate.com/multilines',
    description: text,
    image: multilines,
    image_mobile: multilines_mobile,
    technologies: [
      { image: react, alt: 'react' },
      { image: sass, alt: 'sass' },
      { image: typescript, alt: 'typescript' },
    ],
  },
]

export default function WorkComponent() {
  const [selected, setSelected] = useState<number>(0)
  const [domainSelected, setDomainSelected] = useState<string>(expertises[0].domain)
  const [technologiesAssets, setTechnologiesAssets] = useState<ImageProps[]>(expertises[0].technologies)

  return (
    <div className={styles['main']}>
      <Image src={shapes} alt='shapes' className={styles['shapes--1'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--2'] + ' hide-mobile'} />
      <Image src={shapes} alt='shapes' className={styles['shapes--3'] + ' hide-mobile'} />
      <div className={styles['body']}>
        <div className={styles['body__title-container']}>
          <h2 className={styles['body__title-container__title']}>My Work</h2>
        </div>
        <div className={styles['information-container']}>
          <div className={styles['menu']}>
            {expertises.map((item: Props, index: number) => {
              return (
                <>
                  {index !== 0 && <div className={styles['division'] + ' hide-tablet hide-desktop'}></div>}
                  <div
                    className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                    onClick={() => {
                      setSelected(index)
                      setDomainSelected(item.domain)
                      setTechnologiesAssets(item.technologies)
                    }}
                    key={'menu-option-' + index}
                  >
                    <p className={styles['job-title'] + ' ' + (selected === index ? styles['job-title--active'] : '')}>
                      {item.web_title}
                    </p>
                  </div>
                </>
              )
            })}
          </div>
          <div className={styles['images-container']}>
            <div className={styles['information'] + ' hide-mobile'}>
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
              <div className={styles['frame']}></div>
              <div className={styles['background'] + ' hide-mobile'} />
              {expertises.map((item: Props, index: number) => {
                return (
                  <>
                    <Image
                      src={item.image}
                      alt='image'
                      className={
                        styles['images'] + ' hide-mobile ' + ' ' + (selected === index ? styles['images--active'] : '')
                      }
                      key={index}
                    />
                    <Image
                      src={item.image_mobile}
                      alt='image'
                      className={
                        styles['images'] +
                        ' hide-desktop hide-tablet ' +
                        ' ' +
                        (selected === index ? styles['images--active'] : '')
                      }
                      key={index}
                    />
                  </>
                )
              })}
            </div>
            <div className={styles['domain-container']}>
              <p className={styles['domain']}>
                Domain:{' '}
                <a href={domainSelected} target='_blank' rel='noopener noreferrer'>
                  {domainSelected}
                </a>
              </p>
              <p className={styles['technologies-container']}>
                Technologies:{' '}
                {technologiesAssets.map((item: ImageProps, index: number) => {
                  return <Image src={item.image} alt={item.alt} key={index} />
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
