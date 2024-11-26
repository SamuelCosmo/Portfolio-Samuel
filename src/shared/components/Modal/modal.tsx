import styles from './modal.module.scss'

interface Props {
  show: boolean
  setShow: (value: boolean) => void
  children: React.ReactNode
}

export default function ModalComponent({ show, setShow, children }: Props) {
  return (
    <div className={styles['main'] + ' ' + (show ? styles['main--active'] : '')}>
      <div
        className={styles['background']}
        onClick={() => {
          setShow(false)
        }}
      ></div>
      <div className={styles['body'] + ' ' + (show ? styles['body--active'] : '')}>{children}</div>
    </div>
  )
}
