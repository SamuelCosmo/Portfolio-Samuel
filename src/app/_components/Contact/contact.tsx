'use client'
import { useEffect, useMemo, useState } from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'
import email from '../../../../public/svg/contact/email.svg'
import phone from '../../../../public/svg/contact/phone.svg'
import location from '../../../../public/svg/contact/location.svg'
import download from '../../../../public/svg/contact/download.svg'
import { sendMessage } from '@/config/services'

interface Props {
  name: string
  email: string
  message: string
}

export default function ContactComponent() {
  const [info, setInfo] = useState<Props>({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [failed, setFailed] = useState<boolean>(false)
  const [showDownload, setShowDownload] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

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
    window.location.href = 'tel:+526862551906'
  }

  const handleMapsClick = () => {
    const mapsUrl = 'https://www.google.com/maps?q=mexico'
    window.open(mapsUrl, '_blank')
  }

  const sendInfoMessage = async () => {
    const canClick = !loading && !success && !failed
    if (info.name && info.email && info.message && canClick) {
      try {
        setLoading(true)
        await sendMessage(info.name, info.email, info.message)
        setLoading(false)
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 1000)
      } catch (e: any) {
        setLoading(false)
        setSuccess(false)
        setFailed(true)
        console.error(e)

        setTimeout(() => {
          setFailed(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    setDisableButton(loading || success || failed || info.name === '' || info.email === '' || info.message === '')
  }, [loading, success, failed, info])

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
                <label className={styles['body__left__body__row__inputs-container__title']}>
                  Full Name
                  <input
                    className={styles['input']}
                    type='text'
                    onChange={(event) => {
                      setInfo({ ...info, name: event.target.value.toUpperCase() })
                    }}
                    value={info.name}
                  />
                </label>
              </div>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>
                  Email
                  <input
                    className={styles['input']}
                    type='text'
                    onChange={(event) => {
                      setInfo({ ...info, email: event.target.value.toUpperCase() })
                    }}
                    value={info.email}
                  />
                </label>
              </div>
            </div>
            <div className={styles['body__left__body__row']}>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>
                  Message
                  <textarea
                    className={styles['text-area-input']}
                    onChange={(event) => {
                      setInfo({ ...info, message: event.target.value.toUpperCase() })
                    }}
                    value={info.message}
                  />
                </label>
              </div>
            </div>
            <div className={styles['body__left__body__button-container']}>
              <button
                className={styles['button'] + ' ' + (disableButton ? styles['disable-button'] : '')}
                onClick={(e: any) => {
                  e.preventDefault()
                  sendInfoMessage()
                }}
              >
                {loading ? (
                  <Image src={'/svg/loading.svg'} alt='loading' width={24} height={24} className={styles['loading']} />
                ) : success ? (
                  <Image
                    src={'/svg/check-mark.svg'}
                    alt='check-mark'
                    width={24}
                    height={24}
                    className={styles['check-mark']}
                  />
                ) : failed ? (
                  <Image src={'/svg/wrong.svg'} alt='wrong' width={24} height={24} className={styles['wrong']} />
                ) : (
                  'Submit'
                )}
              </button>
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
