export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", marginTop: 96 }}>
      <div
        className="container"
        style={{
          padding: "28px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span className="eyebrow">ZeeTravels &middot; a travel journal</span>
        <span className="eyebrow">
          2 countries, 3 states logged, more to come...
        </span>
      </div>
    </footer>
  );
}
