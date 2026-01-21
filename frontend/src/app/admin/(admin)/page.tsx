"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Category } from "./_components/CreateFoodDialog";
import { api } from "@/lib/axios";
import { CategoryFoods } from "./_components/CategoryFoods";
import { CreateCategoryDialog } from "./_components/CreateCategoryDialog";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";

const AdminPage = () => {
  const [selectedCategories, setSelectedCategories] = useState<string | null>(
    null
  );
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategories(categoryId);
  };
  const handleDelete = async (id: string) => {
    await api.delete(`categories/delete/${id}`);
  };

  return (
    <main className="flex flex-col gap-6 p-8 ">
      <div className="w-full flex justify-end">
        <img src="/" alt="" className="h-9 w-9 rounded-full" />
      </div>
      <Card className="flex flex-col gap-4 p-6">
        <h3>Dishes category</h3>
        <div className="flex gap-3">
          <Button
            className={cn(
              "bg-white text-black border border-[#E4E4E7] rounded-full",
              selectedCategories === null && "bg-black text-white"
            )}
            onClick={() => handleCategorySelect(null)}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category._id}
              onClick={() => handleCategorySelect(category._id)}
              className={cn(
                "bg-white text-black border border-[#E4E4E7] rounded-full",
                category._id === selectedCategories && "bg-black text-white"
              )}
            >
              {category.name}{" "}
              <Button
                className="rounded-full bg-white text-red-500 h-8 w-8"
                onClick={() => handleDelete(category._id)}
              >
                <Trash />
              </Button>
            </Button>
          ))}
          <CreateCategoryDialog />
        </div>
      </Card>

      {selectedCategories === null
        ? categories.map((category) => (
            <CategoryFoods
              key={category._id}
              categoryId={category._id}
              categoryName={category.name}
            />
          ))
        : categories
            .filter((category) => category._id === selectedCategories)
            .map((el) => (
              <CategoryFoods
                key={el._id}
                categoryId={el._id}
                categoryName={el.name}
              />
            ))}
    </main>
  );
};
export default AdminPage;
