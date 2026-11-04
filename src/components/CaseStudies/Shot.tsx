import cap from './Shot.module.scss'

type Props = {
  src: string
  alt: string
  caption: string
  className?: string
  imgClassName?: string
}

// A case photo with a short description underneath. The full-screen viewer
// (Lightbox) shows the same caption.
export default function Shot({ src, alt, caption, className, imgClassName }: Props) {
  return (
    <figure className={className ? `${cap.figure} ${className}` : cap.figure}>
      <img className={imgClassName} src={src} alt={alt} />
      <figcaption className={cap.caption}>{caption}</figcaption>
    </figure>
  )
}
