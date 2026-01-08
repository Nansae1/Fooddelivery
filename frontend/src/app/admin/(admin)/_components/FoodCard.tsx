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
};

export function FoodCard({ name, price, ingredients, image }: FoodCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <Image src={image} alt={name} fill className="object-cover" />
        <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
          <Dialog>
            <DialogTrigger asChild>
              <Pencil className="w-4 h-4 text-gray-600" />
            </DialogTrigger>
            <DialogContent>
              <EditFood
                name={name}
                price={price}
                ingredients={ingredients}
                image={image}
              />
            </DialogContent>
          </Dialog>
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-medium text-sm leading-tight flex-1">{name}</h4>
          <span className="text-sm font-semibold ml-2">${price}</span>
        </div>
        <p className="text-xs text-gray-500 line-clamp-2">{ingredients}</p>
      </div>
    </Card>
  );
}
