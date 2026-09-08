import { useEffect, useRef, useState } from 'react'
import { caseTabs, cases, type CaseId } from '../../data/cases'
import CaseTabs from './CaseTabs'
import CaseSlide from './CaseSlide'
import EduCase from './EduCase'
import GameCase from './GameCase'
import FadeIn from '../FadeIn'
import styles from './CaseStudies.module.scss'

const HASH_TO_CASE: Record<string, CaseId> = {
  edu: 'edu',
  gamedev: 'gamedev',
  farmers: 'farmers',
  career: 'career',
}

function caseFromHash(): CaseId {
  const key = window.location.hash.replace('#', '')
  return HASH_TO_CASE[key] ?? 'edu'
}

export default function CaseStudies() {
  const [active, setActive] = useState<CaseId>(() =>
    typeof window === 'undefined' ? 'edu' : caseFromHash(),
  )
  const scrollerRef = useRef<HTMLDivElement>(null)
  const isLong = active === 'edu' || active === 'gamedev'

  useEffect(() => {
    const sync = () => setActive(caseFromHash())
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const selectCase = (id: CaseId) => {
    setActive(id)
    window.history.replaceState(null, '', `#${id}`)
    scrollerRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <section id="cases" className={styles.section} aria-label="Case studies">
      <FadeIn as="h2" className={styles.highlights}>
        Highlights of the past <em>2 years</em>
      </FadeIn>
      <div className={styles.shell}>
        <CaseTabs active={active} onChange={selectCase} tabs={caseTabs} />
        <div
          className={`${styles.scroller} ${isLong ? styles.scrollerPanel : ''}`}
          ref={scrollerRef}
          data-case-scroller
        >
          {active === 'edu' ? <EduCase /> : null}
          {active === 'gamedev' ? <GameCase /> : null}
          {active === 'farmers' || active === 'career'
            ? cases[active].map((slide, index) => (
                <CaseSlide key={`${active}-${slide.id}`} slide={slide} index={index} />
              ))
            : null}
        </div>
      </div>
    </section>
  )
}
