import { useState } from "react";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        ...styles.app,
        ...(darkMode ? styles.dark : styles.light),
      }}
    >
      {/* Header */}
      <header style={styles.header}>
        <h1>My Landing Page</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <h2>Welcome to Our Website</h2>
        <p>
          Build modern React applications with clean UI and Dark/Light mode
          support.
        </p>
        <button style={styles.cta}>Get Started</button>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

const styles = {
  app: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease",
  },

  light: {
    backgroundColor: "#f5f5f5",
    color: "#222",
  },

  dark: {
    backgroundColor: "#121212",
    color: "#ffffff",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
  },

  cta: {
    padding: "12px 25px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
  },
};

export default DarkMode;
