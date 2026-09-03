import { Button } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <Container>
        <Reveal>
          <SectionHeading serif="Contact" />
        </Reveal>

        <div className="contact__layout">
          <Reveal delay={80}>
            <div className="contact__actions">
              <Button to="/#work">Case studies</Button>
              <Button href="#">Download resume</Button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="contact__list">
              <div className="contact__row">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:dariaboikodesign@gmail.com">dariaboikodesign@gmail.com</a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>LinkedIn</dt>
                <dd>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    Daria Boyco
                  </a>
                </dd>
              </div>
              <div className="contact__row">
                <dt>Telegram</dt>
                <dd>
                  <a href="https://t.me/dashafreelasha" target="_blank" rel="noreferrer">
                    @dashafreelasha
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
