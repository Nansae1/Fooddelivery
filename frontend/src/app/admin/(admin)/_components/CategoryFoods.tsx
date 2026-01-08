import { Card } from "@/components/ui/card";
import { CreateFoodDialog } from "./CreateFoodDialog";
import { FoodCard } from "./FoodCard";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: {
    _id: string;
    name: string;
  }[];
};

export type FoodSectionProps = {
  categoryName: string;
  categoryId: string;
};

export const CategoryFoods = ({
  categoryName,
  categoryId,
}: FoodSectionProps) => {
  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await api.get<Food[]>(`/foods/category/${categoryId}`);
      setFoods(data);
    };

    getData();
  }, []);
  return (
    <Card className="flex flex-col gap-4 p-4">
      <p>{categoryName}</p>
      <div className="grid grid-cols-4 gap-4 p-6">
        <CreateFoodDialog />

        {foods.map((food) => (
          <FoodCard
            key={food._id}
            id={food._id}
            name={food.name}
            price={food.price}
            ingredients={food.ingredients}
            image={food.image}
          />
        ))}
      </div>
    </Card>
  );
};
