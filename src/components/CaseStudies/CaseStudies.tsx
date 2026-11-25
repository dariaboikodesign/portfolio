import { useCallback, useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import type { CaseId } from '../../data/cases'
import essayVideo from '../../assets/highlights/carousel/essay.mp4'
import essayPoster from '../../assets/highlights/carousel/essay.webp'
import amusementVideo from '../../assets/highlights/carousel/amusement.mp4'
import amusementPoster from '../../assets/highlights/carousel/amusement.webp'
import greenGrowthVideo from '../../assets/highlights/carousel/green-growth.mp4'
import greenGrowthPoster from '../../assets/highlights/carousel/green-growth.webp'
import diagnosticsVideo from '../../assets/highlights/carousel/diagnostics.mp4'
import diagnosticsPoster from '../../assets/highlights/carousel/diagnostics.webp'
import useCarouselGestures from './useCarouselGestures'
import styles from './CaseStudies.module.scss'

type Highlight = { id: CaseId; video: string; poster: string; title: string; description: ReactNode; alt: string }

const highlights: Highlight[] = [
  {
    id: 'edu',
    video: essayVideo,
    poster: essayPoster,
    title: 'Case 1: Bringing AI into classrooms across Russia',
    description: 'I design AI tools for a school platform with 250K users, including personalized learning paths, in-task hints, and inline feedback. After we launched a lesson-focused teacher dashboard with customizable metrics, average time on the platform rose from 18 to 42 minutes.',
    alt: 'A teacher reviewing a student essay on a laptop',
  },
  {
    id: 'gamedev',
    video: amusementVideo,
    poster: amusementPoster,
    title: '02 · We Turned a Course Into a 3D City',
    description: (
      <>In <strong>one month</strong>, we built a city where students unlocked lessons by exploring different locations. <strong>12–15%</strong> completed the full course, compared with a <strong>5–10%</strong> market benchmark.</>
    ),
    alt: 'A laptop in the grass showing the virtual learning city',
  },
  {
    id: 'farmers',
    video: greenGrowthVideo,
    poster: greenGrowthPoster,
    title: '03 · Updating a Farm Field in Three Taps',
    description: (
      <>I redesigned a desktop workflow so farmers could edit fields right on the map, even with gloves on. In testing, the task took <strong>42% less time</strong>, and <strong>14 out of 14</strong> participants completed it.</>
    ),
    alt: 'Editing a field on the Green Growth mobile map',
  },
  {
    id: 'career',
    video: diagnosticsVideo,
    poster: diagnosticsPoster,
    title: '04 · From Career Quiz to Paid Expert Advice',
    description: (
      <>I designed a service that paired a short assessment with a career counselor. It reached <strong>16K users in two months</strong> without marketing, and <strong>58%</strong> of consultation requests converted to payment.</>
    ),
    alt: 'A classroom laptop displaying a career assessment and a chart of the results',
  },
]

const slideMs = 10_000
const offsets = highlights.length === 1 ? [0] : [-2, -1, 0, 1, 2]

// The SVG viewport crops the wheel to its upper arc as it rotates.
const tickCount = 1150
const ticks = Array.from({ length: tickCount }, (_, index) => {
  const angle = index * 2 * Math.PI / tickCount
  const radius = 1400
  const length = index % 5 === 0 ? 14 : 10
  const point = (r: number) => `${(800 + r * Math.sin(angle)).toFixed(2)} ${(1418 - r * Math.cos(angle)).toFixed(2)}`
  return `M${point(radius)}L${point(radius + length)}`
}).join(' ')

function CenterVideo({ item, running, settled, next }: {
  item: Highlight; running: boolean; settled: boolean; next: () => void
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const remaining = useRef(slideMs)
  const [finished, setFinished] = useState(false)
  const [timeUp, setTimeUp] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video || !running || !settled || finished) return
    let active = true
    video.play().catch(() => { if (active) setFinished(true) })
    return () => {
      active = false
      video.pause()
    }
  }, [running, settled, finished])

  useEffect(() => {
    if (!running || timeUp) return
    const start = performance.now()
    const timeout = window.setTimeout(() => setTimeUp(true), remaining.current)
    return () => {
      window.clearTimeout(timeout)
      remaining.current = Math.max(0, remaining.current - (performance.now() - start))
    }
  }, [running, timeUp])

  useEffect(() => {
    if (running && finished && timeUp && highlights.length > 1) next()
  }, [running, finished, timeUp, next])

  return (
    <video ref={ref} muted playsInline preload="metadata" aria-hidden="true"
      src={item.video} poster={item.poster}
      onEnded={() => setFinished(true)} onError={() => setFinished(true)} />
  )
}

export default function CaseStudies() {
  const stage = useRef<HTMLDivElement>(null)
  const [turn, setTurn] = useState(0)
  const [settledTurn, setSettledTurn] = useState(0)
  const [inView, setInView] = useState(false)
  const [tabVisible, setTabVisible] = useState(!document.hidden)
  const [reduced, setReduced] = useState(() => matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [auto, setAuto] = useState(!reduced)
  const move = useCallback((direction: number) => {
    if (highlights.length > 1) setTurn(value => value + direction)
  }, [])
  const next = useCallback(() => move(1), [move])
  const touching = useCarouselGestures(stage, move)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 })
    if (stage.current) observer.observe(stage.current)
    const onVisibility = () => setTabVisible(!document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    const onMotion = () => { setReduced(motion.matches); setAuto(!motion.matches) }
    motion.addEventListener('change', onMotion)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      motion.removeEventListener('change', onMotion)
    }
  }, [])

  return (
    <section id="cases" className={styles.gallery} aria-labelledby="highlights-title" aria-roledescription="carousel">
      <div className={styles.stage} ref={stage}>
        <svg className={styles.arc} viewBox="0 0 1600 320" aria-hidden="true" focusable="false">
          <path className={styles.ticks} style={{ '--rotation-steps': -turn } as CSSProperties} d={ticks} />
        </svg>
        {offsets.map(offset => {
          const position = turn + offset
          const index = ((position % highlights.length) + highlights.length) % highlights.length
          const item = highlights[index]
          const center = offset === 0
          return (
            <figure key={position} className={styles.card} data-offset={offset} data-case={item.id}
              aria-hidden={!center} style={{ '--slot': offset } as CSSProperties}
              onTransitionEnd={event => {
                if (center && event.target === event.currentTarget && event.propertyName === 'transform') setSettledTurn(turn)
              }}>
              <div className={styles.cardFace}>
                <div className={styles.media}>
                  <img src={item.poster} alt={item.alt} draggable="false" />
                  {center && <CenterVideo item={item} running={auto && inView && tabVisible && !touching}
                    settled={reduced || settledTurn === turn} next={next} />}
                </div>
                <figcaption className={styles.caption}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </figcaption>
              </div>
            </figure>
          )
        })}
      </div>
      <h2 id="highlights-title" className={styles.highlights}>
        <span>Highlights of the</span>
        <span className={styles.highlightsRow}>past <em>2&nbsp;years</em></span>
      </h2>
      {highlights.length > 1 && (
        <div className={styles.controls} role="group" aria-label="Carousel controls">
          <button type="button" aria-label="Previous case" onClick={() => move(-1)}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M16 10H4m5-5-5 5 5 5" /></svg>
          </button>
          <button type="button" aria-label={auto ? 'Pause carousel' : 'Play carousel'} onClick={() => setAuto(value => !value)}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d={auto ? 'M7 5v10m6-10v10' : 'm7 5 8 5-8 5z'} /></svg>
          </button>
          <button type="button" aria-label="Next case" onClick={next}>
            <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h12m-5-5 5 5-5 5" /></svg>
          </button>
        </div>
      )}
    </section>
  )
}
