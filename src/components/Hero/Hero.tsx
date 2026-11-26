import { linkedInUrl, resumeUrl } from '../../data/contact'
import backdrop from '../../assets/hero/redesign/backdrop.webp'
import blink from '../../assets/hero/redesign/blink.webp'
import blinkFrame0 from '../../assets/hero/redesign/blink-frame-0.webp'
import blinkFrame1 from '../../assets/hero/redesign/blink-frame-1.webp'
import blinkFrame2 from '../../assets/hero/redesign/blink-frame-2.webp'
import portrait from '../../assets/hero/redesign/portrait.webp'
import styles from './Hero.module.scss'

const signatureStrokes = [
  // Downstroke and lower loop of the capital D.
  { path: 'M416 180 C456 161 460 119 424 114 C365 101 305 166 245 228 C192 283 139 330 85 347 C43 363 5 349 3 329 C1 311 41 313 81 326 C97 331 111 336 125 337', width: 17, start: 0, duration: 640 },
  // Counter and entry flourish of the D.
  { path: 'M89 132 C122 103 167 83 213 82 C251 81 264 99 263 125 C263 165 235 197 199 216 C167 230 135 224 138 201 C143 173 177 143 221 126 C273 98 321 110 345 131 C376 166 361 212 334 255 C298 306 243 337 180 340 C160 342 145 341 122 337', width: 18, start: 660, duration: 800 },
  { path: 'M389 300 C370 286 345 300 333 320 C313 352 354 327 396 297 C384 311 365 327 365 332 C365 342 389 327 406 318', width: 13, start: 1490, duration: 290 },
  { path: 'M412 317 C423 309 441 302 445 293 C433 291 429 307 439 305 C448 304 460 299 452 311 C443 319 426 331 428 336 C433 342 462 328 475 319', width: 13, start: 1790, duration: 255 },
  { path: 'M507 298 C494 307 478 324 477 332 C475 341 501 329 517 318', width: 13, start: 2050, duration: 165 },
  { path: 'M581 300 C562 286 536 301 525 320 C505 352 549 325 589 297 C576 312 557 327 557 332 C557 341 581 328 599 317', width: 13, start: 2215, duration: 290 },
  // Dot the i after the connected lowercase letters.
  { path: 'M517 283 L524 277', width: 9, start: 2565, duration: 95 },
]

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
        <div className={styles.blink}>
          <img className={styles.blinkFirst} src={blinkFrame0} alt="" />
          <img className={styles.blinkSecond} src={blinkFrame1} alt="" />
          <img className={styles.blinkThird} src={blinkFrame2} alt="" />
          <img className={styles.blinkClosed} src={blink} alt="" />
        </div>
      </div>
      <header className={styles.heading}>
        <h1 className={styles.role}>Senior Product Designer</h1>
        <svg className={styles.signatureMask} aria-hidden="true" focusable="false">
          <defs>
            <mask id="hero-signature-strokes" maskContentUnits="objectBoundingBox" x="-0.06" y="-0.6" width="1.12" height="1.8" style={{ maskType: 'alpha' }}>
              <g transform="scale(0.001643 0.002721) translate(0 -24.55)" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round">
                {signatureStrokes.map(({ path, width, start, duration }) => (
                  <path
                    key={path}
                    className={styles.signatureStroke}
                    d={path}
                    pathLength={1}
                    strokeWidth={width}
                    style={{ animationDelay: `${200 + start}ms`, animationDuration: `${duration}ms` }}
                  />
                ))}
              </g>
              <rect className={styles.signatureComplete} x="-0.06" y="-0.6" width="1.12" height="1.8" fill="white" />
            </mask>
          </defs>
        </svg>
        <p className={styles.name}><span>D</span>aria</p>
      </header>
      <nav className={styles.nav} aria-label="Portfolio">
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={resumeUrl} download>Download Resume</a>
        <a href="#cases">Cases</a>
      </nav>
      <div className={styles.intro}>
        <p className={styles.statement}>
          <span>I make AI tools and<br className={styles.desktopBreak} /> complex workflows</span>{' '}
          <span>easier to use</span>
        </p>
        <div className={styles.experience}>
          <p>6+ years of turning complex user flows into products that feel effortless to use</p>
          <p>For the past 4+ years in&nbsp;enterprise EdTech</p>
        </div>
      </div>
    </section>
  )
}
