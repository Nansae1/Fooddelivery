"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Category } from "./_components/CreateFoodDialog";
import { api } from "@/lib/axios";
import { CategoryFoods } from "./_components/CategoryFoods";
import { icons, PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CreateCategoryDialog } from "./_components/CreateCategoryDialog";

const AdminPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <main className="flex flex-col gap-6 p-8 ">
      <div className="w-full flex justify-end">
        <img src="/" alt="" className="h-9 w-9 rounded-full" />
      </div>
      <Card className="flex flex-col gap-4 p-6">
        <h3>Dishes category</h3>
        <div className="flex gap-3">
          {categories.map((category) => (
            <Button
              key={category._id}
              value={category._id}
              className="bg-white text-black border border-[#E4E4E7] rounded-full"
            >
              {category.name}
            </Button>
          ))}
          <CreateCategoryDialog />
        </div>
      </Card>

      {categories.map((el) => (
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
