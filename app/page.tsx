import Link from "next/link";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FAF7F4", color: "#111" }}>

      {/* HERO (FULL SCREEN STYLE) */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "72px", letterSpacing: "3px", margin: 0 }}>
          ZUZA
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginTop: "20px" }}>
          Minimal haircare for stronger, healthier hair
        </p>

        <div style={{ marginTop: "40px", display: "flex", gap: "15px" }}>
          <Link href="/product">
            <button
              style={{
                padding: "14px 28px",
                backgroundColor: "#111",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
            >
              SHOP NOW
            </button>
          </Link>

          <Link href="/about">
            <button
              style={{
                padding: "14px 28px",
                backgroundColor: "transparent",
                border: "1px solid #111",
                cursor: "pointer",
                letterSpacing: "1px",
              }}
            >
              OUR STORY
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}