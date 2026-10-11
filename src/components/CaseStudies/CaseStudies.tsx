import { type CaseId, type MenuId } from '../../data/cases'
import FadeIn from '../FadeIn'
import CaseLaptop from './CaseLaptop'
import styles from './CaseStudies.module.scss'

type Props = {
  preview: MenuId
  onPreview: (id: MenuId) => void
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
      <CaseLaptop active={preview} onSelect={onPreview} onView={onOpen} />
    </section>
  )
}
