import Link from "next/link";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#FCF8F6", color: "#111" }}>

      {/* HERO SECTION */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h1 style={{ fontSize: "64px", letterSpacing: "2px" }}>
          ZUZA HAIRCARE
        </h1>

        <p style={{ fontSize: "18px", marginTop: "20px", color: "#555" }}>
          Healthy looking hair with confidence
        </p>

        <Link href="/product">
          <button
            style={{
              marginTop: "40px",
              padding: "14px 28px",
              backgroundColor: "#C88B9D",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              letterSpacing: "1px",
            }}
          >
            SHOP NOW
          </button>
        </Link>
      </section>

      {/* PRODUCT PREVIEW */}
      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "32px" }}>Hair Serum</h2>

        <p
          style={{
            maxWidth: "500px",
            margin: "20px auto",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          A lightweight serum designed to nourish the scalp and support healthier-looking hair.
        </p>

        <Link href="/product">
          <button
            style={{
              padding: "12px 24px",
              border: "1px solid #111",
              background: "transparent",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            DISCOVER
          </button>
        </Link>
      </section>

    </main>
  );
}