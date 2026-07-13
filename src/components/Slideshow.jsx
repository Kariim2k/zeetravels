import { useState, useEffect, useCallback } from 'react'

export default function Slideshow({ images, alt }) {
  const [index, setIndex] = useState(0)
  const total = images.length

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  return (
    <div>
      <div
        style={{
          position: 'relative',
          background: 'var(--teal-deep)',
          aspectRatio: '3 / 2',
          overflow: 'hidden',
        }}
      >
        <img
          key={index}
          src={images[index]}
          alt={`${alt} — frame ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* frame counter, film-roll style — meaningful because these are the actual photos on the roll */}
        <span
          className="eyebrow"
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            color: 'var(--paper-white)',
            background: 'rgba(23, 46, 40, 0.55)',
            padding: '4px 10px',
          }}
        >
          FRAME {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        <button
          aria-label="Previous photo"
          onClick={prev}
          style={arrowStyle('left')}
        >
          &#8592;
        </button>
        <button
          aria-label="Next photo"
          onClick={next}
          style={arrowStyle('right')}
        >
          &#8594;
        </button>
      </div>

      {/* film-strip thumbnails */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          marginTop: 10,
          overflowX: 'auto',
          paddingBottom: 4,
        }}
      >
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to photo ${i + 1}`}
            style={{
              flexShrink: 0,
              width: 72,
              aspectRatio: '3 / 2',
              padding: 0,
              border: i === index ? '2px solid var(--teal)' : '2px solid transparent',
              opacity: i === index ? 1 : 0.6,
              transition: 'opacity 0.15s ease',
            }}
          >
            <img
              src={src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function arrowStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 14,
    transform: 'translateY(-50%)',
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'var(--paper-white)',
    color: 'var(--ink)',
    fontSize: '1.1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
