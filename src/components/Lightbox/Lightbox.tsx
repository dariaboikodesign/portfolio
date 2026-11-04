import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Lightbox.module.scss'

type Shot = { src: string; alt: string }

// Photos that can be opened: content images (non-empty alt) on an open case
// page, not decorative ones.
const ZOOMABLE = '[data-case-scroller] article img[alt]:not([alt=""])'
const EXCLUDED = '[aria-hidden="true"], [data-no-zoom]'

function zoomableImages(): HTMLImageElement[] {
  return Array.from(document.querySelectorAll<HTMLImageElement>(ZOOMABLE)).filter(
    (img) => !img.closest(EXCLUDED),
  )
}

// Opens any photo on a case page full screen. Click a photo to open; arrows or
// swipe go through the photos of the current case; Esc, the × button or a
// click on the backdrop closes.
export default function Lightbox() {
  const [shots, setShots] = useState<Shot[]>([])
  const [index, setIndex] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const touchX = useRef<number | null>(null)

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof HTMLImageElement) || !target.matches(ZOOMABLE)) return
      if (target.closest(EXCLUDED)) return
      const images = zoomableImages()
      const at = images.indexOf(target)
      if (at < 0) return
      event.preventDefault()
      setShots(images.map((img) => ({ src: img.currentSrc || img.src, alt: img.alt })))
      setIndex(at)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const open = index !== null
  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + shots.length) % shots.length)),
    [shots.length],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close, step])

  if (index === null) return null
  const shot = shots[index]
  const many = shots.length > 1

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={shot.alt}
      onClick={(event) => {
        if (event.target === event.currentTarget) close()
      }}
      onTouchStart={(event) => {
        touchX.current = event.touches[0].clientX
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null || !many) return
        const dx = event.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
    >
      <img key={shot.src} className={styles.image} src={shot.src} alt={shot.alt} />

      <button ref={closeRef} type="button" className={styles.close} onClick={close} aria-label="Close">
        ×
      </button>

      {many ? (
        <>
          <button
            type="button"
            className={`${styles.nav} ${styles.prev}`}
            onClick={() => step(-1)}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            type="button"
            className={`${styles.nav} ${styles.next}`}
            onClick={() => step(1)}
            aria-label="Next photo"
          >
            →
          </button>
          <p className={styles.counter}>
            {index + 1} / {shots.length}
          </p>
        </>
      ) : null}
    </div>
  )
}
