'use client'
import { useState } from 'react'
import styles from './contact.module.scss'
import Image from 'next/image'
import emailIcon from '../../../../public/svg/contact/email.svg'
import phoneIcon from '../../../../public/svg/contact/phone.svg'
import locationIcon from '../../../../public/svg/contact/location.svg'
import downloadIcon from '../../../../public/svg/contact/download.svg'
import { sendMessage } from '@/config/services'

interface FormData {
  name: string
  email: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'failed'

export default function ContactComponent() {
  const [info, setInfo] = useState<FormData>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [showDownload, setShowDownload] = useState(false)

  const isIncomplete = !info.name || !info.email || !info.message
  const disableButton = status !== 'idle' || isIncomplete

  const updateField = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setInfo((prev) => ({ ...prev, [field]: event.target.value }))

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/files/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
  }

  const sendInfoMessage = async () => {
    if (disableButton) return
    try {
      setStatus('loading')
      await sendMessage(info.name, info.email, info.message)
      setStatus('success')
    } catch (e) {
      console.error(e)
      setStatus('failed')
    } finally {
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const contactLinks = [
    { href: 'mailto:sammy10203024@gmail.com', icon: emailIcon, label: 'sammy10203024@gmail.com' },
    { href: 'tel:+526862551906', icon: phoneIcon, label: '+52 686 255-1906' },
    {
      href: 'https://www.google.com/maps?q=mexico',
      icon: locationIcon,
      label: 'Mexico',
      external: true,
    },
  ]

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
                    className={styles.input}
                    type='text'
                    autoComplete='name'
                    onChange={updateField('name')}
                    value={info.name}
                  />
                </label>
              </div>
              <div className={styles['body__left__body__row__inputs-container']}>
                <label className={styles['body__left__body__row__inputs-container__title']}>
                  Email
                  <input
                    className={styles.input}
                    type='email'
                    autoComplete='email'
                    onChange={updateField('email')}
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
                    onChange={updateField('message')}
                    value={info.message}
                  />
                </label>
              </div>
            </div>
            <div className={styles['body__left__body__button-container']}>
              <button
                className={styles.button + ' ' + (disableButton ? styles['disable-button'] : '')}
                disabled={disableButton}
                onClick={sendInfoMessage}
              >
                {status === 'loading' ? (
                  <Image src='/svg/loading.svg' alt='loading' width={24} height={24} className={styles.loading} />
                ) : status === 'success' ? (
                  <Image
                    src='/svg/check-mark.svg'
                    alt='check-mark'
                    width={24}
                    height={24}
                    className={styles['check-mark']}
                  />
                ) : status === 'failed' ? (
                  <Image src='/svg/wrong.svg' alt='wrong' width={24} height={24} className={styles.wrong} />
                ) : (
                  'Submit'
                )}
              </button>
            </div>
            <div className={styles['main__footer']}>
              {contactLinks.map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  className={styles['main__footer__container']}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <Image alt='icon' src={icon} />
                  <span>{label}</span>
                </a>
              ))}
              <button
                className={styles['main__footer__container'] + ' hide-desktop'}
                onClick={handleDownload}
              >
                <Image alt='icon' src={downloadIcon} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles['body__right'] + ' hide-tablet hide-mobile'}>
          <div
            className={styles['body__right__cv-container']}
            onClick={handleDownload}
            onMouseEnter={() => setShowDownload(true)}
            onMouseLeave={() => setShowDownload(false)}
          >
            <Image
              alt='cv'
              width={652}
              height={842}
              src='/assets/cv.png'
              className={styles['body__right__cv'] + ' ' + (showDownload ? styles['body__right__cv--active'] : '')}
            />
            {showDownload && <p className={styles.download}>Download PDF</p>}
          </div>
          <div className={styles['body__right__background']}></div>
        </div>
      </div>
    </div>
  )
}
