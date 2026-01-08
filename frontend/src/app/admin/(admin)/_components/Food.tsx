import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PenIcon } from "lucide-react";
import { EditFood } from "./EditFood";

export const Food = () => {
  return (
    <div className="h-60 w-67 flex flex-col bg-white rounded-md w-5 items-center gap-4 pt-4 border border-[#E4E4E7] relative">
      <img src="/food.png" alt="" className="h-32 w-59 rounded-md" />
      <Dialog>
        <DialogTrigger asChild>
          <Button className="absolute top-25 right-10 bg-white text-red rounded-full">
            <PenIcon />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[460px] bg-white">
          <DialogHeader>Dishes info</DialogHeader>
          <EditFood />
        </DialogContent>
      </Dialog>
      <div className="flex flex-col gap-2 w-59">
        <div className="flex justify-between">
          <p className="text-red-500 text-sm">Grilled Chicken cobb salad</p>
          <p className="font-semibold text-xs">$12.99</p>
        </div>
        <p className="text-xs">
          Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.
        </p>
      </div>
    </div>
  );
};
