"use client";
import { useEffect, useState } from "react";
import { MenuCard } from "./MenuCard";
import { Food, useCart } from "@/app/context/Cart-context";
import { toast } from "sonner";
import { api } from "@/lib/axios";

type FoodSectionProps = {
  categoryName: string;
  categoryId: string;
};

export interface FoodItem {
  _id: number;
  name: string;
  price: string;
  ingredients: string;
  image: string;
  categoryId: number;
}
export const MenuSection = ({ categoryId, categoryName }: FoodSectionProps) => {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [foods, setFoods] = useState<Food[]>([]);

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    console.log("hi");
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<Food[]>(`/foods/category/${categoryId}`);
      setFoods(data);
    };

    getData();
  }, []);
  return (
    <div className="w-screen flex flex-col gap-13 my-7">
      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full max-w-316 flex justify-start text-3xl font-semibold text-white">
          {categoryName}
        </div>
        <div className="grid grid-cols-3 gap-8 w-full max-w-316">
          {foods?.map((food) => (
            <MenuCard
              key={food._id}
              food={food}
              id={food._id}
              name={food.name}
              price={food.price}
              ingredients={food.ingredients}
              image={food.image}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
