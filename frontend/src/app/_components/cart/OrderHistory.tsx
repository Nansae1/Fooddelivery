import { OrderItem } from "./Order-Content";

type OrderHistoryType = {
  orderItems: OrderItem[];
  status: "pending" | "completed" | "cancelled";
  address: string;
};

export function OrderHistory({
  status,
  address,
  orderItems,
}: OrderHistoryType) {
  const totalPrice = orderItems.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0,
  );
  return (
    <div className="flex flex-col gap-3 w-110 border-b">
      <div className="flex justify-between">
        <p>{totalPrice}</p>
        <p>{status}</p>
      </div>
      <div className="w-full">
        {orderItems.map((item) => {
          return (
            <div className="flex justify-between">
              <p>{item.foodId.name}</p>
              <p>{item.quantity}</p>
            </div>
          );
        })}
      </div>
      <div>
        <p>{address}</p>
      </div>
    </div>
  );
}
