import { Link } from "react-router-dom";
import type { CaseStudy } from "../data/caseStudies";
import { Reveal } from "./Reveal";
import { Tag } from "./Tag";

type CaseStudyPreviewProps = {
  study: CaseStudy;
  index: number;
};

export function CaseStudyPreview({ study, index }: CaseStudyPreviewProps) {
  const isFeatured = study.layout === "featured";
  const isPlaceholder = study.status === "placeholder";

  return (
    <Reveal delay={index * 80}>
      <article className={`case-preview ${isFeatured ? "case-preview--featured" : ""}`}>
        <Link className="case-preview__link" to={`/work/${study.slug}`} aria-label={`View case study: ${study.title}`}>
          <div className="case-preview__visual">
            {study.previewFrame ? (
              <div className="case-preview__device">
                <img className="case-preview__device-frame" src={study.previewFrame} alt="" aria-hidden="true" />
                <div className="case-preview__device-screen">
                  <img src={study.previewImage} alt="" loading="lazy" />
                </div>
              </div>
            ) : (
              <div className="case-preview__image-wrap">
                <img src={study.previewImage} alt="" loading="lazy" />
              </div>
            )}
            {isPlaceholder ? <span className="case-preview__status">Case study in progress</span> : null}
          </div>

          <div className="case-preview__content">
            <div className="case-preview__meta">
              <span>{study.company}</span>
              <span aria-hidden="true">·</span>
              <span>{study.role}</span>
            </div>

            <h3 className="case-preview__title">{study.title}</h3>
            <p className="case-preview__problem">{study.problem}</p>

            <div className="case-preview__tags">
              {study.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>

            <span className="case-preview__cta">
              {isPlaceholder ? "Preview outline" : "Read case study"} →
            </span>
          </div>
        </Link>
      </article>
    </Reveal>
  );
}
