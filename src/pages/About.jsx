import { destinations } from "../data/destinations.js";

export default function About() {
  const countries = new Set(
    destinations.filter((d) => d.country !== "Nigeria").map((d) => d.country),
  ).size;
  const states = new Set(
    destinations.filter((d) => d.state).map((d) => d.state),
  ).size;
  const photos = destinations.reduce((sum, d) => sum + d.images.length, 0);

  return (
    <div className="container" style={{ paddingTop: 56, paddingBottom: 96 }}>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}
        className="about-grid"
      >
        <div>
          <span className="eyebrow">About this journal</span>
          <h1 style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", marginTop: 12 }}>
            I write these down so I don't have to remember them perfectly.
          </h1>
          <p
            style={{
              color: "var(--ink-soft)",
              marginTop: 22,
              fontSize: "1.05rem",
              maxWidth: 480,
            }}
          >
            ZeeTravels started as a way to hold onto the small, unphotogenic
            details of a trip — the wrong turn that became the best part of the
            day, what something actually cost, why a meal mattered. The photos
            come along for the ride, but the words are the point.
          </p>
          <p
            style={{
              color: "var(--ink-soft)",
              marginTop: 16,
              fontSize: "1.05rem",
              maxWidth: 480,
            }}
          >
            Every entry carries the coordinates and the date, stamped like a
            passport page, so the record stays honest about where and when.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <Stat value={countries} label="Countries logged" />
          <Stat value={states} label="Nigerian states explored" />
          <Stat value={photos} label="Photographs kept" />
          <Stat value="2021" label="First entry" />
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "2.6rem",
          color: "var(--teal)",
        }}
      >
        {value}
      </span>
      <p className="eyebrow" style={{ marginTop: 4 }}>
        {label}
      </p>
    </div>
  );
}
