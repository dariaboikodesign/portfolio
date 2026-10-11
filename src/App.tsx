import { useEffect, useState } from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import CaseStudies from './components/CaseStudies/CaseStudies'
import { CasePage } from './components/CaseStudies/CaseLaptop'
import caseStyles from './components/CaseStudies/CaseStudies.module.scss'
import type { CaseId } from './data/cases'

const CASE_IDS: CaseId[] = ['edu', 'gamedev', 'farmers', 'career']

function caseFromHash(): CaseId | null {
  const key = window.location.hash.replace('#', '')
  return CASE_IDS.includes(key as CaseId) ? (key as CaseId) : null
}

export default function App() {
  const [openId, setOpenId] = useState<CaseId | null>(() =>
    typeof window === 'undefined' ? null : caseFromHash(),
  )
  const [preview, setPreview] = useState<CaseId | 'medical'>(openId ?? 'edu')

  // Browser back/forward and manual hash edits.
  useEffect(() => {
    const sync = () => {
      const id = caseFromHash()
      setOpenId(id)
      if (id) setPreview(id)
    }
    window.addEventListener('popstate', sync)
    window.addEventListener('hashchange', sync)
    return () => {
      window.removeEventListener('popstate', sync)
      window.removeEventListener('hashchange', sync)
    }
  }, [])

  // Opening a case starts at its top; closing returns to the highlights block.
  useEffect(() => {
    if (openId) {
      window.scrollTo(0, 0)
      return
    }
    if (window.location.hash !== '#cases') return
    // The About timeline resizes itself after mounting, so scroll again once
    // the layout has settled.
    const toCases = () => document.getElementById('cases')?.scrollIntoView({ block: 'start' })
    toCases()
    const timer = window.setTimeout(toCases, 400)
    return () => window.clearTimeout(timer)
  }, [openId])

  const openCase = (id: CaseId) => {
    setPreview(id)
    setOpenId(id)
    window.history.pushState({ case: id }, '', `#${id}`)
  }

  const closeCase = () => {
    setOpenId(null)
    window.history.pushState(null, '', '#cases')
  }

  // A case is its own page: the main page isn't rendered above it.
  if (openId) {
    return (
      <main>
        <section className={caseStyles.detail} aria-label="Case study">
          <div className={caseStyles.scroller} data-case-scroller>
            <button type="button" className={caseStyles.back} onClick={closeCase}>
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
      </main>
    )
  }

  return (
    <main>
      <Hero />
      <About />
      <CaseStudies preview={preview} onPreview={setPreview} onOpen={openCase} />
    </main>
  )
}
