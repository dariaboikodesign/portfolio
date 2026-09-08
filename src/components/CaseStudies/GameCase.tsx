import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import long from './CaseLong.module.scss'
import styles from './GameCase.module.scss'

const STATS = [
  { ghost: '30–50', value: '63–67%', label: 'entered the content' },
  { ghost: '15–25', value: '26–32%', label: 'entered the content' },
  { ghost: '5–10', value: '12–15%', label: 'entered the content' },
]

export default function GameCase() {
  return (
    <article className={`${long.page} ${styles.page}`}>
      <section className={styles.hero}>
        <FadeIn as="h3" from="up" className={`${long.title} ${styles.title}`}>
          Case 2:
          <br />
          Creating gamified educational platform
        </FadeIn>
        <FadeIn as="p" from="up" delay={80} className={`${long.title} ${styles.subtitle}`}>
          Functional Literacy Marathon
        </FadeIn>

        <div className={styles.stage} aria-hidden>
          <img className={styles.glow} src={caseImage('gd2-glow-1')} alt="" />
          <img className={styles.glowSoft} src={caseImage('gd2-glow-2')} alt="" />
          <div className={styles.map}>
            <img src={caseImage('gd2-map')} alt="" />
          </div>
          <div className={styles.phone}>
            <img src={caseImage('gd2-phone')} alt="" />
          </div>
        </div>

        <FadeIn from="up" delay={120} className={styles.lead}>
          <p className={long.body}>
            How we created a cool looking interesting online course, using old-style boring
            materials on the last platform
          </p>
          <div className={long.stack}>
            <p className={long.kicker}>My contribution:</p>
            <p className={long.body}>
              End-to-end: from researching till concepts and final realisation user interfaces and
              main flow
            </p>
          </div>
        </FadeIn>

        <FadeIn from="up" delay={160} className={styles.tasks}>
          <p className={long.kicker}>Tasks:</p>
          <ul className={long.list}>
            <li>
              Test the hypothesis: Can we increase learner engagement and improve learning outcomes
              by redesigning the format and user experience?
            </li>
            <li>
              Validate the hypothesis: Can changes to the content format and user experience improve
              user engagement and learning effectiveness?
            </li>
          </ul>
          <p className={`${long.body} ${styles.constraint}`}>
            Extra tight deadlines, a legacy monolithic platform, and existing content that
            couldn&apos;t be fully redesigned
          </p>
        </FadeIn>
      </section>

      <section className={styles.concept}>
        <FadeIn from="up" className={styles.conceptLead}>
          <p className={long.body}>
            I proposed a 3D world concept where each building represented a specific course topic
          </p>
          <p className={long.body}>In one month we went through all stages of forming a product:</p>
        </FadeIn>
        <FadeIn as="ul" from="up" delay={80} className={`${long.list} ${styles.conceptNotes}`}>
          <li>
            Early launch enables faster improvements.
            <br />
            The Friends &amp; Family stage helped us collect real user feedback and identify 82
            critical bugs before scaling the product.
          </li>
          <li>
            Build flexibility into the product from the start.
            <br />
            The 3D map and expandable panels allowed us to quickly adapt the interface for different
            states and devices without major redesigns.
          </li>
        </FadeIn>
      </section>

      <FadeIn from="up" className={styles.boards}>
        <img src={caseImage('gd2-boards')} alt="Idea generation board and 3D world interface states" />
      </FadeIn>

      <section className={styles.stats}>
        <FadeIn as="h3" from="up" className={styles.compare}>
          Comparison of <em>our data</em>
          <br />
          with <span>real market benchmarks</span> showed that our income was competitive
        </FadeIn>
        <FadeIn from="up" delay={80} className={styles.statRow}>
          {STATS.map((item) => (
            <div key={item.value} className={styles.stat}>
              <p className={styles.ghost}>{item.ghost}</p>
              <p className={styles.statValue}>{item.value}</p>
              <p className={long.body}>{item.label}</p>
            </div>
          ))}
        </FadeIn>
      </section>

      <FadeIn from="up" className={styles.devices}>
        <img
          src={caseImage('gd2-devices')}
          alt="Product across tablet, desktop, phone and iMac"
        />
      </FadeIn>

      <section className={styles.journey}>
        <FadeIn as="p" from="up" className={`${long.kicker} ${styles.journeyTitle}`}>
          Transforming a linear learning experience into an interactive user journey
        </FadeIn>
        <FadeIn from="up" delay={60} className={`${long.body} ${styles.journeyBody}`}>
          <p>
            I was responsible for key user entry points: authentication, user profile, and the main
            marketing landing page.
          </p>
          <p>
            I designed core platform experiences, including task completion flows, the leaderboard,
            and teacher tools.
          </p>
        </FadeIn>
      </section>

      <div className={styles.mosaic}>
        <FadeIn from="up" className={styles.galleryRow}>
          <img
            src={caseImage('gd2-gallery-1')}
            alt="Marketing landing page, mobile profile and teacher dashboard"
          />
        </FadeIn>
        <FadeIn from="up" delay={80} className={styles.galleryBottom}>
          <img src={caseImage('gd2-funnels')} alt="Engagement funnels" />
          <img src={caseImage('gd2-tournament')} alt="Tournament table for schools and regions" />
          <div className={styles.cards}>
            <img src={caseImage('gd-card-shop')} alt="Supermarket location" />
            <img src={caseImage('gd-card-news')} alt="Newspaper editorial location" />
            <img src={caseImage('gd-card-home')} alt="Smart home location" />
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
