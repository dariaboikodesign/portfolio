import backdrop from '../../assets/hero/redesign/backdrop.webp'
import blink from '../../assets/hero/redesign/blink.webp'
import portrait from '../../assets/hero/redesign/portrait.webp'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      <div className={styles.artwork} aria-hidden="true">
        <img className={styles.backdrop} src={backdrop} alt="" fetchPriority="high" />
        <div className={styles.shadeRight} />
        <div className={styles.shadeLeft} />
        <img className={styles.portrait} src={portrait} alt="" />
        <div className={styles.shadeBottom} />
        <div className={styles.shadeTop} />
        <div className={styles.blink}><img src={blink} alt="" /></div>
      </div>
      <header className={styles.heading}>
        <h1 className={styles.role}>Senior Product Designer</h1>
        <p className={styles.name}><span>D</span>aria</p>
      </header>
      <nav className={styles.nav} aria-label="Portfolio">
        <a href="https://www.linkedin.com/in/daria-boyko-08uxdesign" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="/Daria_Boyko_resume.pdf" download>Download Resume</a>
        <a href="#cases">Cases</a>
      </nav>
      <p className={styles.statement}>I make AI tools and complex workflows easier to use</p>
      <div className={styles.experience}>
        <p>6+ years of turning complex user flows into products that feel effortless to use</p>
        <p>For the past 4+ years in enterprise EdTech</p>
      </div>
    </section>
  )
}
