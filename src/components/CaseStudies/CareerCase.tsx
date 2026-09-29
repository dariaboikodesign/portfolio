import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import long from './CaseLong.module.scss'
import styles from './CareerCase.module.scss'

const FINDINGS = [
  {
    num: '01',
    title: 'Too much effort',
    text: 'Teens quickly lost focus during long tests and complex flows',
  },
  {
    num: '02',
    title: 'Low trust',
    text: "Parents didn't trust anonymous automated recommendations with such an important decision",
  },
  {
    num: '03',
    title: 'Human guidance mattered most',
    text: 'The most valuable part was talking to a specialist who could interpret the results and recommend realistic options',
  },
]

const DECISIONS_LEFT = [
  '1. Assess',
  'Short test built with career counselors.',
  '',
  '2. Prepare',
  'Counselor sees the results before the session.',
]

const DECISIONS_RIGHT = [
  '3. Guide',
  'Structured consultation with recommendations.',
  '',
  '4. Recommend',
  'Test + expert feedback → final recommendation.',
]

export default function CareerCase() {
  return (
    <article className={`${long.page} ${styles.page}`}>
      <section className={styles.hero}>
        <div className={styles.heroPhoto}>
          <img src={caseImage('c4-hero')} alt="Career guidance platform on a laptop" />
          <span className={styles.heroGradient} aria-hidden />
        </div>

        <div className={styles.heroOverlay}>
          <FadeIn as="h3" from="up" delay={80} className={`${long.displayGold} ${styles.title}`}>
            Case 4: Career
            <br />
            guidance for&nbsp;teens
          </FadeIn>

          <div className={styles.heroGrid}>
            <FadeIn from="up" delay={120} className={styles.heroLeft}>
              <p className={`${long.kicker} ${styles.lead}`}>Tasks:</p>
              <p className={`${long.body} ${styles.copy}`}>
                On the old platform, we tested a &quot;Big Challenges&quot; format — 6 courses in
                different fields where students could pick and complete one or several as a mix of
                soft skills and subject knowledge, plus a connected metaverse. However, we faced
                platform limitations and low conversions.
              </p>
              <p className={styles.highlight}>
                Despite this, some teens completed the courses, gave positive feedback, and even
                switched their challenge paths, which revealed a clear interest in career
                exploration and self-discovery.
              </p>
            </FadeIn>

            <FadeIn from="up" delay={180} className={styles.heroRight}>
              <p className={`${long.kicker} ${styles.lead}`}>My contribution:</p>
              <p className={`${long.body} ${styles.copy}`}>
                Competitor research, user problem mapping, job stories, hypothesis building, user
                interviews, UX flows, visual concepts, component design, and delivery supervision
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <FadeIn as="p" from="up" className={`${long.kicker} ${styles.lead}`}>
          Our initial hypothesis:
        </FadeIn>
        <FadeIn as="p" from="up" delay={60} className={`${long.body} ${styles.copy} ${styles.hypothesis}`}>
          The more we learn about a student, the more accurate their career recommendations will be
        </FadeIn>
        <FadeIn from="up" delay={100} className={styles.protoShot}>
          <img src={caseImage('c4-proto')} alt="Low-fidelity prototype screens" />
        </FadeIn>
      </section>

      <section className={styles.section}>
        <FadeIn as="p" from="up" className={`${long.kicker} ${styles.lead}`}>
          Users didn&apos;t want another career test
        </FadeIn>
        <FadeIn as="p" from="up" delay={60} className={`${long.body} ${styles.copy}`}>
          Prototype interviews revealed three important things:
        </FadeIn>

        <FadeIn from="up" delay={100} className={styles.findings}>
          {FINDINGS.map((item) => (
            <div key={item.num} className={styles.finding}>
              <p className={styles.findingNum}>{item.num}</p>
              <p className={`${long.body} ${styles.copy}`}>
                {item.title}
                <br />
                {item.text}
              </p>
            </div>
          ))}
        </FadeIn>

        <FadeIn from="up" delay={140} className={styles.interviewShots}>
          <img src={caseImage('c4-interview-1')} alt="Annotated prototype feedback" />
          <img src={caseImage('c4-interview-2')} alt="Interview insights on sticky notes" />
        </FadeIn>
      </section>

      <section className={styles.section}>
        <FadeIn as="p" from="up" className={`${long.kicker} ${styles.lead}`}>
          KEY DESIGN DECISIONS:
        </FadeIn>
        <FadeIn from="up" delay={60} className={styles.decisionCols}>
          <p className={`${long.body} ${styles.copy}`}>
            {DECISIONS_LEFT.map((line, index) => (
              <span key={`left-${index}`}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <p className={`${long.body} ${styles.copy}`}>
            {DECISIONS_RIGHT.map((line, index) => (
              <span key={`right-${index}`}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </FadeIn>
      </section>

      <section className={styles.results}>
        <FadeIn from="up" className={styles.resultsLeft}>
          <img src={caseImage('c4-results-1')} alt="Consultation scheduling dashboard" />
        </FadeIn>
        <FadeIn from="up" delay={60} className={styles.resultsCopy}>
          <p>In 2 months:</p>
          <p>16 000 users with no marketing</p>
          <p>1 160 consultation requests</p>
          <p>58% request → payment conversion</p>
          <p>350 000 ₽ revenue</p>
        </FadeIn>
        <FadeIn from="up" delay={80} className={styles.resultsRight}>
          <img src={caseImage('c4-results-2')} alt="Consultation booking modal" />
        </FadeIn>
        <FadeIn from="up" delay={100} className={styles.resultsBottom}>
          <img src={caseImage('c4-results-3')} alt="Career recommendation radar chart" />
        </FadeIn>
      </section>

      <section className={styles.closing}>
        <FadeIn from="up" className={styles.closingHead}>
          <p className={`${long.kicker} ${styles.lead}`}>
            The product turned career uncertainty into a paid expert-guidance experience.
          </p>
          <div className={styles.closingText}>
            <p className={`${long.body} ${styles.copy}`}>
              Don&apos;t be afraid to cut back on features for the MVP and refine them later—at
              first, the product seemed more interesting with a complex use case, but users needed
              a single, clear, and valuable result right here and now. Simplicity led to higher
              conversion rates and speed.
            </p>
            <p className={`${long.body} ${styles.copy}`}>
              Live interviews with users and experts are essential both before and after launch—they
              helped us weed out unworkable hypotheses, refine the visuals before launch, and
              quickly adjust the user flow.
            </p>
          </div>
        </FadeIn>

        <FadeIn from="up" delay={80} className={styles.finalShots}>
          <img src={caseImage('c4-final-1')} alt="Mobile career guidance interface" />
          <img src={caseImage('c4-final-2')} alt="How it works screen" />
          <img src={caseImage('c4-final-3')} alt="Lifestyle shot with laptop" />
        </FadeIn>
      </section>
    </article>
  )
}
