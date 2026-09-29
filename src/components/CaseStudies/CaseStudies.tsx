import { useEffect, useState } from 'react'
import { type CaseId, type MenuId } from '../../data/cases'
import FadeIn from '../FadeIn'
import CaseLaptop, { CasePage } from './CaseLaptop'
import styles from './CaseStudies.module.scss'

const HASH_TO_CASE: Record<string, CaseId> = {
  edu: 'edu',
  gamedev: 'gamedev',
  farmers: 'farmers',
  career: 'career',
}

function caseFromHash(): CaseId | null {
  const key = window.location.hash.replace('#', '')
  return HASH_TO_CASE[key] ?? null
}

export default function CaseStudies() {
  const [preview, setPreview] = useState<MenuId>('edu')
  const [openId, setOpenId] = useState<CaseId | null>(() =>
    typeof window === 'undefined' ? null : caseFromHash(),
  )

  useEffect(() => {
    const sync = () => {
      const id = caseFromHash()
      setOpenId(id)
      if (id) setPreview(id)
    }
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const openCase = (id: CaseId) => {
    setPreview(id)
    setOpenId(id)
    window.history.replaceState(null, '', `#${id}`)
    requestAnimationFrame(() => {
      document.getElementById('cases')?.scrollIntoView({ block: 'start' })
    })
  }

  const closeCase = () => {
    setOpenId(null)
    window.history.replaceState(null, '', '#cases')
  }

  if (openId) {
    return (
      <section id="cases" className={styles.detail} aria-label="Case studies">
        <div className={styles.scroller} data-case-scroller>
          <button type="button" className={styles.back} onClick={closeCase}>
            <svg width="24" height="14" viewBox="0 0 24 14" fill="none" aria-hidden>
              <path
                d="M24 7.78H0M0 7.78C3.43 7.78 8.11 4.56 8.57.08M0 7.78C3.43 7.78 7.43 9.88 8.57 14.08"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Main page
          </button>
          <CasePage id={openId} />
        </div>
      </section>
    )
  }

  return (
    <section id="cases" className={styles.gallery} aria-label="Case studies">
      <FadeIn as="h2" className={styles.highlights}>
        <span>Highlights of the</span>
        <span className={styles.highlightsRow}>
          past <em>2&nbsp;years</em>
        </span>
      </FadeIn>
      <CaseLaptop active={preview} onSelect={setPreview} onView={openCase} />
    </section>
  )
}
