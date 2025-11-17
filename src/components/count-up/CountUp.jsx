import { useEffect, useRef, useState } from 'react'
import './CountUp.css'

const defaultFormatter = (value, decimals) => {
  const factor = 10 ** decimals
  return (Math.round(value * factor) / factor).toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

const easeOutCubic = (t) => 1 - (1 - t) ** 3

const CountUp = ({
  start = 0,
  end = 100,
  duration = 1.6,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  formatter = defaultFormatter,
  className = '',
  onComplete,
}) => {
  const [displayValue, setDisplayValue] = useState(start)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)
  const nodeRef = useRef(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!nodeRef.current) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setReady(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.4 }
    )

    observer.observe(nodeRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!ready) return undefined

    let frame
    const startValue = Number(start) || 0
    const endValue = Number(end) || 0
    const totalDistance = endValue - startValue

    const run = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = Math.max(0, timestamp - startTimeRef.current - delay * 1000)
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const eased = easeOutCubic(progress)
      const current = startValue + totalDistance * eased
      setDisplayValue(current)

      if (progress < 1) {
        frame = requestAnimationFrame(run)
      } else {
        onComplete?.()
      }
    }

    frame = requestAnimationFrame(run)

    return () => {
      cancelAnimationFrame(frame)
      rafRef.current = null
      startTimeRef.current = null
    }
  }, [start, end, duration, delay, ready, onComplete])

  return (
    <span className={`count-up ${className}`.trim()} ref={nodeRef}>
      {prefix}
      <span className="count-up__value">{formatter(displayValue, decimals)}</span>
      {suffix}
    </span>
  )
}

export default CountUp
