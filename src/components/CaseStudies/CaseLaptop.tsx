import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import laptopFrame from '../../assets/highlights/laptop.png'
import viewArrow from '../../assets/highlights/view-arrow.svg'
import { caseMenu, type CaseId, type MenuId } from '../../data/cases'
import CareerCase from './CareerCase'
import EduCase from './EduCase'
import FarmersCase from './FarmersCase'
import GameCase from './GameCase'
import styles from './CaseLaptop.module.scss'

function CasePreview({ id }: { id: MenuId }) {
  if (id === 'edu') return <EduCase />
  if (id === 'gamedev') return <GameCase />
  if (id === 'farmers') return <FarmersCase />
  if (id === 'career') return <CareerCase />
  return (
    <div className={styles.placeholder}>
      <p>Case 5: Medical presentations</p>
    </div>
  )
}

type Props = {
  active: MenuId
  onSelect: (id: MenuId) => void
  onView: (id: CaseId) => void
}

export default function CaseLaptop({ active, onSelect, onView }: Props) {
  const item = caseMenu.find((entry) => entry.id === active)
  const scrollRef = useRef<HTMLDivElement>(null)
  const zoomRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.4)
  const [duration, setDuration] = useState(32)

  useLayoutEffect(() => {
    const scroll = scrollRef.current
    const box = zoomRef.current
    if (!scroll || !box) return

    const apply = () => {
      const nextScale = scroll.clientWidth / 1920
      const nextDuration = Math.max(22, box.scrollHeight / 110)
      setScale((prev) => (Math.abs(prev - nextScale) > 0.004 ? nextScale : prev))
      setDuration((prev) => (Math.abs(prev - nextDuration) > 0.8 ? nextDuration : prev))
    }
    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(scroll)
    ro.observe(box)
    return () => ro.disconnect()
  }, [active])

  return (
    <div className={styles.board}>
      <nav className={styles.menu} aria-label="Case studies">
        {caseMenu
          .filter((entry) => entry.id !== 'medical')
          .map((entry) => {
          const selected = entry.id === active
          return (
            <button
              key={entry.id}
              type="button"
              className={selected ? styles.menuActive : styles.menuItem}
              aria-current={selected ? 'true' : undefined}
              onClick={() => onSelect(entry.id)}
            >
              {entry.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </button>
          )
        })}
      </nav>

      <div className={styles.laptop}>
        <img className={styles.frame} src={laptopFrame} alt="" />
        <div className={styles.screen} aria-hidden>
          <div ref={scrollRef} className={styles.screenScroll} data-case-scroller>
            <div
              ref={zoomRef}
              className={styles.screenZoom}
              key={active}
              style={{
                transform: `scale(${scale})`,
                animationDuration: `${duration}s`,
              }}
            >
              <CasePreview id={active} />
              <CasePreview id={active} />
            </div>
          </div>
          <span className={styles.notch} />
        </div>
      </div>

      {item?.hasPage ? (
        <button
          type="button"
          className={styles.viewCase}
          onClick={() => onView(active as CaseId)}
        >
          View case
          <img src={viewArrow} alt="" width={24} height={14} />
        </button>
      ) : (
        <p className={styles.viewSoon}>Coming soon</p>
      )}
    </div>
  )
}

export function CasePage({ id }: { id: CaseId }) {
  let page: ReactNode = null
  if (id === 'edu') page = <EduCase />
  if (id === 'gamedev') page = <GameCase />
  if (id === 'farmers') page = <FarmersCase />
  if (id === 'career') page = <CareerCase />
  return page
}
