import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon, X } from "lucide-react";
import { useForm } from "react-hook-form";
import z from "zod";

export type EditFoodProps = {
  name: string;
  price: number;
  ingredients: string;
  image: string;
};

export const EditFood = ({
  name,
  price,
  ingredients,
  image,
}: EditFoodProps) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  };

  const formSchema = z.object({
    foodname: z.string().min(2),
    category: z.string().optional(),
    price: z.number().min(2),
    ingredients: z.string().min(8),
    uploadimg: z.any().refine((file) => file instanceof File),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: name,
      price: price,
      ingredients: ingredients,
      uploadimg: image,
      category: "Salads",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("agadg");
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-106"
      >
        <FormField
          control={form.control}
          name="foodname"
          render={({ field }) => (
            <FormItem className="flex justify-between">
              <FormLabel className="text-[14px] font-semibold">
                Food name
              </FormLabel>
              <Input
                placeholder="Type food name"
                className="h-9.5 w-72"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex justify-between">
              <FormLabel className="text-[14px] font-semibold">
                Dish category
              </FormLabel>
              <NativeSelect className="h-10 w-72" {...field}>
                <NativeSelectOption value="Appetizers">
                  Appetizers
                </NativeSelectOption>
                <NativeSelectOption value="Salads">Salads</NativeSelectOption>
                <NativeSelectOption value="Pizzas">Pizzas</NativeSelectOption>
                <NativeSelectOption value="Lunch favorites">
                  Lunch favorites
                </NativeSelectOption>
              </NativeSelect>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem className="flex justify-between">
              <FormLabel className="text-[14px] font-semibold">
                Ingredients
              </FormLabel>
              <Input
                placeholder="Type food name"
                className="h-10 w-72"
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem className="flex justify-between">
              <FormLabel className="text-[14px] font-semibold">Price</FormLabel>
              <Input
                placeholder="Enter price"
                className="h-9.5 w-72"
                {...field}
              />

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="uploadimg"
          render={({ field }) => (
            <FormItem className="flex justify-between">
              <FormLabel htmlFor="date" className="text-[14px] font-semibold">
                Image
              </FormLabel>
              <FormControl className="flex flex-col">
                <button
                  type="button"
                  className="h-45 w-72 bg-[#7F7F800D] rounded-md relative flex justify-center items-center"
                >
                  <ImageIcon />
                  Choose a file or drag & drop it here
                  <input
                    type="file"
                    onChange={handleFileChange}
                    className="opacity-0 absolute top-0 left-0 h-full w-full"
                  />
                  {field.value && (
                    <img
                      //   src={URL.createObjectURL(field.value)}
                      className="absolute top-0 left-0 h-full w-full object-cover rounded-md"
                    />
                  )}
                  {field.value && (
                    <X
                      onClick={() => {
                        form.setValue("uploadimg", undefined);
                      }}
                      className="h-6 w-6 rounded-xl bg-[#202124] text-white absolute top-4 right-4"
                    />
                  )}
                </button>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex h-16 w-103 justify-end items-end">
          <Button className="h-10 w-24.25" type="submit">
            Add Dish
          </Button>
        </div>
      </form>
    </Form>
  );
};
