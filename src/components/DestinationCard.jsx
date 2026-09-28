import { Link } from "react-router-dom";

export default function DestinationCard({ destination, index }) {
  const { slug, name, country, excerpt, images, countryCode, dateVisited } =
    destination;
  const year = new Date(dateVisited).getFullYear();

  return (
    <Link
      to={`/destinations/${slug}`}
      className="dest-card"
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          position: "relative",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          background: "var(--line-soft)",
        }}
      >
        <img
          src={images[0]}
          alt={`${name}, ${country}`}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className="dest-card-img"
        />
        <span
          className="eyebrow"
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: "var(--paper-white)",
            padding: "3px 8px",
            color: "var(--ink)",
          }}
        >
          {String(index + 1).padStart(2, "0")} &middot; {countryCode}
        </span>
      </div>
      <div style={{ paddingTop: 14 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <h3 style={{ fontSize: "1.3rem" }}>{name}</h3>
          <span className="eyebrow">{year}</span>
        </div>
        <p
          style={{
            color: "var(--ink-soft)",
            fontSize: "0.92rem",
            marginTop: 6,
          }}
        >
          {excerpt}
        </p>
      </div>
      <style>{`
        .dest-card:hover .dest-card-img { transform: scale(1.035); }
        .dest-card-img { transition: transform 0.5s ease; }
      `}</style>
    </Link>
  );
}
