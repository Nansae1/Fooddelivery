import { Toaster } from "@/components/ui/sonner";
import { Footer } from "../_components/cards/Footer";
import { Header } from "../_components/cards/Header";
import { CartProvider, useCart } from "../context/Cart-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header
      // totalItems={getTotalItems()}
      // onCartClick={() => setIsCartOpen(true)}
      />
      {children}
      <Toaster position="top-center" richColors />
      <Footer />
    </div>
  );
}
