import React, { useEffect, useRef } from 'react'
import './Cursor.css'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    // Skip on touch / coarse-pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const interactive = 'a, button, .btn, input, textarea, [role="button"], .theme-toggle, .contact-channel'

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf

    const setPos = (el, x, y) => {
      el.style.setProperty('--x', `${x}px`)
      el.style.setProperty('--y', `${y}px`)
    }

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      setPos(dot, mouseX, mouseY)
      document.body.classList.add('cursor-on')
    }
    const onOver = (e) => {
      if (e.target.closest(interactive)) ring.classList.add('hovering')
    }
    const onOut = (e) => {
      if (e.target.closest(interactive)) ring.classList.remove('hovering')
    }
    const onDown = () => ring.classList.add('clicking')
    const onUp = () => ring.classList.remove('clicking')
    const onLeave = () => document.body.classList.remove('cursor-on')

    const loop = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      setPos(ring, ringX, ringY)
      raf = requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mouseout', onOut)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mouseout', onOut)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <>
      <div className="cursor-ring" ref={ringRef} aria-hidden="true"></div>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true"></div>
    </>
  )
}

export default Cursor
