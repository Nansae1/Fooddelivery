import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";

export const Changeaddress = () => {
  useEffect(() => {});
  return (
    <div className="flex flex-col gap-6 ">
      <p>Please write your delivery address!</p>
      <Input
        placeholder="Please share your complete address"
        className="pb-13 pt-3"
      />
      <div className="flex gap-4 justify-end">
        <Button>Cancel</Button>
        <Button>Deliver here</Button>
      </div>
    </div>
  );
};
