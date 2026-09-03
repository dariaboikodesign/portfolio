import type { ExperienceEntry } from "../data/experience";
import portrait from "../assets/portrait.png";
import deskPhoto from "../assets/desk-photo.png";
import { aboutCopy } from "../data/experience";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type TimelineProps = {
  items: ExperienceEntry[];
};

export function AboutSection({ items }: TimelineProps) {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <Container>
        <Reveal>
          <SectionHeading serif="Design rooted in" script="structured thinking" />
        </Reveal>

        <div className="about__layout">
          <div className="about__story">
            <Reveal delay={80}>
              <div className="about__photo about__photo--portrait">
                <img src={portrait} alt="Daria Boiko" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="about__text">{aboutCopy.designPath}</p>
            </Reveal>
          </div>

          <div className="about__story about__story--center">
            <Reveal delay={100}>
              <p className="about__text">
                Studying Fundamental <strong>Physics in English</strong> at MPGU trained me to think in
                systems, work with uncertainty, and solve complex problems step by step.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="about__photo about__photo--desk">
                <img src={deskPhoto} alt="Daria working at her desk" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <p className="about__text">{aboutCopy.craft}</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ol className="timeline" aria-label="Experience timeline">
              <div className="timeline__line" aria-hidden="true" />
              {items.map((item) => (
                <li key={item.role} className={`timeline__item ${item.highlight ? "timeline__item--current" : ""}`}>
                  <span className="timeline__tick" aria-hidden="true" />
                  <div>
                    <p className="timeline__role">{item.role}</p>
                    <p className="timeline__period">{item.period}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
