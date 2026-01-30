"use client";

import { useAuth } from "@/app/context/AuthProvider";
import { useCart } from "@/app/context/Cart-context";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ChevronRight,
  LocationEdit,
  Map,
  MapIcon,
  ShoppingCart,
  User,
} from "lucide-react";
import Link from "next/link";
import { Changeaddress } from "./Changeaddress";

interface HeaderProps {
  totalItems?: number;
  onCartClick?: () => void;
}

export const Header = ({ totalItems }: HeaderProps) => {
  const { addToCart, getTotalItems, setIsCartOpen } = useCart();

  const { user, logout } = useAuth();

  return (
    <div className="w-screen h-17 flex items-center justify-between bg-black px-4">
      <img src="/Logo=Horizon.png" className="h-11 w-36.5" />
      <div className="flex gap-3">
        {user ? (
          <></>
        ) : (
          <Link href="/auth/register">
            <Button className="h-9 w-18.25 bg-white text-black rounded-full">
              Sign up
            </Button>
          </Link>
        )}
        {user ? (
          <></>
        ) : (
          <Link href="/auth/login">
            <Button className="h-9 w-16.25 bg-red-500 text-white rounded-full">
              Log In
            </Button>
          </Link>
        )}
        <Dialog>
          <DialogTrigger>
            <Button
              variant="outline"
              className="px-4 py-1.5 h-9 bg-white rounded-full text-xs flex items-center gap-2 hover:bg-gray-50 border-none "
            >
              <LocationEdit className="text-red-500" />
              <p className="text-red-500">Delivery address:</p>
              <p className="text-[#71717A]">Add Location</p>
              <ChevronRight className="text-[#18181B]" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <Changeaddress />
          </DialogContent>
        </Dialog>

        <Button
          size="icon"
          className="w-9 h-9 bg-white rounded-full hover:bg-red-600 relative transition-all shadow-md"
          onClick={() => setIsCartOpen(true)}
        >
          <ShoppingCart className="h-4 w-4 text-black" />
        </Button>
        {user ? (
          <Button className="text-white flex items-center" onClick={logout}>
            Hello {user.username}!
          </Button>
        ) : (
          <Link href="/auth/login">
            <Button className="w-9 h-9 bg-red-500 rounded-full hover:bg-red-600 relative transition-all shadow-md">
              <User />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
