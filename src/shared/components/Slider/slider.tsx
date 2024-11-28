import { useEffect, useRef, useState } from 'react'
import styles from './slider.module.scss'

interface Props {
  childrens: any[]
  setIndex?: (value: number) => void
}

export default function SliderComponent({ childrens, setIndex }: Props) {
  const [indexSelected, setIndexSelected] = useState(0)
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([])
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const [clickedButtonControl, setClickedButtonControl] = useState(false)

  const scrollToSlide = (index: number) => {
    if (!bodyRef.current || !childrenRefs.current[index]) return

    bodyRef.current.style.scrollSnapType = 'none'
    setClickedButtonControl(true)

    const targetElement = childrenRefs.current[index]
    const bodyScrollLeft = bodyRef.current.scrollLeft
    const containerWidth = bodyRef.current.clientWidth
    const targetOffsetLeft = targetElement.offsetLeft - containerWidth / 2 + targetElement.clientWidth / 2
    const scrollAmount = targetOffsetLeft - bodyScrollLeft

    if (setIndex) setIndex(index)
    setIndexSelected(index)

    bodyRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })

    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.style.scrollSnapType = 'both mandatory'
      setClickedButtonControl(false)
    }, 800)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (bodyRef.current) {
        const containerScrollLeft = bodyRef.current.scrollLeft
        const containerWidth = bodyRef.current.offsetWidth

        let closestIndex = 0
        let closestDistance = Infinity

        childrenRefs.current.forEach((child, index) => {
          if (child) {
            const childCenter = child.offsetLeft + child.offsetWidth / 2 - containerScrollLeft
            const containerCenter = containerWidth / 2

            const distance = Math.abs(childCenter - containerCenter)
            if (distance < closestDistance) {
              closestDistance = distance
              closestIndex = index
            }
          }
        })

        if (closestIndex !== indexSelected) {
          setIndexSelected(closestIndex)
          if (setIndex) setIndex(closestIndex)
        }
      }
    }

    if (bodyRef.current) {
      const container = bodyRef.current
      container.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [indexSelected])

  return (
    <div className={styles['main']}>
      <div className={styles['body']} ref={bodyRef}>
        {childrens.map((item: any, index: number) => (
          <div
            className={styles['children']}
            key={'children-' + index}
            ref={(el) => (childrenRefs.current[index] = el)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className={styles['controls-container']}>
        {childrens.map((item: any, index: number) => (
          <div
            className={
              styles['control'] +
              ' ' +
              (clickedButtonControl ? styles['control--disable'] : '') +
              ' ' +
              (indexSelected === index ? styles['control--active'] : '')
            }
            key={index}
            onClick={() => {
              scrollToSlide(index)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
