import { useCart } from "@/app/context/Cart-context";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";
import { CartItem as CartItemType, Food } from "@/app/context/Cart-context";

export function OrderContent() {
  const [orderedFood, setOrderedFood] = useState<CartItemType[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get<CartItemType[]>("/orders", {
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
      <div className="flex flex-col items-center justify-center py-12 text-gray-500">
        {orderedFood.map((item) => {
          return <p key={item._id}>{item.name}</p>;
        })}
        <p>No orders yet</p>
      </div>
    </div>
  );
}
