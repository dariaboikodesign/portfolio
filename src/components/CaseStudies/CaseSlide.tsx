import { useEffect, useRef } from 'react'
import type { CaseSlide as Slide, SlideBlock } from '../../data/cases'
import { caseImage } from '../../assets/cases/images'
import FadeIn from '../FadeIn'
import styles from './CaseSlide.module.scss'

type Props = {
  slide: Slide
  index?: number
}

function formatKicker(text: string) {
  return `( ${text.replace(/:+$/, '').trim()} )`
}

function Blocks({
  blocks,
  startDelay = 120,
}: {
  blocks: SlideBlock[]
  startDelay?: number
}) {
  return (
    <>
      {blocks.map((block, i) => {
        const key = `${block.type}-${i}`
        const delay = startDelay + i * 70

        if (block.type === 'heading') {
          return (
            <FadeIn key={key} as="h3" from="up" delay={delay} className={block.gold ? styles.goldTitle : styles.title}>
              {block.text}
            </FadeIn>
          )
        }
        if (block.type === 'scriptTitle') {
          return (
            <FadeIn key={key} as="h3" from="up" delay={delay} className={styles.scriptTitle}>
              {block.lead} <em>{block.script}</em>
            </FadeIn>
          )
        }
        if (block.type === 'label') {
          return (
            <FadeIn key={key} as="p" from="up" delay={delay} className={styles.kicker}>
              {formatKicker(block.text)}
            </FadeIn>
          )
        }
        if (block.type === 'body') {
          return (
            <FadeIn key={key} as="p" from="up" delay={delay} className={styles.body}>
              {block.text}
            </FadeIn>
          )
        }
        if (block.type === 'rich') {
          return (
            <FadeIn key={key} as="p" from="up" delay={delay} className={styles.body}>
              <span dangerouslySetInnerHTML={{ __html: block.html }} />
            </FadeIn>
          )
        }
        if (block.type === 'list') {
          const List = block.ordered ? 'ol' : 'ul'
          return (
            <FadeIn key={key} as={List} from="up" delay={delay} className={styles.list}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </FadeIn>
          )
        }
        return (
          <FadeIn key={key} from="up" delay={delay} className={styles.stat}>
            {block.label ? <span className={styles.statLabel}>{block.label}</span> : null}
            <span className={styles.statValue}>{block.value}</span>
          </FadeIn>
        )
      })}
    </>
  )
}

function ParallaxShot({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    const scroller = node.closest('[data-case-scroller]')
    const onScroll = () => {
      const box = node.getBoundingClientRect()
      const mid = window.innerHeight / 2
      const shift = ((box.top + box.height / 2 - mid) / window.innerHeight) * -28
      node.style.setProperty('--shift', `${shift}px`)
    }

    scroller?.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => scroller?.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} className={`${styles.shot} ${className ?? ''}`}>
      <img src={src} alt="" />
    </div>
  )
}

function MockupStage({ images, layout }: { images: string[]; layout: Slide['layout'] }) {
  if (images.length === 0) return null

  return (
    <FadeIn from="up" delay={160} className={`${styles.stage} ${styles[`stage_${layout}`]}`}>
      {images.map((key, i) => (
        <ParallaxShot key={key} src={caseImage(key)} className={styles[`n${Math.min(i + 1, 4)}`]} />
      ))}
    </FadeIn>
  )
}

export default function CaseSlide({ slide, index = 0 }: Props) {
  const heading = slide.blocks.find((block) => block.type === 'heading')
  const rest = slide.blocks.filter((block) => block !== heading)

  return (
    <article className={`${styles.page} ${styles[slide.layout]}`} data-index={index}>
      <div className={styles.grid}>
        {heading && heading.type === 'heading' ? (
          <FadeIn as="h3" from="up" className={heading.gold ? styles.displayGold : styles.display}>
            {heading.text}
          </FadeIn>
        ) : null}

        {rest.length > 0 ? (
          <div className={styles.prose}>
            <Blocks blocks={rest} />
            {slide.sideBlocks ? (
              <div className={styles.aside}>
                <Blocks blocks={slide.sideBlocks} startDelay={200} />
              </div>
            ) : null}
          </div>
        ) : null}

        <MockupStage images={slide.images} layout={slide.layout} />
      </div>
    </article>
  )
}
