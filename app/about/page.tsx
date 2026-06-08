import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-[#FCF8F6] text-[#111111] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-32">

        <h1 className="text-5xl font-serif mb-8">
          About ZUZA HAIRCARE
        </h1>

        <p className="text-lg opacity-70 leading-relaxed">
          ZUZA HAIRCARE is a modern haircare concept focused on simplicity, performance, and confidence.
          We believe that healthy-looking hair should be effortless, not complicated.
        </p>

        <p className="mt-6 text-lg opacity-70 leading-relaxed">
          Our first product, the Hair Serum, is designed to nourish the scalp, strengthen hair, and support
          long-term hair health using carefully selected ingredients like Rosemary, Peptides, Biotin, and Caffeine.
        </p>

        <p className="mt-6 text-lg opacity-70 leading-relaxed">
          This brand is built with a focus on minimal design, clean ingredients, and a luxury feel —
          combining science-backed care with a modern aesthetic.
        </p>

        {/* BRAND VALUES */}
        <div className="mt-16 grid md:grid-cols-3 gap-6 text-sm">

          <div className="p-6 bg-white rounded-2xl">
            <h3 className="font-semibold mb-2">Minimal</h3>
            <p className="opacity-70">Simple routines, no unnecessary steps.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl">
            <h3 className="font-semibold mb-2">Effective</h3>
            <p className="opacity-70">Ingredients chosen for real results.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl">
            <h3 className="font-semibold mb-2">Modern</h3>
            <p className="opacity-70">Clean aesthetic, premium feel.</p>
          </div>

        </div>

      </section>

    </main>
  );
}