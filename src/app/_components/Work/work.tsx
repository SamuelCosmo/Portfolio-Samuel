import { Fragment, useEffect, useState } from 'react'
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
import SliderComponent from '@/shared/components/Slider/slider'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'

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

interface ComponentProps {
  showModal: (value: boolean) => void
  changeModalContent: (value: any) => void
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

export default function WorkComponent({ showModal, changeModalContent }: ComponentProps) {
  const [selected, setSelected] = useState<number>(0)
  const [domainSelected, setDomainSelected] = useState<string>(expertises[0].domain)
  const [technologiesAssets, setTechnologiesAssets] = useState<ImageProps[]>(expertises[0].technologies)

  useEffect(() => {
    if (changeModalContent)
      changeModalContent(
        <>
          <Image src={expertises[0].image_mobile} alt='image' className={styles['modal']} />
        </>
      )
  }, [])

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
          <div className={styles['slider'] + ' hide-desktop hide-tablet'}>
            <SliderComponent
              childrens={[
                ...expertises.map((item: Props, index: number) => {
                  return (
                    <div className={styles['images-container']} key={'container-' + index}>
                      <p className={styles['job-title']}>{item.web_title}</p>
                      <div className={styles['domain-container']}>
                        <p className={styles['domain']}>
                          Domain:{' '}
                          <a href={item.domain} target='_blank' rel='noopener noreferrer'>
                            {item.domain}
                          </a>
                        </p>
                      </div>
                      <div className={styles['laptop-container']}>
                        <div className={styles['frame']}></div>
                        <Image
                          src={item.image_mobile}
                          alt='image'
                          className={styles['images']}
                          onClick={() => {
                            showModal(true)
                          }}
                          key={index}
                        />
                      </div>
                    </div>
                  )
                }),
              ]}
              setIndex={(value: number) => {
                if (selected !== value) {
                  setSelected(value)
                  setDomainSelected(expertises[value].domain)
                  setTechnologiesAssets(expertises[value].technologies)
                  changeModalContent(
                    <>
                      <Image src={expertises[value].image_mobile} alt='image' className={styles['modal']} />
                    </>
                  )
                }
              }}
            />
          </div>
          <div className={styles['menu'] + ' hide-mobile'}>
            {expertises.map((item: Props, index: number) => {
              return (
                <Fragment key={'menu-option-' + index}>
                  <div
                    className={styles['option'] + ' ' + (selected === index ? styles['option--active'] : '')}
                    onClick={() => {
                      setSelected(index)
                      setDomainSelected(item.domain)
                      setTechnologiesAssets(item.technologies)
                      changeModalContent(
                        <>
                          <Image src={item.image_mobile} alt='image' className={styles['modal']} />
                        </>
                      )
                    }}
                  >
                    <p className={styles['job-title'] + ' ' + (selected === index ? styles['job-title--active'] : '')}>
                      {item.web_title}
                    </p>
                  </div>
                </Fragment>
              )
            })}
          </div>
          <div className={styles['images-container'] + ' hide-mobile'}>
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
              <div className={styles['frame']}></div>
              <div className={styles['background']} />
              {expertises.map((item: Props, index: number) => {
                return (
                  <Fragment key={'images-' + index}>
                    <Image
                      src={item.image}
                      alt='image'
                      className={
                        styles['images'] + ' hide-mobile ' + ' ' + (selected === index ? styles['images--active'] : '')
                      }
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
                      onClick={() => {
                        showModal(true)
                      }}
                      key={index}
                    />
                  </Fragment>
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
                  return <Image src={item.image} alt={item.alt} key={'technologies-' + index} />
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
