import type { Capability } from "../data/capabilities";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type CapabilitiesSectionProps = {
  items: Capability[];
};

export function CapabilitiesSection({ items }: CapabilitiesSectionProps) {
  return (
    <section className="capabilities" id="approach" aria-labelledby="approach-heading">
      <Container>
        <Reveal>
          <SectionHeading serif="How I work" script="complex → simple" />
        </Reveal>

        <p className="capabilities__intro">
          The portfolio should demonstrate the same skill I bring to product work: clarity from
          ambiguity, structure without rigidity, and craft in service of outcomes.
        </p>

        <ul className="capabilities__grid">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <li className="capability">
                <h3 className="capability__title">{item.title}</h3>
                <p className="capability__desc">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
