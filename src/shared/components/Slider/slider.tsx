'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './slider.module.scss'

interface Props {
  items: React.ReactNode[]
}

export default function SliderComponent({ items }: Props) {
  const [indexSelected, setIndexSelected] = useState(0)
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([])
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const [clickedButtonControl, setClickedButtonControl] = useState(false)

  const scrollToSlide = (index: number) => {
    const target = childrenRefs.current[index]
    if (!bodyRef.current || !target) return

    bodyRef.current.style.scrollSnapType = 'none'
    setClickedButtonControl(true)
    setIndexSelected(index)

    const containerWidth = bodyRef.current.clientWidth
    const targetOffsetLeft = target.offsetLeft - containerWidth / 2 + target.clientWidth / 2
    bodyRef.current.scrollTo({ left: targetOffsetLeft, behavior: 'smooth' })

    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.style.scrollSnapType = 'x mandatory'
      setClickedButtonControl(false)
    }, 800)
  }

  useEffect(() => {
    const container = bodyRef.current
    if (!container) return

    let frame = 0
    const handleScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const containerScrollLeft = container.scrollLeft
        const containerCenter = container.offsetWidth / 2

        let closestIndex = 0
        let closestDistance = Infinity

        childrenRefs.current.forEach((child, index) => {
          if (!child) return
          const childCenter = child.offsetLeft + child.offsetWidth / 2 - containerScrollLeft
          const distance = Math.abs(childCenter - containerCenter)
          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        setIndexSelected((prev) => (prev === closestIndex ? prev : closestIndex))
      })
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.body} ref={bodyRef}>
        {items.map((item, index) => (
          <div
            className={styles.children}
            key={'children-' + index}
            ref={(el) => {
              childrenRefs.current[index] = el
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles['controls-container']}>
        {items.map((_, index) => (
          <div
            className={
              styles.control +
              ' ' +
              (clickedButtonControl ? styles['control--disable'] : '') +
              ' ' +
              (indexSelected === index ? styles['control--active'] : '')
            }
            key={index}
            onClick={() => scrollToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  )
}
