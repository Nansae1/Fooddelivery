import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { EditFood } from "./EditFood";

export type FoodCardProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  categoryName: string;
  categoryId: string;
};

export function FoodCard({
  id,
  name,
  price,
  ingredients,
  image,
  categoryName,
  categoryId,
}: FoodCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow p-4">
      <div className="relative aspect-video">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-xl object-cover"
        />
        <button className="absolute top-21 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="w-4 h-4 text-red-500" />
            </DialogTrigger>
            <DialogContent>
              <EditFood
                name={name}
                price={price}
                ingredients={ingredients}
                image={image}
                id={id}
                categoryName={categoryName}
                categoryId={categoryId}
              />
            </DialogContent>
          </Dialog>
        </button>
      </div>
      <div className="">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-sm leading-tight flex-1 text-red-500">
            {name}
          </h4>
          <span className="text-sm font-semibold ml-2">${price}</span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2">{ingredients}</p>
      </div>
    </Card>
  );
}
