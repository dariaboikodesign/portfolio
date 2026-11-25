import { useEffect, useState, type RefObject } from 'react'

export default function useCarouselGestures(
  stage: RefObject<HTMLDivElement | null>,
  move: (direction: number) => void,
) {
  const [touching, setTouching] = useState(false)

  useEffect(() => {
    const element = stage.current
    if (!element) return

    let start: { id: number; x: number; y: number } | null = null
    const onPointerDown = (event: PointerEvent) => {
      if (!event.isPrimary || event.pointerType === 'mouse') return
      start = { id: event.pointerId, x: event.clientX, y: event.clientY }
      element.setPointerCapture(event.pointerId)
      setTouching(true)
    }
    const onPointerEnd = (event: PointerEvent) => {
      if (!start || event.pointerId !== start.id) return
      const dx = event.clientX - start.x
      const dy = event.clientY - start.y
      start = null
      setTouching(false)
      if (event.type === 'pointerup' && Math.abs(dx) >= 30 && Math.abs(dx) > Math.abs(dy) * 1.25) {
        move(dx < 0 ? 1 : -1)
      }
    }

    // Ignore the momentum tail after one turn until the next wheel gesture.
    let lastWheelTime = -Infinity
    let distance = 0
    let turned = false
    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return
      const shifted = event.shiftKey && event.deltaX === 0
      const delta = shifted ? event.deltaY : event.deltaX
      if (!delta || (!shifted && Math.abs(delta) <= Math.abs(event.deltaY) * 1.25)) return
      if (event.cancelable) event.preventDefault()
      if (event.timeStamp - lastWheelTime > 190 || Math.sign(delta) !== Math.sign(distance)) {
        turned = false
        distance = 0
      }
      lastWheelTime = event.timeStamp
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1
      distance += delta * unit
      if (!turned && Math.abs(distance) >= 30) {
        turned = true
        move(Math.sign(distance))
      }
    }

    element.addEventListener('pointerdown', onPointerDown)
    element.addEventListener('pointerup', onPointerEnd)
    element.addEventListener('pointercancel', onPointerEnd)
    element.addEventListener('lostpointercapture', onPointerEnd)
    element.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      element.removeEventListener('pointerdown', onPointerDown)
      element.removeEventListener('pointerup', onPointerEnd)
      element.removeEventListener('pointercancel', onPointerEnd)
      element.removeEventListener('lostpointercapture', onPointerEnd)
      element.removeEventListener('wheel', onWheel)
    }
  }, [stage, move])

  return touching
}
