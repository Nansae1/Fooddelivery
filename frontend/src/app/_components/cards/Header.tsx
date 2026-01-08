"use client";

import { useCart } from "@/app/context/Cart-context";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  totalItems?: number;
  onCartClick?: () => void;
}

export const Header = ({ totalItems }: HeaderProps) => {
  const { addToCart, getTotalItems, setIsCartOpen } = useCart();

  return (
    <div className="w-screen h-17 flex gap-241 items-center justify-center bg-black">
      <img src="/Logo=Horizon.png" className="h-11 w-36.5" />
      <div className="flex gap-3">
        <Link href="/auth/signup">
          <Button className="h-9 w-18.25 bg-white text-black rounded-full">
            Sign up
          </Button>
        </Link>
        <Link href="/auth/login">
          <Button className="h-9 w-16.25 bg-red-500 text-white rounded-full">
            Log In
          </Button>
        </Link>
        <Button
          size="icon"
          className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-4 w-4 text-white" />
        </Button>
      </div>
    </div>
  );
};
