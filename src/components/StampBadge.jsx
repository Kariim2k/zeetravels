export default function StampBadge({
  countryCode,
  coords,
  date,
  rotate = -6,
  tone = "ink",
}) {
  const color = tone === "gold" ? "var(--gold)" : "var(--teal)";
  const formatted = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 108,
        height: 108,
        borderRadius: "50%",
        border: `1.5px dashed ${color}`,
        color,
        transform: `rotate(${rotate}deg)`,
        padding: 10,
        textAlign: "center",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "1.1rem",
          fontWeight: 500,
          letterSpacing: "0.04em",
        }}
      >
        {countryCode}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.52rem",
          letterSpacing: "0.02em",
          marginTop: 4,
        }}
      >
        {coords}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.58rem",
          marginTop: 3,
        }}
      >
        {formatted}
      </span>
    </div>
  );
}
