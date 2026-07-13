import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }) => ({
  fontFamily: "var(--font-mono)",
  fontSize: "0.78rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color: isActive ? "var(--teal)" : "var(--ink-soft)",
  borderBottom: isActive ? "1px solid var(--teal)" : "1px solid transparent",
  paddingBottom: 3,
  transition: "color 0.15s ease, border-color 0.15s ease",
});

export default function Nav() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--line)",
        position: "sticky",
        top: 0,
        background: "var(--paper)",
        zIndex: 20,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <NavLink
          to="/"
          style={{ display: "flex", alignItems: "baseline", gap: 10 }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              fontStyle: "italic",
            }}
          >
            ZeeTravels
          </span>
          <span className="eyebrow" style={{ display: "none" }}>
            a travel journal
          </span>
        </NavLink>
        <nav style={{ display: "flex", gap: 28 }}>
          <NavLink to="/" style={linkStyle} end>
            Home
          </NavLink>
          <NavLink to="/destinations" style={linkStyle}>
            Destinations
          </NavLink>
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
