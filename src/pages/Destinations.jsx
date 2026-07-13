import { destinations } from '../data/destinations.js'
import DestinationCard from '../components/DestinationCard.jsx'

export default function Destinations() {
  return (
    <div className="container" style={{ paddingTop: 56, paddingBottom: 88 }}>
      <span className="eyebrow">The full log</span>
      <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginTop: 12, marginBottom: 44, maxWidth: 640 }}>
        Everywhere I've pointed a camera.
      </h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
        }}
        className="card-grid"
      >
        {destinations.map((d, i) => (
          <DestinationCard key={d.id} destination={d} index={i} />
        ))}
      </div>
      <style>{`
        @media (max-width: 800px) {
          .card-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1000px) and (min-width: 801px) {
          .card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
