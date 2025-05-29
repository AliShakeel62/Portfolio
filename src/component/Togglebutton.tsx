import { useTheme } from "../context/ThemeProvider";

export const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{
      background: "transparent",
      border: "none",
      fontSize: "1.2rem",
      cursor: "pointer",
      color: "var(--text)"
    }}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
