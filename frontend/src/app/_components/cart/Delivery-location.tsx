"use client";

import { Input } from "@/components/ui/input";

export function DeliveryLocation() {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold mb-2">Delivery location</h4>
      <Input
        placeholder="Please share your complete address"
        className="bg-white"
      />
    </div>
  );
}
