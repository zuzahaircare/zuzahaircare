'use client';

import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { cart, addToCart } = useCart();

  return (
    <main className="bg-[#FCF8F6] text-[#111111] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* PRODUCT SECTION */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 py-32 items-center">

        {/* IMAGE */}
        <div className="h-[600px] bg-[#F4DCDC] rounded-3xl" />

        {/* INFO */}
        <div>
          <h1 className="text-5xl font-serif">Hair Serum</h1>

          <p className="mt-4 text-lg opacity-70">
            50 ml
          </p>

          <p className="mt-6 text-xl">
            €39
          </p>

          {/* CART BUTTON */}
          <button
            onClick={addToCart}
            className="mt-8 px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
          >
            Add to Cart ({cart})
          </button>

          {/* DETAILS */}
          <div className="mt-12 space-y-6 text-sm opacity-80">

            <div>
              <h3 className="font-semibold">Benefits</h3>
              <p>Strengthens hair, nourishes scalp, reduces breakage.</p>
            </div>

            <div>
              <h3 className="font-semibold">Ingredients</h3>
              <p>Rosemary, Peptides, Biotin, Caffeine</p>
            </div>

            <div>
              <h3 className="font-semibold">How to use</h3>
              <p>Apply a few drops to scalp and massage gently. Use daily.</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}