import cityMoscow from '../../assets/hero/city-moscow.png'
import portrait from '../../assets/hero/portrait.png'
import cityDubai from '../../assets/hero/city-dubai.png'
import arrows from '../../assets/hero/arrows.svg'
import bgTop from '../../assets/hero/bg-top.svg'
import bgCurve from '../../assets/hero/bg-curve.svg'
import FadeIn from '../FadeIn'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <img className={styles.bgCurve} src={bgCurve} alt="" />
      <img className={styles.bgTop} src={bgTop} alt="" />

      <nav className={styles.nav}>
        <a className={styles.navLink} href="#cases">
          Case studies
        </a>
        <a className={styles.navLink} href="/resume.pdf" download>
          Download Resume
        </a>
      </nav>

      <FadeIn className={styles.titleBlock} delay={40}>
        <h1 className={styles.senior}>Senior Product</h1>
        <p className={styles.script} aria-hidden="true">
          <span className={styles.scriptD}>D</span>
          <span className={styles.scriptRest}>esigner</span>
        </p>
        <p className={styles.name}>Daria Boiko</p>
      </FadeIn>

      <FadeIn className={styles.leads} delay={180}>
        <p>6+ years of turning complex user flows into products that feel effortless to use</p>
        <p>For the past 4+ years in&nbsp;enterprise EdTech</p>
      </FadeIn>

      <div className={styles.photos}>
        <figure className={styles.photo}>
          <img src={cityMoscow} alt="Moscow skyline" width={277} height={276} />
        </figure>
        <figure className={styles.photo}>
          <img src={portrait} alt="Daria Boiko" width={277} height={276} />
        </figure>
        <figure className={styles.photo}>
          <img src={cityDubai} alt="Dubai skyline with Burj Khalifa" width={277} height={276} />
        </figure>
        <img className={styles.arrows} src={arrows} alt="" width={384} height={129} />
      </div>
    </section>
  )
}
