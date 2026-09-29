import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import long from './CaseLong.module.scss'
import styles from './FarmersCase.module.scss'

const TAGS = ['Green Growth', 'Mobile app', 'Spain', '2024']

const BEFORE = ['Select field', 'Open modal', 'Edit parameter', 'Save', 'Return to map']
const AFTER = ['Tap field', 'Edit', 'Done']

const STATS = [
  { value: '−42%', label: 'task time' },
  { value: '+27%', label: 'completion' },
  { value: '14/14 users', label: 'completed the core task during research', featured: true },
]

export default function FarmersCase() {
  return (
    <article className={`${long.page} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.heroLeft}>
            <FadeIn from="up" className={styles.heroHead}>
              <h3 className={`${long.displayGold} ${styles.title}`}>
                Case 3:
                <br />
                FROM FIELD TO&nbsp;SCREEN
              </h3>
              <div className={styles.tags}>
                {TAGS.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn from="up" delay={80} className={styles.heroTasks}>
              <p className={long.kicker}>Tasks:</p>
              <p className={long.body}>
                Farmers weren&apos;t using the app where we designed it to be used I needed to
                rethink and suggest tablet/mobile design, creating an app out of web platform
              </p>
              <p className={`${long.body} ${styles.note}`}>
                +Usage under direct light, sometimes weak signal and while being in gloves
              </p>
            </FadeIn>
          </div>

          <FadeIn from="up" delay={60} className={styles.heroShot}>
            <img src={caseImage('gg-hero')} alt="Green Growth platform on a laptop in the field" />
          </FadeIn>
        </div>
      </section>

      <section className={styles.model}>
        <FadeIn from="up" className={styles.scriptHeading}>
          <span>CHANGED THE</span>
          <em>interaction</em>
          <span>MODEL</span>
        </FadeIn>

        <div className={styles.modelBody}>
          <FadeIn from="up" delay={60} className={styles.flows}>
            <div className={styles.flowCol}>
              <p className={styles.flowLabel}>BEFORE</p>
              {BEFORE.map((step, index) => (
                <div key={step} className={styles.flowStep}>
                  <p>{step}</p>
                  {index < BEFORE.length - 1 ? <span aria-hidden>→</span> : null}
                </div>
              ))}
            </div>
            <div className={styles.flowCol}>
              <p className={styles.flowLabel}>after</p>
              {AFTER.map((step, index) => (
                <div key={step} className={styles.flowStep}>
                  <p>{step}</p>
                  {index < AFTER.length - 1 ? <span aria-hidden>→</span> : null}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn from="up" delay={120} className={styles.phoneMap}>
            <img src={caseImage('gg-phone-map')} alt="Mobile map interface with field selection" />
          </FadeIn>
        </div>
      </section>

      <section className={styles.gallery}>
        <FadeIn from="up" className={styles.fieldPhoto}>
          <img src={caseImage('gg-field-photo')} alt="Farmer using the app outdoors" />
        </FadeIn>
        <FadeIn from="up" delay={80} className={styles.phonesDuo}>
          <img src={caseImage('gg-phones-duo')} alt="Device registration and field data screens" />
        </FadeIn>
      </section>

      <FadeIn from="up" className={styles.results}>
        <p className={styles.resultsTitle}>Result</p>
        <div className={styles.stats}>
          {STATS.map((item) => (
            <div key={item.value} className={item.featured ? styles.statFeatured : undefined}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={long.metricLabel}>{item.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </article>
  )
}
