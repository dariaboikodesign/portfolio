import { caseMenu, type CaseId } from '../../data/cases'
import CareerCase from './CareerCase'
import EduCase from './EduCase'
import FarmersCase from './FarmersCase'
import GameCase from './GameCase'
import styles from './CaseBrowser.module.scss'

type Props = {
  active: CaseId
  onSelect: (id: CaseId) => void
  onView: (id: CaseId) => void
}

export default function CaseBrowser({ active, onSelect, onView }: Props) {
  return (
    <div className={styles.browser}>
      <nav className={styles.menu} aria-label="Choose a case study">
        {caseMenu.map(({ id, lines, hasPage }) => {
          if (!hasPage || id === 'medical') return null
          return (
            <button
              key={id}
              type="button"
              className={styles.menuItem}
              aria-current={id === active ? 'true' : undefined}
              aria-controls="case-preview"
              onClick={() => onSelect(id)}
            >
              {lines.join(' ')}
            </button>
          )
        })}
      </nav>

      <div className={styles.viewer}>
        <div className={styles.toolbar}>
          <button type="button" className={styles.openCase} onClick={() => onView(active)}>
            View full case
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12l8-8m-6 0h6v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div
          key={active}
          id="case-preview"
          role="region"
          aria-label="Case study preview"
          tabIndex={0}
          data-case-scroller
          className={styles.scroll}
        >
          <CasePage id={active} />
        </div>
      </div>
    </div>
  )
}

export function CasePage({ id }: { id: CaseId }) {
  switch (id) {
    case 'edu': return <EduCase />
    case 'gamedev': return <GameCase />
    case 'farmers': return <FarmersCase />
    case 'career': return <CareerCase />
  }
}
