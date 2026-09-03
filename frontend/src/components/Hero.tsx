import { useCallback, useRef } from "react";
import heroBg from "../assets/hero-bg.png";
import glowHero from "../assets/glow-hero.svg";
import overlayTexture from "../assets/overlay-texture.svg";
import { Button } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export function Hero() {
  const scriptRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reducedMotion || !scriptRef.current) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scriptRef.current.style.transform = `translate(${x * 12}px, ${y * 8}px)`;
    },
    [reducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    if (scriptRef.current) {
      scriptRef.current.style.transform = "";
    }
  }, []);

  return (
    <section
      className="hero"
      aria-labelledby="hero-heading"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero__media" aria-hidden="true">
        <img className="hero__photo" src={heroBg} alt="" />
        <div className="hero__fade" />
        <img className="hero__texture" src={overlayTexture} alt="" />
        <img className="hero__glow" src={glowHero} alt="" />
      </div>

      <Container className="hero__container">
        <Reveal>
          <p className="hero__meta">Senior Product Designer · Enterprise EdTech · AI · Product Design</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 id="hero-heading" className="hero__statement">
            <span className="hero__complex">5+ years of turning complex product problems</span>{" "}
            <span className="hero__simple">into simple, intuitive experiences.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="hero__support">
            4+ years designing enterprise EdTech products across learning, AI, and teacher workflows.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="hero__identity">
            <p className="hero__name-line">
              <span className="hero__name-serif">Daria Boiko</span>
              <span ref={scriptRef} className="hero__name-script">
                Designer
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="hero__actions">
            <Button to="/#work">View selected work</Button>
            <Button href="#" variant="text">
              Download resume
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
