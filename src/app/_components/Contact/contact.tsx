'use client'
import { LegacyRef, useEffect, useState } from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'
import email from '../../../../public/svg/contact/email.svg'
import phone from '../../../../public/svg/contact/phone.svg'
import location from '../../../../public/svg/contact/location.svg'
import download from '../../../../public/svg/contact/download.svg'

export default function ContactComponent() {
  const [showDownload, setShowDownload] = useState(false)

  const handleDownload = () => {
    const pdfUrl = '/files/resume.pdf'
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = 'resume.pdf'
    link.click()
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:link_1095@hotmail.com'
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890' // Replace with your phone number
  }

  const handleMapsClick = () => {
    const mapsUrl = 'https://www.google.com/maps?q=mexico' // Latitude and longitude for Mexico
    window.open(mapsUrl, '_blank') // Opens in a new tab
  }

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles['body__left']}>
          <div className={styles['body__left__header']}>
            <span className={styles['body__left__header__title']}>Contact me</span>
          </div>
          <div className={styles['body__left__body']}>
            <div className={styles['body__left__body__row']}>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>Full Name</label>
                <input className={styles['input']} type='text' />
              </div>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>Email</label>
                <input className={styles['input']} type='text' />
              </div>
            </div>
            <div className={styles['body__left__body__row']}>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>Message</label>
                <textarea className={styles['text-area-input']} />
              </div>
            </div>
            <div className={styles['body__left__body__button-container']}>
              <button className={styles['button']}>Submit</button>
            </div>
            <div className={styles['main__footer']}>
              <div
                className={styles['main__footer__container']}
                onClick={() => {
                  handleEmailClick()
                }}
              >
                <Image alt='icon' src={email} />
                <span>link_1095@hotmail.com</span>
              </div>
              <div
                className={styles['main__footer__container']}
                onClick={() => {
                  handlePhoneClick()
                }}
              >
                <Image alt='icon' src={phone} />
                <span>+52 686 255-1906</span>
              </div>
              <div
                className={styles['main__footer__container']}
                onClick={() => {
                  handleMapsClick()
                }}
              >
                <Image alt='icon' src={location} />
                <span>Mexico</span>
              </div>
              <div
                className={styles['main__footer__container'] + ' hide-desktop hide-tablet'}
                onClick={() => {
                  handleDownload()
                }}
              >
                <Image alt='icon' src={download} />
                <span>Download Resume</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['body__right'] + ' hide-mobile'}>
          <div
            className={styles['body__right__cv-container']}
            onClick={() => {
              handleDownload()
            }}
            onMouseEnter={() => {
              setShowDownload(true)
            }}
            onMouseLeave={() => {
              setShowDownload(false)
            }}
          >
            <Image
              alt='cv'
              width={595}
              height={842}
              src={'/assets/cv.webp'}
              className={styles['body__right__cv'] + ' ' + (showDownload ? styles['body__right__cv--active'] : '')}
            />
            {showDownload && <p className={styles['download']}>Download PDF</p>}
          </div>
          <Image
            alt='cv'
            width={595}
            height={842}
            src={'/assets/background_cv.webp'}
            className={styles['body__right__background']}
          />
        </div>
      </div>
    </div>
  )
}
