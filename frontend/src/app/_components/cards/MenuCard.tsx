"use client";
import { Button } from "@/components/ui/button";
import { FoodItem } from "./MenuSection";
import { X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Food } from "@/app/admin/(admin)/_components/CategoryFoods";

interface Cardtype {
  onAddToCart: (food: FoodItem, quantity: number) => void;
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
  food: Food;
}

export const MenuCard = ({
  id,
  name,
  price,
  ingredients,
  image,
  food,
  onAddToCart,
}: Cardtype) => {
  const [added, setAdded] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [showMessage, setShowMessage] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);

    toast.success("✓ Food is being added to the cart!", { duration: 2000 });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setQuantity(1);
    } else {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    onAddToCart(food, quantity);
    setQuantity(1);
  };

  return (
    <div className="h-85 w-99 flex flex-col bg-white rounded-md w-5 items-center gap-4 pt-4 relative">
      <img src={image} alt="" className="h-52 w-91 rounded-md" />
      <div className="flex flex-col gap-2 w-91">
        <div className="flex justify-between">
          <p className="text-red-500 text-2xl">{name}</p>
          <p className="font-semibold text-lg">{price}</p>
        </div>
        <p className="text-sm">{ingredients}</p>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className={`flex justify-center items-center w-11 h-11 text-red-500 text-xl bg-white rounded-full absolute top-40 right-9 ${
              added ? "bg-black text-white" : "bg-white text-red-500"
            }`}
            onClick={handleAdd}
            variant="outline"
          >
            {added ? "✓" : "+"}
          </Button>
        </DialogTrigger>
        <DialogContent className="h-103 sm:max-w-206 flex justify-center [&>button]:hidden">
          <DialogTitle></DialogTitle>
          <div className="h-103 w-206 flex gap-6">
            <img src={image} alt="" className="h-91 w-94 rounded-md" />
            <div className="h-91 w-94 flex flex-col gap-0">
              <DialogClose asChild>
                <button className="w-full h-9 flex justify-end">
                  <X className="h-9 w-9 rounded-full text-xs text-[#E4E4E7] border border-[#E4E4E7]" />
                </button>
              </DialogClose>
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3">
                  <p className="text-3xl text-red-500 font-semibold">{name}</p>
                  <p className="text-base">{ingredients}</p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <div className="flex flex-col">
                      <p className="text-base">Total price</p>
                      <p className="font-semibold text-2xl">{price}</p>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        className="h-11 w-11 flex justify-center items-center"
                        onClick={handleDecrement}
                      >
                        -
                      </Button>
                      <Input
                        className="text-lg h-11 w-9 border-none"
                        value={quantity}
                        onChange={handleQuantityChange}
                      ></Input>
                      <Button
                        className="h-11 w-11 flex justify-center items-center"
                        onClick={handleIncrement}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <Button
                    className="h-11 w-94 bg-black text-white rounded-full"
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
