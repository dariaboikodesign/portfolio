import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import long from './CaseLong.module.scss'
import styles from './EduCase.module.scss'

const IMPACT = [
  { value: '150K+', label: 'users' },
  { value: '60+', label: 'regions of Russia' },
  { value: '63k', label: 'MAU' },
  { value: '78,9%', label: 'enter the main flow via the redesigned main page' },
]

export default function EduCase() {
  return (
    <article className={`${long.page} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroPhoto}>
          <img
            src={caseImage('edu-hero')}
            alt="Laptop on an outdoor table showing the educational platform"
          />
        </div>

        <div className={styles.heroCopy}>
          <FadeIn as="p" from="up" delay={80} className={`${long.body} ${styles.intro}`}>
            Many educational platforms still rely on static learning experiences, while students
            already use AI tools like ChatGPT outside the learning environment.
            <br />
            Students already use AI to learn — just <u>outside the learning experience.</u>
            <br />
            <br />
            I work across several learning scenarios, but one of the most interesting was goal
            setting and personalized learning trajectories.
          </FadeIn>

          <div className={styles.heroRight}>
            <FadeIn as="h3" from="up" delay={120} className={`${long.displayGold} ${styles.title}`}>
              Case 1: AI-driven
              <br />
              educational platform
            </FadeIn>
            <FadeIn from="up" delay={180} className={long.stack}>
              <p className={long.kicker}>The challenge:</p>
              <ul className={long.list}>
                <li>Students struggled to see the value of goal setting</li>
                <li>Traditional planners and trackers had low engagement</li>
                <li>
                  We needed to make goal setting actionable rather than turning it into another
                  standalone planning tool
                </li>
              </ul>
            </FadeIn>
            <FadeIn from="up" delay={240} className={`${long.stack} ${styles.contrib}`}>
              <p className={long.kicker}>My contribution:</p>
              <p className={long.body}>
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
      </section>

      <FadeIn from="up" className={long.metrics}>
        {IMPACT.map((item) => (
          <div key={item.value}>
            <p className={long.metricValue}>{item.value}</p>
            <p className={long.metricLabel}>{item.label}</p>
          </div>
        ))}
      </FadeIn>

      <FadeIn from="up" delay={80} className={styles.uiRow}>
        <img src={caseImage('c1-screen-1')} alt="Goal-setting exercise with AI tutor" />
        <img src={caseImage('c1-screen-2')} alt="Python lesson with AI assistant" />
        <img src={caseImage('edu-p1-ui-3')} alt="Achievements and goal-setting landing" />
      </FadeIn>

      <section className={styles.how}>
        <FadeIn as="p" from="up" className={long.kicker}>
          How it works
        </FadeIn>
        <FadeIn as="p" from="up" delay={60} className={long.body}>
          The experience connects AI directly to the learning journey:
        </FadeIn>
        <FadeIn as="ol" from="up" delay={100} className={long.alpha}>
          <li>AI helps students formulate a SMART goal directly within the product</li>
          <li>A personalized learning trajectory is generated based on that goal</li>
          <li>The system automatically populates the trajectory with relevant activities</li>
          <li>
            An AI tutor supports students inside each activity — guiding them through the task
            without simply giving away the answer
          </li>
        </FadeIn>
      </section>

      <section className={styles.sunset}>
        <div className={styles.sunsetBg}>
          <img src={caseImage('edu-p1-sunset')} alt="" />
          <span className={styles.sunsetWashGold} />
          <span className={styles.sunsetWashAmber} />
        </div>
        <div className={styles.sunsetCopy}>
          <FadeIn as="h3" from="up" className={styles.sunsetTitle}>
            helping kids believe in themselves
          </FadeIn>
          <FadeIn as="p" from="up" delay={80} className={`${long.body} ${styles.sunsetBody}`}>
            The key design challenge was to make AI feel like part of the learning experience
            rather than another chatbot layered on&nbsp;top of the product
          </FadeIn>
        </div>
        <div className={styles.sunsetPhotos}>
          <FadeIn from="up" delay={100} className={styles.classroom}>
            <img src={caseImage('edu-p1-classroom')} alt="Students working on laptops in class" />
          </FadeIn>
          <FadeIn from="up" delay={160} className={styles.dashboard}>
            <img
              src={caseImage('edu-p1-laptop')}
              alt="Laptop showing the student dashboard"
            />
          </FadeIn>
        </div>
      </section>

      <section className={styles.lower}>
        <FadeIn from="up" className={styles.uiTrio}>
          <img src={caseImage('edu-p2-ui-1')} alt="Goal-setting flow in the product" />
          <img src={caseImage('edu-p2-ui-2')} alt="Teacher dashboard widgets" />
          <img src={caseImage('edu-p2-ui-3')} alt="Personalized homepage workspace" />
        </FadeIn>

        <div className={styles.homepage}>
          <FadeIn from="up" className={styles.homepageCopy}>
            <div className={styles.tags}>
              <span>Discover</span>
              <span>Engage</span>
              <span>Personalize</span>
            </div>
            <div className={styles.homepageMain}>
              <h3 className={`${long.displayGold} ${styles.homepageTitle}`}>
                + most recent task: Homepage
              </h3>
              <div className={styles.homepageText}>
                <p className={long.body}>
                  2 months after launch, users were struggling to understand what they could do on
                  the platform – on the click maps and analysing scroll behavior I’ve noticed
                  crusial loss of users
                </p>
                <p className={long.body}>
                  The homepage was trying to serve everyone with the same hierarchy
                </p>
                <p className={long.body}>
                  My contribution: Trying to make the homepage adapted to each teacher&apos;s
                  workflow
                </p>
              </div>
            </div>
          </FadeIn>
          <FadeIn from="up" delay={80} className={styles.homepageShot}>
            <img src={caseImage('edu-p2-homepage')} alt="Redesigned teacher homepage" />
          </FadeIn>
        </div>

        <div className={styles.decisions}>
          <FadeIn as="p" from="up" className={long.kicker}>
            Key product decisions
          </FadeIn>
          <FadeIn from="up" delay={60} className={styles.decisionCols}>
            <p className={long.body}>
              1. Increase engagement
              <br />
              I proposed adding lightweight widgets and adjacent content to give teachers more
              reasons to return to the platform and spend more time exploring it.
            </p>
            <p className={long.body}>
              2. Connect the platform to the Sber ecosystem
              <br />
              I introduced integrations with relevant Sber products to expand the homepage beyond
              the core learning experience and create additional value for users.
            </p>
            <p className={long.body}>
              3. Make the homepage adaptable
              <br />
              Instead of a fixed Bento Grid, I proposed a personalized workspace where teachers can
              add, hide and rearrange content blocks based on their workflow.
            </p>
          </FadeIn>
          <FadeIn from="up" delay={100} className={styles.decisionShots}>
            <img src={caseImage('edu-p2-dec-1')} alt="Widgets that increase engagement" />
            <img src={caseImage('edu-p2-dec-2')} alt="Sber ecosystem integrations" />
            <img src={caseImage('edu-p2-dec-3')} alt="Adaptable personalized workspace" />
          </FadeIn>
        </div>
      </section>
    </article>
  )
}
