"use client";

import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import { CartItem as CartItemType } from "@/app/context/Cart-context";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex gap-3 bg-white rounded-lg p-3 relative border">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-red-500 text-sm mb-1">{item.name}</h4>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 border rounded-md">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-medium min-w-[20px] text-center">
              {item.quantity}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="font-bold text-sm">{item.price}</span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-red-100"
        onClick={() => onRemove(item.id)}
      >
        <X className="h-3 w-3 text-red-500" />
      </Button>
    </div>
  );
}
