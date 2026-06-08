export default function ContactPage() {
  return (
    <main className="bg-[#FCF8F6] text-[#111111] min-h-screen">

      {/* NAV */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-black/10">
        <div className="font-serif text-xl">
          ZUZA HAIRCARE
        </div>

        <nav className="flex gap-6 text-sm opacity-80">
          <a href="/">Home</a>
          <a href="/product">Hair Serum</a>
          <a href="/cart">Cart</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-serif mb-6">
          Contact
        </h1>

        <p className="opacity-70 mb-10">
          For collaborations, manufacturing inquiries or general questions, feel free to reach out.
        </p>

        {/* FORM */}
        <form className="space-y-6">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 border border-black/20 rounded-xl bg-transparent"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-black/20 rounded-xl bg-transparent"
          />

          <textarea
            placeholder="Message"
            rows={6}
            className="w-full p-4 border border-black/20 rounded-xl bg-transparent"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
          >
            Send Message
          </button>

        </form>

        {/* EXTRA INFO */}
        <div className="mt-16 text-sm opacity-70 space-y-2">
          <p>📩 contact@zuzahaircare.com</p>
          <p>🌍 Based in Netherlands</p>
        </div>

      </section>

    </main>
  );
}