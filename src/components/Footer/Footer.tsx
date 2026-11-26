import { linkedInUrl, resumeUrl } from '../../data/contact'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>Let’s create something extra</h2>
      <p className={styles.intro}>
        Have a project in mind, looking for design mentorship, or just want to say hi? I’d love to hear from you
      </p>

      <div className={styles.links}>
        <nav className={styles.navigation} aria-label="Footer">
          <a href="#cases">Case studies</a>
          <a href={resumeUrl} download>Download Resume</a>
        </nav>
        <dl className={styles.contacts}>
          <div><dt>LinkedIn</dt><dd><a href={linkedInUrl}>Daria Boiko</a></dd></div>
          <div><dt>Telegram</dt><dd><a href="https://t.me/dashafreelasha">@dashafreelasha</a></dd></div>
          <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/dasha_freelasha/">@dasha_freelasha</a></dd></div>
          <div><dt>Email</dt><dd><a href="mailto:dariaboikodesign@gmail.com">dariaboikodesign@gmail.com</a></dd></div>
        </dl>
      </div>
    </footer>
  )
}
