import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calendar, ChevronDown, ChevronsUpDownIcon } from "lucide-react";

export default function OrdersPage() {
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
            {Array.from({ length: 12 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Checkbox className="h-4 w-4" />
                </TableCell>
                <TableCell>1</TableCell>
                <TableCell>Test@gamil.com</TableCell>
                <TableCell className="flex items-center">
                  2 foods <ChevronDown />
                </TableCell>
                <TableCell>2024/12/20</TableCell>
                <TableCell>$26.97</TableCell>
                <TableCell>
                  2024/12/СБД, 12-р хороо, СБД нэгдсэн эмнэлэг Sbd negdse...
                </TableCell>
                <TableCell className="bg-white text-whie flex justify-between">
                  Pending <ChevronsUpDownIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
