import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import Shot from './Shot'
import cap from './Shot.module.scss'
import styles from './EduCase.module.scss'

const IMPACT = [
  { value: '150K+', label: 'users' },
  { value: '60+', label: 'regions of Russia' },
  { value: '63K', label: 'MAU' },
  { value: '78,9%', label: 'enter the main flow via the redesigned main page' },
]

const DECISIONS = [
  {
    title: '1. Increase engagement',
    text: 'I proposed adding lightweight widgets and adjacent content to give teachers more reasons to return to the platform and spend more time exploring it.',
    image: 'edu-p2-dec-1',
    alt: 'Widgets that increase engagement',
    caption: 'Homepage widgets: start a lesson, run it online, a timer and a prompt library',
  },
  {
    title: '2. Connect the platform to the Sber ecosystem',
    text: 'I introduced integrations with relevant Sber products to expand the homepage beyond the core learning experience and create additional value for users.',
    image: 'edu-p2-dec-2',
    alt: 'Sber ecosystem integrations',
    caption: 'Lesson analytics and student results right on the homepage',
  },
  {
    title: '3. Make the homepage adaptable',
    text: 'Instead of a fixed Bento Grid, I proposed a personalized workspace where teachers can add, hide and rearrange content blocks based on their workflow.',
    image: 'edu-p2-dec-3',
    alt: 'Adaptable personalized workspace',
    caption: 'A configurable workspace: lesson materials, experiments and quizzes',
  },
]

// Layouts follow the Figma "Адаптивы кейса 1" frames (1920 / 1280 / 1024 / 360).
// Breakpoints are container queries on the page width, so the scaled 1920px
// preview inside the laptop always shows the desktop layout.
export default function EduCase() {
  return (
    <article className={styles.page}>
      <section className={styles.intro}>
        <figure className={styles.hero}>
          <img
            src={caseImage('edu-hero')}
            alt="Laptop on an outdoor table showing the educational platform"
          />
          <figcaption className={cap.hidden}>
            The AI-driven learning platform for schoolchildren
          </figcaption>
        </figure>

        <div className={styles.introBody}>
          <FadeIn as="p" from="up" delay={80} className={`${styles.body} ${styles.lead}`}>
            Many educational platforms still rely on static learning experiences, while students
            already use AI tools like ChatGPT outside the learning environment. Students already
            use AI to learn — just outside the learning experience.
            <br />
            <br />
            I work across several learning scenarios, but one of the most interesting was goal
            setting and personalized learning trajectories.
          </FadeIn>

          <div className={styles.summary}>
            <FadeIn as="h3" from="up" delay={120} className={styles.title}>
              Case 1: AI-driven
              <br />
              educational platform
            </FadeIn>
            <div className={styles.challenge}>
              <FadeIn from="up" delay={180} className={styles.block}>
                <p className={styles.kicker}>The challenge:</p>
                <ul className={`${styles.body} ${styles.list}`}>
                  <li>Students struggled to see the value of goal setting</li>
                  <li>Traditional planners and trackers had low engagement</li>
                  <li>
                    We needed to make goal setting actionable rather than turning it into another
                    standalone planning tool
                  </li>
                </ul>
              </FadeIn>
              <FadeIn from="up" delay={240} className={styles.block}>
                <p className={styles.kicker}>My contribution:</p>
                <p className={styles.body}>
                  End-to-end Product Designer
                  <br />
                  <br />
                  I designed:
                  <br />
                  — goal-setting flow
                  <br />
                  — personalized learning trajectory
                  <br />— AI tutor interactions within assignments
                </p>
              </FadeIn>
            </div>
          </div>
        </div>

        <FadeIn from="up" className={styles.stats}>
          {IMPACT.map((item) => (
            <div key={item.value} className={styles.stat}>
              <p className={styles.statValue}>{item.value}</p>
              <p className={`${styles.body} ${styles.statLabel}`}>{item.label}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn from="up" delay={80} className={styles.screens}>
          <Shot
            src={caseImage('c1-screen-1')}
            alt="Coding task with the AI assistant panel"
            caption="AI chat helping a student with the task — hints and simpler explanations instead of ready answers"
          />
          <Shot
            src={caseImage('c1-screen-2')}
            alt="Goal page with the list of courses"
            caption="Course page: the personal learning trajectory built to reach the goal"
          />
          <Shot
            src={caseImage('edu-p1-ui-3')}
            alt="Goals page with other students' goals"
            caption="Goals page with a board of all students' goals, so they compete on who reaches theirs faster"
          />
        </FadeIn>

        <section className={styles.how}>
          <FadeIn as="p" from="up" className={styles.kicker}>
            How it works
          </FadeIn>
          <FadeIn as="p" from="up" delay={60} className={styles.body}>
            The experience connects AI directly to the learning journey:
          </FadeIn>
          <FadeIn as="ol" from="up" delay={100} className={`${styles.body} ${styles.list}`}>
            <li>AI helps students formulate a SMART goal directly within the product</li>
            <li>A personalized learning trajectory is generated based on that goal</li>
            <li>The system automatically populates the trajectory with relevant activities</li>
            <li>
              An AI tutor supports students inside each activity — guiding them through the task
              without simply giving away the answer
            </li>
          </FadeIn>
        </section>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementBg} aria-hidden="true">
          <img src={caseImage('edu-p1-sunset')} alt="" />
          <span className={styles.washGold} />
          <span className={styles.washAmber} />
        </div>
        <div className={styles.statementCopy}>
          <FadeIn as="h3" from="up" className={styles.statementTitle}>
            Helping kids believe in themselves
          </FadeIn>
          <FadeIn as="p" from="up" delay={80} className={`${styles.body} ${styles.statementBody}`}>
            The key design challenge was to make AI feel like part of the learning experience
            rather than another chatbot layered on&nbsp;top of the product
          </FadeIn>
        </div>
        <div className={styles.statementImages}>
          <FadeIn as="figure" from="up" delay={100} className={styles.classroom}>
            <img src={caseImage('edu-p1-classroom')} alt="Students working on laptops in class" />
            <figcaption className={cap.caption}>Students working with the platform in class</figcaption>
          </FadeIn>
          <FadeIn as="figure" from="up" delay={160} className={styles.platform}>
            <img src={caseImage('edu-p1-laptop')} alt="Laptop showing the student dashboard" />
            <figcaption className={cap.caption}>
              Teacher&apos;s view of the class: every student&apos;s progress in one list
            </figcaption>
          </FadeIn>
        </div>
      </section>

      <FadeIn as="section" from="up" className={styles.browsers}>
        <Shot
          src={caseImage('edu-p2-ui-1')}
          alt="AI-suggested steps towards the goal"
          caption="AI suggests 5+ steps towards the goal — the student keeps the ones that fit"
        />
        <Shot
          src={caseImage('edu-p2-ui-2')}
          alt="Student dashboard with progress by subject"
          caption="Student dashboard: current topic, progress across subjects and top skills"
        />
        <Shot
          src={caseImage('edu-p2-ui-3')}
          alt="Goal-setting screen"
          caption="Goal setting: the student describes a goal, AI checks it is specific, timed and measurable"
        />
      </FadeIn>

      <section className={styles.homepage}>
        <img
          className={styles.ipad}
          src={caseImage('edu-ipad')}
          alt="Redesigned teacher homepage on a tablet"
        />
        <div className={styles.homeInner}>
          <FadeIn from="up" className={styles.tags}>
            <span>Discover</span>
            <span>Engage</span>
            <span>Personalize</span>
          </FadeIn>
          <div className={styles.homeDetails}>
            <FadeIn as="h3" from="up" delay={60} className={styles.homeTitle}>
              <span className={styles.homeLead}>+ most recent task:</span>{' '}
              <span className={styles.homeScript}>homepage</span>
            </FadeIn>
            <FadeIn from="up" delay={120} className={styles.homeText}>
              <p className={styles.body}>
                2 months after launch, users were struggling to understand what they could do on
                the platform – on the click maps and analysing scroll behavior I’ve noticed
                crusial loss of users
              </p>
              <p className={styles.body}>
                The homepage was trying to serve everyone with the same hierarchy
              </p>
              <p className={styles.body}>
                My contribution: Trying to make the homepage adapted to each teacher&apos;s
                workflow
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={styles.decisions}>
        <FadeIn as="p" from="up" className={styles.kicker}>
          Key product decisions
        </FadeIn>
        <FadeIn from="up" delay={60} className={styles.decisionGrid}>
          {DECISIONS.map((item) => [
            <p key={`${item.image}-text`} className={`${styles.body} ${styles.decisionText}`}>
              {item.title}
              <br />
              {item.text}
            </p>,
            <Shot
              key={`${item.image}-img`}
              imgClassName={styles.decisionImage}
              src={caseImage(item.image)}
              alt={item.alt}
              caption={item.caption}
            />,
          ])}
        </FadeIn>
      </section>
    </article>
  )
}
