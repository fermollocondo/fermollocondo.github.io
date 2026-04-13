"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
          backgroundSize: "cover",
          backgroundPositionY: `${offsetY * 0.4}px`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            background: "rgba(0,0,0,0.3)",
            padding: "30px",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "2.5rem" }}>
            Welcome to my Portfolio
          </h1>
          <p>Fernanda Mollocondo</p>

          <button
            style={{
              padding: "10px 20px",
              border: "none",
              background: "white",
              color: "black",
              cursor: "pointer",
              borderRadius: "8px",
              marginTop: "10px",
            }}
          >
            About Me
          </button>
        </div>
      </section>

      <section
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>More about me...</h2>
      </section>
    </main>
  );
}

