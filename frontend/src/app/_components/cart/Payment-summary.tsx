"use client";

import { Separator } from "@/components/ui/separator";

interface PaymentSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
}

export function PaymentSummary({
  subtotal,
  shipping,
  total,
}: PaymentSummaryProps) {
  return (
    <div className="mt-6 space-y-3">
      <h4 className="text-sm font-semibold mb-3">Payment info</h4>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Items</span>
        <span className="font-semibold">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Shipping</span>
        <span className="font-semibold">{shipping.toFixed(2)}$</span>
      </div>
      <Separator />
      <div className="flex justify-between text-base font-bold">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}
