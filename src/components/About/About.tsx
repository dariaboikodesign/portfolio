import portrait from '../../assets/about/portrait.png'
import workspace from '../../assets/about/workspace.png'
import { timeline } from '../../data/timeline'
import FadeIn from '../FadeIn'
import styles from './About.module.scss'

export default function About() {
  return (
    <section className={styles.about} aria-label="About">
      <FadeIn as="h2" className={styles.title} delay={40}>
        <span>Design rooted</span>
        <span>
          in&nbsp;
          <em className={styles.script}>structured thinking</em>
        </span>
      </FadeIn>

      <FadeIn as="p" className={styles.physics} delay={160}>
        Studying Fundamental Physics in&nbsp;English at MPGU trained me to think in
        systems, work with uncertainty, and solve complex problems step by step
      </FadeIn>

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
          and intent. This is something I consistently receive feedback on — my
          ability to accurately communicate mood and meaning through visual
          language
        </p>
      </FadeIn>

      <ol className={styles.timeline}>
        {timeline.map((item, index) => (
          <FadeIn as="li" key={item.title} className={styles.item} from="top" delay={index * 140}>
            <div className={styles.event}>
              <p className={styles.role}>{item.title}</p>
              <span className={styles.tick} aria-hidden="true" />
            </div>
            <p className={styles.dates}>{item.dates}</p>
          </FadeIn>
        ))}
      </ol>
    </section>
  )
}
