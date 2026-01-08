"use client";
import { MenuSection } from "../_components/cards/MenuSection";
import { api } from "@/lib/axios";
import { Category } from "../admin/(admin)/_components/CreateFoodDialog";
import { useEffect, useState } from "react";

export type MenuSectionType = {
  id: number;
  title: string;
};

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await api.get<Category[]>("/categories");
      setCategories(data);
    };

    fetchCategories();
  });

  return (
    <div className="flex flex-col w-screen items-center justify-center bg-[#404040]">
      <img src="/BG.png" alt="" className="w-screen h-142.5" />
      {categories.map((el) => (
        <MenuSection
          key={el._id}
          categoryId={el._id}
          categoryName={el.name}
        ></MenuSection>
      ))}
    </div>
  );
}
