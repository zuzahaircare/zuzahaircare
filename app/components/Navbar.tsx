import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-10 py-6 bg-[#FCF8F6]/70 backdrop-blur-md z-50">

      {/* LOGO */}
      <Link
        href="/"
        className="font-serif text-xl tracking-wide hover:opacity-70 transition"
      >
        ZUZA HAIRCARE
      </Link>

      {/* NAV LINKS */}
      <nav className="flex gap-8 text-sm opacity-80">
        <Link href="/">Home</Link>
        <Link href="/product">Hair Serum</Link>
        <Link href="/about">About</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/contact">Contact</Link>
      </nav>

    </header>
  );
}