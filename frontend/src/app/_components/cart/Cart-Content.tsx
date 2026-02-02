"use client";

import { CartItem as CartItemType, Food } from "@/app/context/Cart-context";
import { CartItem } from "./Cart-item";
import { EmptyCart } from "./Empty-cart";
import { DeliveryLocation } from "./Delivery-location";
import { PaymentSummary } from "./Payment-summary";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";

interface CartContentProps {
  cartItems: CartItemType[];
  subtotal: number;
  shipping: number;
  total: number;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveFromCart: (id: string) => void;
}
export function CartContent({
  cartItems,
  subtotal,
  shipping,
  total,
  onUpdateQuantity,
  onRemoveFromCart,
}: CartContentProps) {
  const ToOrder = async () => {
    await api.post(
      "/orders/create",
      {
        orderItems: cartItems.map((item: CartItemType) => ({
          foodId: item._id,
          quantity: item.quantity,
          price: item.price,
        })),
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      },
    );
  };
  return (
    <>
      <div className="flex-1 overflow-auto px-6 py-4">
        <h3 className="text-lg font-semibold mb-4">My cart</h3>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
                onRemove={onRemoveFromCart}
              />
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            <DeliveryLocation />
            <PaymentSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="p-6 border-t">
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-base font-semibold"
            onClick={ToOrder}
          >
            Check out
          </Button>
        </div>
      )}
    </>
  );
}
