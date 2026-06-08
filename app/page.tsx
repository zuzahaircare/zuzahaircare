import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#FCF8F6] text-[#111111]">

      {/* TOP BAR */}
      <AnnouncementBar />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32">

        <h1 className="text-6xl md:text-7xl font-serif tracking-wide">
          Soft care for stronger hair
        </h1>

        <p className="mt-4 text-lg opacity-70 max-w-md">
          Minimal haircare designed to nourish, protect and enhance your natural beauty.
        </p>

        <a href="/product">
          <button className="mt-8 px-8 py-3 rounded-full bg-[#111111] text-white hover:opacity-80 transition">
            SHOP NOW
          </button>
        </a>

        <div className="mt-16 w-full max-w-4xl h-[420px] bg-[#F4DCDC] rounded-3xl" />
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div className="h-[520px] bg-[#F4DCDC] rounded-3xl" />

        <div>
          <h2 className="text-4xl font-serif">Hair Serum</h2>

          <p className="mt-4 opacity-70">
            A lightweight serum designed to nourish the scalp and support healthier-looking hair.
          </p>

          <a href="/product">
            <button className="mt-6 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              DISCOVER
            </button>
          </a>

          <div className="mt-10 grid grid-cols-2 gap-4 text-sm opacity-80">
            <p>✿ Rosemary</p>
            <p>✿ Peptides</p>
            <p>✿ Biotin</p>
            <p>✿ Caffeine</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 text-center bg-[#F4DCDC]/40">
        <p className="text-2xl">★★★★★</p>
        <p className="mt-4 italic max-w-md mx-auto">
          “Absolutely love the feel of my hair after just a few uses.”
        </p>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-serif mb-10">Instagram</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-40 bg-[#F4DCDC] rounded-2xl" />
          <div className="h-40 bg-[#F4DCDC] rounded-2xl" />
          <div className="h-40 bg-[#F4DCDC] rounded-2xl" />
          <div className="h-40 bg-[#F4DCDC] rounded-2xl" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm opacity-60">
        © 2026 ZUZA HAIRCARE. All rights reserved.
      </footer>

    </main>
  );
}