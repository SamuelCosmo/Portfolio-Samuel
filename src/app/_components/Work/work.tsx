import { Fragment, useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from './work.module.scss'
import shapes from '../../../../public/svg/work/shapes.svg'
import SliderComponent from '@/shared/components/Slider/slider'
import shapes2 from '../../../../public/svg/hero/shapes_2.svg'
import { ComponentProps, expertises, ImageProps, Props } from './constants'

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
                          sizes='(max-width: 520px) 168px'
                        />
                      </div>
                      <button className={styles['button-domain']}>
                        <a href={item.domain} target='_blank' rel='noopener noreferrer'>
                          VISIT PAGE
                        </a>
                      </button>
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
            <div className={styles['laptop-container']}>
              <div className={styles['frame']}></div>
              <div className={styles['background']} />
              {expertises.map((item: Props, index: number) => {
                return (
                  <Image
                    src={item.image}
                    alt='image'
                    className={
                      styles['images'] + ' hide-mobile ' + ' ' + (selected === index ? styles['images--active'] : '')
                    }
                    key={'images-' + index}
                  />
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
