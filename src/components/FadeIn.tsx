import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import styles from './FadeIn.module.scss'

type Props = {
  as?: ElementType
  delay?: number
  from?: 'none' | 'top'
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export default function FadeIn({
  as: Tag = 'div',
  delay = 0,
  from = 'none',
  className,
  style,
  children,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      requestAnimationFrame(() => setVisible(true))
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(node)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={[styles.fade, from === 'top' ? styles.fromTop : '', visible ? styles.in : '', className]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  )
}
