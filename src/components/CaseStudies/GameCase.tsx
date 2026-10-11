import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import styles from './GameCase.module.scss'

const STATS = [
  { ghost: '30–50', value: '63–67%', label: 'entered the content' },
  { ghost: '15–25', value: '26–32%', label: 'finished the first 10 lessons' },
  { ghost: '5–10', value: '12–15%', label: 'completed all course' },
]

// Layouts follow the Figma "Адаптивы кейса 2" frames (1920 / 1280 / 1024 / 360).
// Breakpoints are container queries on the page width, so the scaled 1920px
// preview inside the laptop always shows the desktop layout.
export default function GameCase() {
  return (
    <article className={styles.page}>
      <section className={styles.intro}>
        <div className={styles.heroComp}>
          <FadeIn as="h3" from="up" className={styles.title}>
            Case 2:
            <br className={styles.titleBreak} /> Creating gamified educational platform
          </FadeIn>
          <FadeIn as="p" from="up" delay={80} className={styles.subtitle}>
            Functional Literacy Marathon
          </FadeIn>

          <div className={styles.stage} aria-hidden="true">
            <img className={styles.glow} src={caseImage('gd2-glow-2')} alt="" />
            <img className={styles.glowSoft} src={caseImage('gd2-glow-1')} alt="" />
            {/* 1920: laptop and phone tilted separately; smaller frames use the flat composite. */}
            <img className={styles.heroComposite} src={caseImage('gd3-hero')} alt="" />
            <img className={styles.laptop} src={caseImage('gd3-laptop')} alt="" />
            <img className={styles.phone} src={caseImage('gd3-phone')} alt="" />
          </div>
        </div>

        <div className={styles.summary}>
          <FadeIn from="up" delay={120} className={styles.overview}>
            <p className={styles.body}>
              How we created a cool looking interesting online course, using old-style boring
              materials on the last platform
            </p>
            <div className={styles.block}>
              <p className={styles.kicker}>My contribution:</p>
              <p className={styles.body}>
                End-to-end: from researching till concepts and final realisation user interfaces
                and main flow
              </p>
            </div>
          </FadeIn>

          <FadeIn from="up" delay={160} className={styles.tasks}>
            <p className={styles.kicker}>Tasks:</p>
            <ul className={`${styles.body} ${styles.list}`}>
              <li>
                Test the hypothesis: Can we increase learner engagement and improve learning
                outcomes by redesigning the format and user experience?
              </li>
              <li>
                Validate the hypothesis: Can changes to the content format and user experience
                improve user engagement and learning effectiveness?
              </li>
            </ul>
            <p className={`${styles.body} ${styles.constraint}`}>
              Extra tight deadlines, a legacy monolithic platform, and existing content that
              couldn&apos;t be fully redesigned
            </p>
          </FadeIn>
        </div>
      </section>

      <section className={styles.concept}>
        <div className={styles.conceptNotes}>
          <FadeIn from="up" className={styles.noteCol}>
            <p className={styles.body}>
              I proposed a 3D world concept where each building represented a specific course
              topic
            </p>
            <p className={styles.body}>In one month we went through all stages of forming a product:</p>
          </FadeIn>
          <FadeIn as="ul" from="up" delay={80} className={`${styles.body} ${styles.list} ${styles.noteCol}`}>
            <li>
              Early launch enables faster improvements.
              <br />
              The Friends &amp; Family stage helped us collect real user feedback and identify 82
              critical bugs before scaling the product.
            </li>
            <li>
              Build flexibility into the product from the start.
              <br />
              The 3D map and expandable panels allowed us to quickly adapt the interface for
              different states and devices without major redesigns.
            </li>
          </FadeIn>
        </div>

        <FadeIn from="up" className={styles.research}>
          <div className={`${styles.panel} ${styles.panelBoard}`}>
            <img className={styles.miro} src={caseImage('gd-miro')} alt="Idea generation board" />
            <img className={styles.flow} src={caseImage('gd-flow')} alt="User flow diagram" />
          </div>
          <div className={`${styles.panel} ${styles.panelStates}`}>
            <img
              className={styles.states}
              src={caseImage('gd-map-ui')}
              alt="3D world interface in different states"
            />
          </div>
        </FadeIn>
      </section>

      <section className={styles.benchmarks}>
        <FadeIn as="h3" from="up" className={styles.compare}>
          Comparison of our data
          <br className={styles.titleBreak} /> with real market benchmarks showed that our income
          was competitive
        </FadeIn>
        <FadeIn from="up" delay={80} className={styles.statRow}>
          {STATS.map((item) => (
            <div key={item.value} className={styles.stat}>
              <p className={styles.ghost}>{item.ghost}</p>
              <p className={styles.statValue}>{item.value}</p>
              <p className={`${styles.body} ${styles.statLabel}`}>{item.label}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn from="up" className={styles.launch}>
          <img
            className={styles.launchTablet}
            src={caseImage('gd3-tablet')}
            alt="Course test on a tablet"
          />
          <div className={styles.launchStack}>
            <img src={caseImage('gd3-desktop')} alt="Student progress on a desktop monitor" />
            <img src={caseImage('gd3-mobile')} alt="Virtual city on a phone in the classroom" />
          </div>
          <img
            className={styles.launchImac}
            src={caseImage('gd3-imac')}
            alt="Olympiad preparation page on an iMac"
          />
        </FadeIn>
      </section>

      <section className={styles.journey}>
        <FadeIn as="p" from="up" className={`${styles.kicker} ${styles.journeyTitle}`}>
          Transforming a linear learning experience into an interactive user journey
        </FadeIn>
        <FadeIn as="p" from="up" delay={60} className={`${styles.body} ${styles.journeyBody}`}>
          I was responsible for key user entry points: authentication, user profile, and the main
          marketing landing page. <br className={styles.titleBreak} />I designed core platform
          experiences, including task completion flows, the leaderboard, and teacher tools.
        </FadeIn>

        <div className={styles.gallery}>
          <FadeIn from="up" className={styles.galleryTop}>
            <img src={caseImage('gd-landing')} alt="Marketing landing page on a laptop" />
            <img src={caseImage('gd3-auth')} alt="Authentication and profile screens" />
            <img src={caseImage('gd-dashboard')} alt="Teacher dashboard on a laptop" />
          </FadeIn>
          <FadeIn from="up" delay={80} className={styles.galleryBottom}>
            <img src={caseImage('gd-funnels')} alt="Engagement funnels" />
            <img src={caseImage('gd-tournament')} alt="Tournament table for schools and regions" />
            <img
              className={styles.cards}
              src={caseImage('gd2-cards-col')}
              alt="Course locations: supermarket, newspaper editorial, smart home"
            />
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
