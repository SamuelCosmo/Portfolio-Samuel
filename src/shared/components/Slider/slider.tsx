import { useEffect, useRef, useState } from 'react'
import styles from './slider.module.scss'

interface Props {
  childrens: any[]
  setIndex?: (value: number) => void
}

export default function SliderComponent({ childrens, setIndex }: Props) {
  const [indexSelected, setIndexSelected] = useState(0)
  const [scrolling, setScrolling] = useState<boolean>(false)
  const childrenRefs = useRef<(HTMLDivElement | null)[]>([])
  const bodyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!scrolling) {
      const targetElement = childrenRefs.current[indexSelected]
      if (targetElement && bodyRef.current) {
        const bodyScrollLeft = bodyRef.current.scrollLeft
        const targetOffsetLeft = targetElement.offsetLeft
        const scrollAmount = targetOffsetLeft - bodyScrollLeft

        bodyRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth',
        })
      }
    }
  }, [indexSelected, scrolling])

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

        // Actualiza el índice seleccionado solo si cambia
        if (closestIndex !== indexSelected) {
          setScrolling(true)
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
  }, [indexSelected, setIndex])

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
            className={styles['control'] + ' ' + (indexSelected === index ? styles['control--active'] : '')}
            key={index}
            onClick={() => {
              setScrolling(false)
              setIndexSelected(index)
              if (setIndex) setIndex(index)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
