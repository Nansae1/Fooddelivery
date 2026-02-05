"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/axios";
import { useState } from "react";

export const SelectStatus = ({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) => {
  const [status, setStatus] = useState(currentStatus);
  const toChangeStatus = async () => {
    await api.put(`/orders/${id}`, {
      status,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      <p>Change delivery state</p>
      <div className="flex justify-around">
        <Button
          onClick={() => setStatus("completed")}
          variant={status === "completed" ? "default" : "outline"}
          className="flex justify-center items-center rounded-full h-8 w-23.5 border"
        >
          Completed
        </Button>
        <Button
          onClick={() => setStatus("pending")}
          variant={status === "pending" ? "default" : "outline"}
          className="flex justify-center items-center rounded-full h-8 w-23.5 border"
        >
          Pending
        </Button>
        <Button
          onClick={() => setStatus("cancelled")}
          variant={status === "cancelled" ? "default" : "outline"}
          className="flex justify-center items-center rounded-full h-8 w-23.5 border "
        >
          Cancelled
        </Button>
      </div>
      <Button onClick={() => toChangeStatus()}>Save</Button>
    </div>
  );
};
