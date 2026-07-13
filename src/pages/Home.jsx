import { Link } from "react-router-dom";
import { destinations } from "../data/destinations.js";
import DestinationCard from "../components/DestinationCard.jsx";
import StampBadge from "../components/StampBadge.jsx";

export default function Home() {
  const featured = destinations[0];
  const rest = destinations.slice(1, 4);

  return (
    <div>
      {/* Hero — the most characteristic image leads, with the stamp as the signature device */}
      <section
        className="container"
        style={{ paddingTop: 56, paddingBottom: 56 }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 48,
            alignItems: "center",
          }}
          className="hero-grid"
        >
          <div>
            <span className="eyebrow">A running record of where I've been</span>
            <h1
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)", marginTop: 14 }}
            >
              Notes from{" "}
              <em style={{ fontStyle: "italic", color: "var(--teal)" }}>
                elsewhere
              </em>
              .
            </h1>
            <p
              style={{
                maxWidth: 460,
                marginTop: 22,
                color: "var(--ink-soft)",
                fontSize: "1.05rem",
              }}
            >
              Three countries, one camera roll at a time. This is a working
              journal of trips taken, photographed, and written down before the
              details fade — the routes, the meals, the light at the wrong time
              of day.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                marginTop: 32,
                alignItems: "center",
              }}
            >
              <Link
                to="/destinations"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  background: "var(--teal)",
                  color: "var(--paper-white)",
                  padding: "13px 22px",
                }}
              >
                View the map
              </Link>
              <StampBadge
                countryCode={featured.countryCode}
                coords={featured.coords}
                date={featured.dateVisited}
                rotate={8}
                tone="gold"
              />
            </div>
          </div>

          <Link
            to={`/destinations/${featured.slug}`}
            style={{ display: "block" }}
          >
            <div style={{ aspectRatio: "4 / 5", overflow: "hidden" }}>
              <img
                src={featured.images[0]}
                alt={featured.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p className="eyebrow" style={{ marginTop: 10 }}>
              Latest entry &middot; {featured.name}, {featured.country}
            </p>
          </Link>
        </div>
      </section>

      {/* Recent entries */}
      <section className="container" style={{ paddingBottom: 80 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderTop: "1px solid var(--line)",
            paddingTop: 28,
            marginBottom: 28,
          }}
        >
          <h2 style={{ fontSize: "1.7rem" }}>Recent entries</h2>
          <Link
            to="/destinations"
            className="eyebrow"
            style={{ color: "var(--teal)" }}
          >
            All destinations &rarr;
          </Link>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
          className="card-grid"
        >
          {rest.map((d, i) => (
            <DestinationCard key={d.id} destination={d} index={i} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 800px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .card-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1000px) and (min-width: 801px) {
          .card-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
