import { type CaseId } from '../../data/cases'
import FadeIn from '../FadeIn'
import CaseBrowser from './CaseBrowser'
import styles from './CaseStudies.module.scss'

type Props = {
  preview: CaseId
  onPreview: (id: CaseId) => void
  onOpen: (id: CaseId) => void
}

export default function CaseStudies({ preview, onPreview, onOpen }: Props) {
  return (
    <section id="cases" className={styles.gallery} aria-label="Case studies">
      <FadeIn as="h2" className={styles.highlights}>
        <span>Highlights of the</span>
        <span className={styles.highlightsRow}>
          past <em>2&nbsp;years</em>
        </span>
      </FadeIn>
      <CaseBrowser active={preview} onSelect={onPreview} onView={onOpen} />
    </section>
  )
}
