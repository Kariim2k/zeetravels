import { useParams, Link, Navigate } from 'react-router-dom'
import { getDestinationBySlug } from '../data/destinations.js'
import Slideshow from '../components/Slideshow.jsx'
import StampBadge from '../components/StampBadge.jsx'

export default function DestinationDetail() {
  const { slug } = useParams()
  const destination = getDestinationBySlug(slug)

  if (!destination) return <Navigate to="/destinations" replace />

  const { name, country, coords, dateVisited, countryCode, season, story, images, tags } = destination

  return (
    <div className="container" style={{ paddingTop: 44, paddingBottom: 96 }}>
      <Link to="/destinations" className="eyebrow" style={{ color: 'var(--teal)' }}>
        &larr; All destinations
      </Link>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: 24,
          marginTop: 18,
          marginBottom: 36,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <span className="eyebrow">{season}</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginTop: 8 }}>
            {name}, <span style={{ color: 'var(--ink-soft)' }}>{country}</span>
          </h1>
        </div>
        <StampBadge countryCode={countryCode} coords={coords} date={dateVisited} />
      </div>

      <Slideshow images={images} alt={`${name}, ${country}`} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: 56,
          marginTop: 56,
        }}
        className="detail-grid"
      >
        <div>
          <span className="eyebrow">The entry</span>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.35rem',
              lineHeight: 1.55,
              marginTop: 14,
              maxWidth: 620,
            }}
          >
            {story}
          </p>
        </div>
        <div>
          <span className="eyebrow">Details</span>
          <dl style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Row label="Coordinates" value={coords} />
            <Row label="Visited" value={new Date(dateVisited).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} />
            <Row label="Season" value={season} />
            <Row label="Tags" value={tags.join(', ')} />
          </dl>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div style={{ borderTop: '1px solid var(--line-soft)', paddingTop: 10 }}>
      <dt className="eyebrow">{label}</dt>
      <dd style={{ margin: 0, marginTop: 4, fontSize: '0.95rem' }}>{value}</dd>
    </div>
  )
}
