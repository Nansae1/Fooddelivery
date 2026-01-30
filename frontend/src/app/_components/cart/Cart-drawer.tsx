"use client";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartHeader } from "./Cart-header";
import { CartContent } from "./Cart-Content";
import { useCart } from "@/app/context/Cart-context";
import { OrderContent } from "./Order-Content";

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const subtotal = getTotalPrice();
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg p-0 flex flex-col">
        <SheetHeader className="px-6 py-4 border-b">
          <CartHeader onClose={() => setIsCartOpen(false)} />
        </SheetHeader>

        <Tabs defaultValue="cart" className="flex-1 flex flex-col">
          <TabsList className="w-full rounded-full border-b bg-transparent p-0">
            <TabsTrigger
              value="cart"
              className="flex-1 rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white py-3"
            >
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="flex-1 rounded-full data-[state=active]:bg-red-500 data-[state=active]:text-white py-3"
            >
              Order
            </TabsTrigger>
          </TabsList>

          <TabsContent value="cart" className="flex-1 flex flex-col mt-0">
            <CartContent
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </TabsContent>

          <TabsContent
            value="order"
            className="flex-1 overflow-auto px-6 py-4 mt-0"
          >
            <OrderContent />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
