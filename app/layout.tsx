import "./globals.css";
import { CartProvider } from "./context/CartContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ZUZA HAIRCARE",
  description:
    "Soft care for stronger hair. Minimal haircare for healthy, confident hair.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
