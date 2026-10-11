import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import styles from './FarmersCase.module.scss'

const TAGS = ['Green Growth', 'Mobile app', 'Spain', '2024']

const BEFORE = ['Select field', 'Open modal', 'Edit parameter', 'Save', 'Return to map']
const AFTER = ['Tap field', 'Edit', 'Done']

function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <div className={styles.flowCol}>
      <p className={styles.flowLabel}>{label}</p>
      {steps.map((step, index) => [
        <p key={step} className={styles.flowStep}>
          {step}
        </p>,
        index < steps.length - 1 ? (
          <span key={`${step}-arrow`} className={styles.flowArrow} aria-hidden="true">
            ↓
          </span>
        ) : null,
      ])}
    </div>
  )
}

// Layouts follow the Figma "Адаптивы кейса 3" frames (1920 / 1280 / 1024 / 360).
// Breakpoints are container queries on the page width, so the scaled 1920px
// preview inside the laptop always shows the desktop layout.
export default function FarmersCase() {
  return (
    <article className={styles.page}>
      <div className={styles.inner}>
        <section className={styles.top}>
          <div className={styles.topLeft}>
            <FadeIn from="up" className={styles.head}>
              <h3 className={styles.title}>
                Case 3:
                <br />
                From field to&nbsp;screen
              </h3>
              <div className={styles.tags}>
                {TAGS.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn from="up" delay={80} className={styles.tasks}>
              <div className={styles.block}>
                <p className={styles.kicker}>Tasks:</p>
                <ul className={`${styles.body} ${styles.list}`}>
                  <li>Farmers weren&apos;t using the app where we designed it to be used</li>
                  <li>
                    I needed to rethink and suggest tablet/mobile design, creating an app out of
                    web platform
                  </li>
                </ul>
              </div>
              <p className={styles.body}>
                +Usage under direct light, sometimes weak signal and while being in gloves
              </p>
            </FadeIn>
          </div>

          <FadeIn from="up" delay={60} className={styles.laptop}>
            <img src={caseImage('gg3-laptop')} alt="Green Growth web platform on a laptop in the grass" />
          </FadeIn>
        </section>

        <FadeIn as="h3" from="up" className={styles.heading}>
          <span>Changed the</span>{' '}
          <span className={styles.headingRow}>
            <em>interaction</em> <span>model</span>
          </span>
        </FadeIn>

        <section className={styles.collage}>
          <FadeIn from="up" className={styles.flows}>
            <Flow label="Before" steps={BEFORE} />
            <Flow label="After" steps={AFTER} />
          </FadeIn>
          <img
            className={styles.sensor}
            src={caseImage('gg3-sensor')}
            alt="Sensor screen of the mobile app in a hand"
          />
          <img
            className={styles.map}
            src={caseImage('gg3-map')}
            alt="Field map of the mobile app in a hand"
          />
          <img
            className={styles.devices}
            src={caseImage('gg3-devices')}
            alt="New device and field data screens on two phones"
          />
        </section>

        <FadeIn as="section" from="up" className={styles.results}>
          <p className={styles.resultsTitle}>Result</p>
          <div className={styles.stats}>
            <div className={styles.statPair}>
              <div className={styles.stat}>
                <p className={styles.statValue}>−42%</p>
                <p className={styles.statLabel}>task time</p>
              </div>
              <div className={styles.stat}>
                <p className={styles.statValue}>+27%</p>
                <p className={styles.statLabel}>completion</p>
              </div>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>14/14 users</p>
              <p className={styles.statLabel}>completed the core task during research</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
