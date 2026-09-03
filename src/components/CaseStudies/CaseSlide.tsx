import type { CaseSlide as Slide, SlideBlock } from '../../data/cases'
import { caseImage } from '../../assets/cases/images'
import styles from './CaseSlide.module.scss'

type Props = {
  slide: Slide
}

function Blocks({ blocks }: { blocks: SlideBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`
        if (block.type === 'heading') {
          return (
            <h3 key={key} className={block.gold ? styles.goldTitle : styles.title}>
              {block.text}
            </h3>
          )
        }
        if (block.type === 'scriptTitle') {
          return (
            <h3 key={key} className={styles.highlights}>
              {block.lead} <em>{block.script}</em>
            </h3>
          )
        }
        if (block.type === 'label') {
          return (
            <p key={key} className={styles.label}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'body') {
          return (
            <p key={key} className={styles.body}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'rich') {
          return (
            <p key={key} className={styles.body} dangerouslySetInnerHTML={{ __html: block.html }} />
          )
        }
        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul'
          return (
            <List key={key} className={styles.list}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </List>
          )
        }
        return (
          <p key={key} className={styles.stat}>
            {block.label ? <span className={styles.label}>{block.label}</span> : null}
            <span className={styles.statValue}>{block.value}</span>
          </p>
        )
      })}
    </>
  )
}

export default function CaseSlide({ slide }: Props) {
  return (
    <article className={`${styles.slide} ${styles[slide.layout]}`}>
      <div className={styles.panel}>
        {slide.blocks.length > 0 ? (
          <div className={styles.copy}>
            <Blocks blocks={slide.blocks} />
            {slide.sideBlocks ? (
              <div className={styles.side}>
                <Blocks blocks={slide.sideBlocks} />
              </div>
            ) : null}
          </div>
        ) : null}

        {slide.images.length > 0 ? (
          <div className={styles.media}>
            {slide.images.map((key) => (
              <img key={key} src={caseImage(key)} alt="" />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
