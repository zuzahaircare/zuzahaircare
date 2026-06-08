import "./globals.css";
import { CartProvider } from "./context/CartContext";

export const metadata = {
  title: "ZUZA HAIRCARE",
  description: "Soft care for stronger hair. Minimal haircare for healthy, confident hair.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
