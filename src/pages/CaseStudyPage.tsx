import { Link, Navigate, useParams } from "react-router-dom";
import { getCaseStudy } from "../data/caseStudies";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Tag } from "../components/Tag";

export function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const isPlaceholder = study.status === "placeholder";

  return (
    <article className="case-page">
      <Container>
        <Link className="case-page__back" to="/#work">
          ← Back to work
        </Link>

        <header className="case-page__header">
          <div className="case-page__meta">
            <span>{study.company}</span>
            <span aria-hidden="true">·</span>
            <span>{study.role}</span>
          </div>

          <h1 className="case-page__title">{study.title}</h1>
          <p className="case-page__subtitle">{study.subtitle}</p>

          <div className="case-page__tags">
            {study.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          {isPlaceholder ? (
            <p className="case-page__notice">
              This case study is in progress. Content below is a structural placeholder — replace
              with final narrative, visuals, and verified metrics.
            </p>
          ) : null}
        </header>

        <div className="case-page__visual">
          {study.previewFrame ? (
            <div className="case-preview__device case-preview__device--page">
              <img className="case-preview__device-frame" src={study.previewFrame} alt="" aria-hidden="true" />
              <div className="case-preview__device-screen">
                <img src={study.previewImage} alt={`Preview of ${study.title}`} />
              </div>
            </div>
          ) : (
            <img className="case-page__image" src={study.previewImage} alt={`Preview of ${study.title}`} />
          )}
        </div>

        <div className="case-page__story">
          <section className="case-page__block">
            <h2>Problem</h2>
            <p>{study.problem}</p>
          </section>

          <section className="case-page__block">
            <h2>Outcome</h2>
            <p>{study.outcome}</p>
            {study.impact ? <p className="case-page__impact">{study.impact}</p> : null}
          </section>
        </div>

        <footer className="case-page__footer">
          <Button to="/#contact">Discuss this project</Button>
          <Button to="/#work" variant="text">
            View more work
          </Button>
        </footer>
      </Container>
    </article>
  );
}
