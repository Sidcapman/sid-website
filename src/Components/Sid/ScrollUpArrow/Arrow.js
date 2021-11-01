import React, { useState, useEffect } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'
function Arrow() {
  const [Arrow, setArrow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => {
      window.removeEventListener('scroll', checkScroll)
    }
  })

  const checkScroll = () => {
    if (!Arrow && window.pageYOffset > 400) {
      setArrow(true)
    } else if (Arrow && window.pageYOffset < 4000) {
      setArrow(false)
    }
  }

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="above-arrow">
      <div className="arrow" onClick={goTop}>
        <i class="fas fa-arrow-circle-up fa-2x"></i>
      </div>
    </div>
  )
}

export default Arrow
