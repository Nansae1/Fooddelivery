"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";

interface CartHeaderProps {
  onClose: () => void;
}

export function CartHeader({ onClose }: CartHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShoppingCart className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Order detail</h2>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={onClose}
      ></Button>
    </div>
  );
}
