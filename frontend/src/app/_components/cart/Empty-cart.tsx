"use client";

import { ShoppingCart } from "lucide-react";

export function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-gray-500">
      <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
      <p>Your cart is empty</p>
    </div>
  );
}
