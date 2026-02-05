"use client";

import { OrderContentType } from "@/app/_components/cart/Order-Content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/lib/axios";
import { cn } from "@/lib/utils";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Calendar, ChevronDown, ChevronsUpDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { SelectStatus } from "../_components/Change-status";

type User = {
  userId: any;
  orderItems: [
    {
      foodId: any;
      quantity: Number;
      price: Number;
    },
  ];
  status: String;
  address: String;
};

export default function OrdersPage() {
  // const [user, setUser] = useState<User[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const { data } = await api.get<User[]>("/orders/");
  //     console.log("data", data);
  //     setUser(data);
  //   };

  //   getData();
  // });
  const [orderedFood, setOrderedFood] = useState<OrderContentType[]>([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get<OrderContentType[]>("/orders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setOrderedFood(data);
        console.log("Fetched Items", data);
      } catch (error) {
        console.log("Error fetching Items", error);
      }
    };

    getData();
  }, []);
  console.log(orderedFood);

  return (
    <div className="w-screen flex flex-col gap-6 p-8">
      <div className="w-full flex justify-end">
        <img src="/" alt="" className="h-9 w-9 rounded-full" />
      </div>
      <Card className="flex flex-col">
        <div className="flex justify-between px-4 items-center">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Orders</p>
            <p className="text-xs text-[#71717A]">12 items</p>
          </div>
          <div className="flex gap-3">
            <Button className="h-9 w-75 bg-white text-black border border-[#E4E4E7] rounded-full">
              <Calendar />
              13 June 2023 - 14 July 2023
            </Button>
            <Button className="h-9 w-44.5 rounded-full opacity-20">
              Change delivery state
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Checkbox className="h-4 w-4" />
              </TableHead>
              <TableHead>№</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Food</TableHead>
              <TableHead className="flex justify-between items-center">
                Date <ChevronsUpDownIcon />
              </TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Delivery Address</TableHead>
              <TableHead className="flex justify-between items-center">
                Delivery state <ChevronsUpDownIcon />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderedFood.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox className="h-4 w-4" />
                </TableCell>
                <TableCell>1</TableCell>
                <TableCell>{item.userId.username}</TableCell>
                <TableCell className="flex items-center">
                  {item.orderItems.length} foods <ChevronDown />
                </TableCell>

                <TableCell>2024/12/20</TableCell>
                <TableCell>
                  {item.orderItems.reduce(
                    (acc, cur) => acc + cur.price * cur.quantity,
                    0,
                  )}
                </TableCell>
                <TableCell>{item.address}</TableCell>
                <Dialog>
                  <DialogTrigger>
                    <TableCell
                      className={cn(
                        item.status === "pending" &&
                          "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border border-red-500",
                        item.status === "cancelled" &&
                          "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border ",
                        item.status === "completed" &&
                          "bg-white text-whie flex justify-between items-center rounded-full h-8 w-23.5 border border-green-500",
                      )}
                    >
                      {item.status} <ChevronsUpDownIcon />
                    </TableCell>
                  </DialogTrigger>
                  <DialogContent>
                    <SelectStatus id={item._id} currentStatus={item.status} />
                  </DialogContent>
                </Dialog>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
