import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from 'react'
import portrait from '../../assets/about/portrait.png'
import workspace from '../../assets/about/workspace.png'
import { timeline } from '../../data/timeline'
import FadeIn from '../FadeIn'
import styles from './About.module.scss'

const TIMELINE_MQ = '(max-width: 1024px)'

type TimelineAxis = {
  start: number
  end: number
  horizontal: boolean
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function getTimelineItems(node: HTMLOListElement) {
  return Array.from(node.children).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && !child.classList.contains(styles.timelineSpacer),
  )
}

function measureTimelineAxis(node: HTMLOListElement, horizontal: boolean): TimelineAxis {
  const timelineRect = node.getBoundingClientRect()
  const items = getTimelineItems(node)

  if (!items.length) {
    return { start: 0, end: 0, horizontal }
  }

  if (horizontal) {
    const centers = items.map((item) => {
      const marker = item.querySelector(`.${styles.marker}`) ?? item
      const rect = marker.getBoundingClientRect()
      return rect.left + rect.width / 2 - timelineRect.left
    })

    return {
      start: Math.min(...centers),
      end: Math.max(...centers),
      horizontal: true,
    }
  }

  const firstTick = items[0].querySelector(`.${styles.tick}`) ?? items[0]
  const lastTick =
    items[items.length - 1].querySelector(`.${styles.tick}`) ?? items[items.length - 1]
  const firstRect = firstTick.getBoundingClientRect()
  const lastRect = lastTick.getBoundingClientRect()

  return {
    start: firstRect.top + firstRect.height / 2 - timelineRect.top,
    end: lastRect.top + lastRect.height / 2 - timelineRect.top,
    horizontal: false,
  }
}

function measureItemThresholds(
  node: HTMLOListElement,
  axis: TimelineAxis,
): number[] {
  const timelineRect = node.getBoundingClientRect()
  const length = Math.max(axis.end - axis.start, 1)
  const items = getTimelineItems(node)

  return items.map((item) => {
    const marker = item.querySelector(`.${styles.marker}`)
    const tick = item.querySelector(`.${styles.tick}`)
    const point = (axis.horizontal ? marker : tick) ?? item
    const rect = point.getBoundingClientRect()
    const center = axis.horizontal
      ? rect.left + rect.width / 2 - timelineRect.left
      : rect.top + rect.height / 2 - timelineRect.top

    return clamp((center - axis.start) / length, 0, 1)
  })
}

function measureHorizontalScrollEnd(
  wrap: HTMLElement,
  endItem: HTMLParagraphElement,
): number {
  const margin = parseFloat(getComputedStyle(wrap).paddingRight) || 0
  const previousScroll = wrap.scrollLeft
  wrap.scrollLeft = 0

  const itemRight = endItem.getBoundingClientRect().right
  const targetRight = window.innerWidth - margin
  const maxScroll = Math.max(0, itemRight - targetRight)

  wrap.scrollLeft = previousScroll
  return maxScroll
}

function useTimelineReveal({
  pinRef,
  stickyRef,
  wrapRef,
  endItemRef,
}: {
  pinRef: RefObject<HTMLDivElement | null>
  stickyRef: RefObject<HTMLDivElement | null>
  wrapRef: RefObject<HTMLDivElement | null>
  endItemRef: RefObject<HTMLParagraphElement | null>
}) {
  const ref = useRef<HTMLOListElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [axis, setAxis] = useState<TimelineAxis>({ start: 0, end: 0, horizontal: false })
  const [thresholds, setThresholds] = useState<number[]>([])
  const [horizontal, setHorizontal] = useState(false)
  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const layoutMq = window.matchMedia(TIMELINE_MQ)

    let frame = 0
    let active = true
    let target = 0
    let current = 0
    let maxHorizontalScroll = 0

    const syncLayout = () => {
      const nextHorizontal = layoutMq.matches
      const nextAxis = measureTimelineAxis(node, nextHorizontal)
      setHorizontal(nextHorizontal)
      setAxis(nextAxis)
      setThresholds(measureItemThresholds(node, nextAxis))

      if (nextHorizontal && wrapRef.current && endItemRef.current) {
        const wrap = wrapRef.current
        const spacer = node.querySelector(`.${styles.timelineSpacer}`) as HTMLElement | null
        wrap.scrollLeft = 0

        if (spacer) {
          spacer.style.removeProperty('flex-basis')
          spacer.style.removeProperty('width')
        }

        maxHorizontalScroll = measureHorizontalScrollEnd(wrap, endItemRef.current)
        let scrollCap = Math.max(wrap.scrollWidth - wrap.clientWidth, 0)

        if (maxHorizontalScroll > scrollCap && spacer) {
          const extra = maxHorizontalScroll - scrollCap
          const base = parseFloat(getComputedStyle(spacer).width) || 0
          spacer.style.flexBasis = `${base + extra}px`
          spacer.style.width = `${base + extra}px`
          scrollCap = Math.max(wrap.scrollWidth - wrap.clientWidth, 0)
        }

        maxHorizontalScroll = Math.min(maxHorizontalScroll, scrollCap)

        if (pinRef.current) {
          pinRef.current.style.setProperty(
            '--timeline-scroll-distance',
            `${maxHorizontalScroll}px`,
          )
        }
      } else {
        maxHorizontalScroll = 0
        const spacer = node.querySelector(`.${styles.timelineSpacer}`) as HTMLElement | null
        spacer?.style.removeProperty('flex-basis')
        spacer?.style.removeProperty('width')
      }
    }

    const applyHorizontalProgress = (value: number) => {
      const wrap = wrapRef.current
      if (!wrap || maxHorizontalScroll <= 0) return

      wrap.scrollLeft = value * maxHorizontalScroll
      setProgress(value)
    }

    const updateHorizontalFromScroll = () => {
      const pin = pinRef.current
      const sticky = stickyRef.current
      if (!pin || !sticky || !layoutMq.matches || maxHorizontalScroll <= 0) return

      const stickyTop = parseFloat(getComputedStyle(sticky).top) || 0
      const pinTop = pin.getBoundingClientRect().top
      const scrolledIntoPin = stickyTop - pinTop
      const next = clamp(scrolledIntoPin / maxHorizontalScroll, 0, 1)

      applyHorizontalProgress(next)
    }

    const updateDesktopTarget = () => {
      const rect = node.getBoundingClientRect()
      const viewport = window.innerHeight
      const enterAt = viewport * 0.82
      const exitAt = viewport * 0.18
      const span = Math.max(rect.height * 1.05, viewport * 0.45, 1)
      const raw = (enterAt - rect.top) / span
      target = clamp(raw, 0, 1)

      if (rect.bottom < exitAt) {
        target = 1
      }
    }

    const tickDesktop = () => {
      if (!active || layoutMq.matches) return
      updateDesktopTarget()
      current += (target - current) * 0.08
      if (Math.abs(target - current) < 0.0008) {
        current = target
      }
      setProgress(current)
      frame = requestAnimationFrame(tickDesktop)
    }

    const onScroll = () => {
      if (layoutMq.matches) {
        updateHorizontalFromScroll()
      }
    }

    if (reducedMotion) {
      syncLayout()
      if (layoutMq.matches && wrapRef.current) {
        applyHorizontalProgress(1)
      } else {
        setProgress(1)
      }
      return
    }

    syncLayout()

    if (layoutMq.matches) {
      updateHorizontalFromScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
    } else {
      frame = requestAnimationFrame(tickDesktop)
    }

    const observer = new ResizeObserver(() => {
      syncLayout()
      if (layoutMq.matches) {
        updateHorizontalFromScroll()
      }
    })

    observer.observe(node)
    if (wrapRef.current) observer.observe(wrapRef.current)
    if (pinRef.current) observer.observe(pinRef.current)
    if (endItemRef.current) observer.observe(endItemRef.current)

    const onLayoutChange = () => {
      syncLayout()
      if (layoutMq.matches) {
        updateHorizontalFromScroll()
        window.addEventListener('scroll', onScroll, { passive: true })
        cancelAnimationFrame(frame)
      } else {
        window.removeEventListener('scroll', onScroll)
        frame = requestAnimationFrame(tickDesktop)
      }
    }

    layoutMq.addEventListener('change', onLayoutChange)
    window.addEventListener('resize', syncLayout)

    return () => {
      active = false
      cancelAnimationFrame(frame)
      observer.disconnect()
      layoutMq.removeEventListener('change', onLayoutChange)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', syncLayout)
    }
  }, [pinRef, stickyRef, wrapRef, endItemRef])

  return { ref, progress, axis, horizontal, thresholds }
}

export default function About() {
  const timelinePinRef = useRef<HTMLDivElement | null>(null)
  const timelineStickyRef = useRef<HTMLDivElement | null>(null)
  const timelineWrapRef = useRef<HTMLDivElement | null>(null)
  const timelineEndItemRef = useRef<HTMLParagraphElement | null>(null)
  const { ref: timelineRef, progress, axis, horizontal, thresholds } = useTimelineReveal({
    pinRef: timelinePinRef,
    stickyRef: timelineStickyRef,
    wrapRef: timelineWrapRef,
    endItemRef: timelineEndItemRef,
  })
  const axisLength = Math.max(axis.end - axis.start, 1)

  const timelineStyle = {
    '--timeline-progress': String(progress),
    '--timeline-axis-start': `${axis.start}px`,
    '--timeline-axis-end': `${axis.end}px`,
    '--timeline-axis-length': `${axisLength}px`,
  } as CSSProperties

  return (
    <section className={styles.about} aria-label="About">
      <FadeIn as="h2" className={styles.title} delay={40}>
        <span className={styles.titleMain}>
          <span className={styles.titleLine}>Design rooted</span>
          <span className={styles.titleLine}>in&nbsp;</span>
        </span>
        <span className={styles.script}>structured thinking</span>
      </FadeIn>

      <FadeIn as="p" className={styles.physics} delay={160}>
        Studying Fundamental Physics in&nbsp;English at MPGU trained me to think in
        systems, work with uncertainty, and solve complex problems step by step
      </FadeIn>

      <div className={styles.content}>
        <div className={styles.profileGrid}>
          <FadeIn as="article" className={styles.col} delay={220}>
            <img src={portrait} alt="Daria Boiko" width={277} height={211} />
            <p>
              My path in design started with the Uprock UX/UI Designer internship,
              followed by the Google UX Design Professional Certificate, and was
              further refined through advanced training in&nbsp;creative layout, grid
              systems, and&nbsp;typography
            </p>
          </FadeIn>

          <FadeIn as="article" className={styles.colWide} delay={280}>
            <img src={workspace} alt="Design workshop" width={276} height={320} />
            <p>
              Beyond structure and logic, I focus on how design communicates emotion
              and intent. This is something I consistently receive feedback on— my
              ability to accurately communicate mood and meaning through visual
              language
            </p>
          </FadeIn>
        </div>

        <div ref={timelinePinRef} className={styles.timelinePin}>
          <div ref={timelineStickyRef} className={styles.timelineSticky}>
            <div ref={timelineWrapRef} className={styles.timelineWrap}>
              <ol
                ref={timelineRef}
                className={styles.timeline}
                style={timelineStyle}
              >
                {timeline.map((item, index) => {
                  const revealAt = thresholds[index] ?? 0
                  const revealed = progress + 0.04 >= revealAt * 0.92

                  return (
                    <li
                      key={item.title}
                      className={`${styles.item} ${horizontal ? styles.itemHorizontal : ''} ${
                        revealed ? styles.itemIn : ''
                      }`}
                      style={{
                        transitionDelay: revealed
                          ? `${Math.round((revealAt ?? 0) * 70)}ms`
                          : '0ms',
                      }}
                    >
                      <span className={styles.marker} aria-hidden="true" />
                      <div className={styles.event}>
                        <p
                          ref={index === 0 ? timelineEndItemRef : undefined}
                          className={styles.role}
                        >
                          {item.title}
                        </p>
                        <span className={styles.tick} aria-hidden="true" />
                      </div>
                      <p className={styles.dates}>{item.dates}</p>
                    </li>
                  )
                })}
                <li className={styles.timelineSpacer} aria-hidden="true" />
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
