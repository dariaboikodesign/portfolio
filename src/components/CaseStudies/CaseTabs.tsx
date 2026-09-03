import type { CaseId, CaseTab } from '../../data/cases'
import styles from './CaseTabs.module.scss'

type Props = {
  tabs: CaseTab[]
  active: CaseId
  onChange: (id: CaseId) => void
}

export default function CaseTabs({ tabs, active, onChange }: Props) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="Case studies">
      {tabs.map((tab) => {
        const isActive = tab.id === active
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={isActive ? styles.active : styles.tab}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
