import { caseStudies } from "../data/caseStudies";
import { capabilities } from "../data/capabilities";
import { experience } from "../data/experience";
import { AboutSection } from "../components/AboutSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { CaseStudyPreview } from "../components/CaseStudyPreview";
import { ContactSection } from "../components/ContactSection";
import { Container } from "../components/Container";
import { Hero } from "../components/Hero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import glowBottom from "../assets/glow-bottom.svg";

export function HomePage() {
  return (
    <>
      <Hero />

      <section className="work" id="work" aria-labelledby="work-heading">
        <Container>
          <Reveal>
            <SectionHeading serif="Selected work" script="product stories" />
          </Reveal>
          <p className="work__intro">
            Case studies focused on product problems, not feature lists. Each project shows how I
            simplify complexity for users and teams.
          </p>

          <div className="work__list">
            {caseStudies.map((study, index) => (
              <CaseStudyPreview key={study.slug} study={study} index={index} />
            ))}
          </div>
        </Container>
        <img className="work__glow" src={glowBottom} alt="" aria-hidden="true" />
      </section>

      <AboutSection items={experience} />
      <CapabilitiesSection items={capabilities} />
      <ContactSection />
    </>
  );
}
