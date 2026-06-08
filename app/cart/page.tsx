'use client';

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

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
        </nav>

        <div className="text-sm">
          Items: {cart}
        </div>
      </header>

      {/* CART CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-4xl font-serif mb-10">
          Your Cart
        </h1>

        {cart === 0 ? (
<div className="text-center py-20">
  <p className="text-lg opacity-70">Your cart is empty</p>
  <a href="/product">
    <button className="mt-6 px-8 py-3 bg-black text-white rounded-full">
      Shop Hair Serum
    </button>
  </a>
</div>
        ) : (
          <div className="space-y-6">

            {/* PRODUCT CARD */}
            <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
              <div>
                <h2 className="text-xl font-semibold">Hair Serum</h2>
                <p className="text-sm opacity-70">50 ml</p>
              </div>

              <div className="text-right">
                <p className="text-lg">€39</p>
                <p className="text-sm opacity-70">Quantity: {cart}</p>
              </div>
            </div>

            {/* TOTAL */}
            <div className="text-right mt-10">
              <p className="text-xl font-semibold">
                Total: €{cart * 39}
              </p>

              <button className="mt-6 px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition">
                Checkout
              </button>
            </div>

          </div>
        )}

      </section>
    </main>
  );
}