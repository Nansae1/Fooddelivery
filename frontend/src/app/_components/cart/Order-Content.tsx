import { useCart } from "@/app/context/Cart-context";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { CartItem as CartItemType, Food } from "@/app/context/Cart-context";
import { OrderHistory } from "./OrderHistory";

type User = {
  _id: string;
  username: string;
  email: string;
  role: "customer" | "admin";
  createdAt: string;
  updatedAt: string;
};

export type OrderItem = {
  _id: string;
  foodId: Food;
  quantity: number;
  price: number;
};
export type OrderContentType = {
  _id: string;
  userId: User;
  orderItems: OrderItem[];
  status: "pending" | "completed" | "cancelled";
  address: string;
};

export function OrderContent() {
  const [orderedFood, setOrderedFood] = useState<OrderContentType[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get<OrderContentType[]>("/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrderedFood(data);
        console.log("Fetched Items", data);
      } catch (error) {
        console.log("Error fetching Items", error);
      }
    };

    getData();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center  text-gray-500">
        {orderedFood.length === 0 ? (
          <p>No orders yet?</p>
        ) : (
          <div className="flex flex-col gap-5 overflow-scroll">
            <p className="text-black font-semibold ">Order History</p>
            <div className="border-b">
              {orderedFood.map((item) => {
                return (
                  <OrderHistory
                    key={item._id}
                    status={item.status}
                    address={item.address}
                    orderItems={item.orderItems}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* <p>No orders yet</p> */}
      </div>
    </div>
  );
}
