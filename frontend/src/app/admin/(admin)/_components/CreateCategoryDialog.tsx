"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";

type CategoryValues = {
  name: string;
};

export const CreateCategoryDialog = () => {
  const form = useForm<CategoryValues>({
    defaultValues: { name: "" },
  });

  const onSubmit = async (values: CategoryValues) => {
    await api.post("/categories/create", {
      ...values,
      categoryName: values.name,
    });
    console.log("amjilttai");
    form.reset();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" className="rounded-full bg-red-500 text-white">
          <PlusIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-6">
        <DialogHeader className="text-lg font-semibold">
          Add new Category
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>Category name</FormLabel>
                    <FormControl>
                      <Input placeholder="Type category name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full flex justify-end">
              <Button type="submit">Add category</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
