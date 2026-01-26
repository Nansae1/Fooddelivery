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
import { api } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash, Upload, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export type EditFoodProps = {
  name: string;
  price: number;
  ingredients: string;
  image: string;
  id: string;
  categoryName: string;
  categoryId: string;
};

export const EditFood = ({
  id,
  name,
  price,
  ingredients,
  image,
  categoryName,
  categoryId,
}: EditFoodProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>(image);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
  };

  const formSchema = z.object({
    foodname: z.string().min(2),
    category: z.string().optional(),
    price: z.number().min(2),
    ingredients: z.string().min(8),
    image: z.any(),
    categoryId: z.string().min(1, {
      message: "Please select a category.",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      foodname: name,
      price: price,
      ingredients: ingredients,
      image: image,
      category: categoryName,
      categoryId: categoryId,
    },
  });

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const response = await fetch(
        `/api/upload?filename=${encodeURIComponent(file.name)}`,
        {
          method: "POST",
          body: file,
        },
      );

      if (!response.ok) {
        const error = await response.json();
        console.error("Upload error:", error);
        alert(`Upload failed: ${error.details || error.error}`);
        return;
      }

      const blob = await response.json();
      setUploadedImageUrl(blob.url);
      form.setValue("image", blob.url);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = () => {
    setUploadedImageUrl("");
    form.setValue("image", "");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("agadg");
    console.log(values);
    await api.put(`/foods/${id}`, {
      name: values.foodname,
      price: values.price,
      ingredients: values.ingredients,
      image: values.image,
      categoryId: values.categoryId,
    });
  };
  const handleDelete = async (id: string) => {
    await api.delete(`foods/delete/${id}`);
  };
  const error = form.formState.errors;

  console.log("errors", error);
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
          name="image"
          render={() => (
            <FormItem className="flex justify-between">
              <FormLabel htmlFor="date" className="text-[14px] font-semibold">
                Image
              </FormLabel>
              <FormControl className="flex flex-col w-72">
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  {uploadedImageUrl ? (
                    <div className="relative border-2 border-gray-300 rounded-lg overflow-hidden">
                      <Image
                        src={uploadedImageUrl}
                        alt="Uploaded food"
                        width={400}
                        height={300}
                        className="w-72 h-48 object-cover"
                      />
                      <button
                        type="button"
                        onClick={removeImage}
                        className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <label
                      htmlFor="file-upload"
                      className="border-2 border-dashed border-gray-300 rounded-lg p-12 flex flex-col items-center justify-center hover:border-gray-400 transition-colors cursor-pointer"
                    >
                      <Upload className="w-8 h-8 text-gray-400 mb-3" />
                      <p className="text-sm text-gray-600">
                        {isUploading
                          ? "Uploading..."
                          : "Choose a file or drag & drop it here"}
                      </p>
                    </label>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex h-16 w-103 justify-between items-center">
          <Button
            className="bg-white text-red-500 border border-red-500"
            onClick={() => handleDelete(id)}
          >
            <Trash />
          </Button>
          <Button className="h-10 w-24.25" type="submit">
            Save changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
